module.exports = function (Handlebars) {
  Handlebars.registerHelper('changelog', function (
    {
      data: {
        root: { releases },
      },
    },
    _options,
  ) {
    return createChangelog(releases);
  });
};

/**
 * Search elements in a array base on pattern
 * @param {RegExp} pattern
 * @param {Array} array
 */
const search = (pattern, array) => {
  return array.filter(el => {
    if (el.id) {
      return el.message.match(pattern) || el.commit.subject.match(pattern) || el.commit.message.match(pattern);
    } else {
      return el.message.match(pattern) || el.subject.match(pattern);
    }
  });
};

const searchMultiples = (pattern, ...array) => {
  let results = [];
  array.forEach(item => {
    const finded = search(pattern, item);
    results = results.concat(finded);
  });
  return results;
};

/**
 * Remove duplicated items
 * @param {Array} array
 */
const removeDuplicates = array => {
  return array.reduce((unique, item) => {
    return unique.includes(item) ? unique : [...unique, item];
  }, []);
};

const handleMessageByType = el => {
  const title = el.subject || el.commit.subject;
  const hash = el.shorthash;
  if (el.shorthash) {
    return `${title} ([${hash}](${el.href}))`;
  } else {
    return `${title}`;
  }
};

/**
 * Parse for build template
 * @param {Array} changelogItems
 */
const parseForTemplate = changelogItems => {
  return changelogItems.map(changelog => {
    return {
      ...changelog,
      features: changelog.features.map(el => handleMessageByType(el)),
      breaks: changelog.breaks.map(el => handleMessageByType(el)),
      fixes: changelog.fixes.map(el => handleMessageByType(el)),
    };
  });
};

const buildChangelog = (releases = []) => {
  let changelog = [];
  releases.forEach(({ tag, title, date, isoDate, niceDate, commits, merges, fixes }) => {
    changelog.push({
      tag: tag,
      release: title,
      date: date,
      isoDate: isoDate,
      niceDate: niceDate,
      features: removeDuplicates(searchMultiples(/feature:/, commits, merges)),
      breaks: removeDuplicates(searchMultiples(/break:/, commits, merges)),
      fixes: removeDuplicates(searchMultiples(/fix:/, commits, merges, fixes)),
    });
  });
  return changelog;
};

const createChangelog = gitLog => {
  let finalChangelog = '';
  const items = buildChangelog(gitLog);
  const releases = parseForTemplate(items);

  releases.forEach(el => {
    finalChangelog += `\n\n ## ${el.release} \n`;
    finalChangelog += `${el.niceDate} \n\n`;

    if (el.breaks?.length > 0) {
      finalChangelog += `### Breaking changes \n\n`;
      finalChangelog += el.breaks.map(item => `- ${item}`).join('\n');
    }

    if (el.features?.length > 0) {
      finalChangelog += `### Features \n\n`;
      finalChangelog += el.features.map(item => `- ${item}`).join('\n');
    }

    if (el.fixes?.length > 0) {
      finalChangelog += `### Fixes \n\n`;
      finalChangelog += el.fixes.map(item => `- ${item}`).join('\n');
    }
  });

  return finalChangelog;
};

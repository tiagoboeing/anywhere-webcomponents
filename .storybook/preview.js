// export const parameters = {
//   actions: { argTypesRegex: "^on[A-Z].*" },
// }

import { withA11y } from '@storybook/addon-a11y';
import { configureActions } from '@storybook/addon-actions';
import { withTests } from '@storybook/addon-jest';
import { withKnobs } from '@storybook/addon-knobs';
import { withLinks } from '@storybook/addon-links';
import { addDecorator, addParameters } from '@storybook/html';
import { themes } from '@storybook/theming';
import results from '../jest-test-results.json';

export const parameters = {
  layout: 'centered',
  docs: {
    theme: themes.dark,
  },
  backgrounds: {
    values: [
      { name: 'white', value: '#ffffff', default: true },
      { name: 'light', value: '#eeeeee' },
      { name: 'gainsboro', value: '#DCDCDC' },
      { name: 'lightgrey', value: '#D3D3D3' },
      { name: 'silver', value: '#C0C0C0' },
      { name: 'darkgrey', value: '#A9A9A9' },
      { name: 'grey', value: '#808080' },
      { name: 'dimgrey', value: '#696969' },
      { name: 'lightslategrey', value: '#778899' },
      { name: 'slategrey', value: '#708090' },
      { name: 'darkslategrey', value: '#2F4F4F' },
      { name: 'dark', value: '#555555' },
      { name: 'black', value: '#000000' },
    ],
  },
};

addParameters({
  options: {},
});

addDecorator(withKnobs);
addDecorator(withA11y);
addDecorator(withLinks);
addDecorator(
  withTests({
    results,
    filesExt: '.spec.@(ts|tsx)',
  }),
);

configureActions({
  depth: 100,
  // Limit the number of items logged into the actions panel
  limit: 20,
});

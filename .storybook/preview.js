// export const parameters = {
//   actions: { argTypesRegex: "^on[A-Z].*" },
// }

import { addParameters, configure, addDecorator } from '@storybook/html';
import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { withActions, configureActions } from '@storybook/addon-actions';
import { withLinks } from '@storybook/addon-links';
import { withTests } from '@storybook/addon-jest';
import results from '../jest-test-results.json';

addParameters({
  options: {},

  backgrounds: [
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

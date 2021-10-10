import { withTests } from '@storybook/addon-jest';
import results from '../../../.jest-test-results.json';
import { defaultTheme } from '../../defaultTheme';
import { AwStatus } from '../../models/status.model';
import readme from './readme.md';

export default {
  title: 'Components/Loading',
  decorators: [
    Loading =>
      `<div style="box-sizing: border-box; padding: 40px;">
        ${Loading()}
      </div>`,
    withTests({ results })
  ],
  parameters: {
    notes: {
      markdown: readme,
    },
    jest: ['aw-loading.spec.tsx'],
  },
  argTypes: {
    theme: {
      description: 'Anywhere theme',
      table: {
        type: {
          summary: 'light | dark',
        },
        defaultValue: {
          summary: defaultTheme,
        },
      },
      control: {
        type: 'select',
        options: ['light', 'dark'],
      },
      defaultValue: defaultTheme,
    },
    visible: {
      description: 'If `true` loading state will be displayed',
      control: 'boolean',
      defaultValue: false,
      table: {
        type: {},
        defaultValue: {
          summary: false,
        },
      },
    },
    status: {
      description: 'The status of loading indicator (color)',
      table: {
        type: {
          summary: Object.keys(AwStatus).join(' | '),
        },
        defaultValue: {
          summary: AwStatus.primary,
        },
      },
      control: {
        type: 'select',
        options: Object.keys(AwStatus),
      },
      defaultValue: AwStatus.primary,
    },
  },
};

const Template = ({ theme, visible, status }) =>
  `<aw-loading
    id="my-loading"
    ${visible && `visible="${visible}"`}
    status=${status}
    theme=${theme}
  ></aw-loading>`;

export const Default = Template.bind({});
Default.args = {
  visible: true,
};

export const Success = Template.bind({});
Success.args = {
  visible: true,
  status: AwStatus.success,
};

export const CustomContent = ({ theme, visible, status }) =>
  `<aw-loading
  id="my-loading"
  ${visible && `visible="${visible}"`}
  status=${status}
  theme=${theme}
>
  <div>
    <b>Adding a loading indicator</b>
    <p>You can add any content here and the loading component will be enveloped.</p>
    <p>Maybe will be needed to fix the position.</p>
  </div>
</aw-loading>`;
CustomContent.args = {
  visible: true,
  status: AwStatus.info,
};

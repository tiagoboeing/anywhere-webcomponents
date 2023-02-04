import { withTests } from '@storybook/addon-jest';
import results from '../../../.jest-test-results.json';
import { defaultTheme } from '../../defaultTheme';
import { AwStatus } from '../../models/status.model';
import { AwAvatarMode } from './aw-avatar.model';
import readme from './readme.md';

export default {
  title: 'Components/Avatar',
  decorators: [
    Avatar =>
      `<div style="box-sizing: border-box; padding: 40px;">
        ${Avatar()}
      </div>`,
    withTests({ results }),
  ],
  parameters: {
    notes: {
      markdown: readme,
    },
    jest: ['aw-avatar.spec.tsx'],
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
    mode: {
      description: 'Mode of avatar',
      control: {
        type: 'select',
        options: Object.keys(AwAvatarMode),
      },
      defaultValue: AwAvatarMode.rounded,
      table: {
        type: {
          summary: Object.keys(AwAvatarMode).join(' | '),
        },
        defaultValue: {
          summary: AwAvatarMode.rounded,
        },
      },
    },
    styled: {
      description:
        'If `true` the avatar receives a border with `status` color.',
      control: 'boolean',
      defaultValue: true,
      table: {
        type: {},
        defaultValue: {
          summary: true,
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
    width: {
      description: `Avatar width size (in pixels)`,
      table: {
        type: {},
      },
      control: 'number',
    },
    height: {
      description: `Avatar height size (in pixels)`,
      table: {
        type: {},
      },
      control: 'number',
    },
  },
};

const Template = ({ theme, status, styled, width, height, mode }) =>
  `<aw-avatar
    id="my-avatar"
    status=${status}
    styled=${styled}
    ${width && `width=${width}`}
    ${height && `height=${height}`}
    mode=${mode}
    theme=${theme}
  >
    <img src="https://picsum.photos/200" alt="Example image" width="100%" height="100%"/>
  </aw-avatar>`;

export const Default = Template.bind({});
Default.args = {};

export const Success = Template.bind({});
Success.args = {
  status: AwStatus.success,
};

export const Radius = Template.bind({});
Radius.args = {
  mode: AwAvatarMode.radius,
};

export const Square = Template.bind({});
Square.args = {
  mode: AwAvatarMode.square,
};

export const WithoutStyle = Template.bind({});
WithoutStyle.args = {
  styled: false,
};

export const WithoutStyleSquare = Template.bind({});
WithoutStyleSquare.args = {
  styled: false,
  mode: AwAvatarMode.square,
};

export const BigImage = Template.bind({});
BigImage.args = {
  width: 200,
  height: 200,
};

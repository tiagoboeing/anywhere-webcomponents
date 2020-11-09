import { withActions } from '@storybook/addon-actions';
import { withTests } from '@storybook/addon-jest';
import results from '../../../.jest-test-results.json';
import { AwStatus } from '../../models/status.model';
import {
  AwButtonColor,
  AwButtonIconMode,
  AwButtonMode,
  AwButtonSize
} from './aw-button.model';
import readme from './readme.md';

export default {
  title: 'Components/Button',
  decorators: [
    Button =>
      `<div style="box-sizing: border-box; padding: 40px;">
        ${Button()}
      </div>`,
    withTests({ results }),
    withActions('clicked'),
  ],
  parameters: {
    notes: {
      markdown: readme,
    },
    jest: ['aw-button.spec.tsx'],
  },
  argTypes: {
    label: {
      control: 'text',
      defaultValue: 'Button',
      description: 'Text to show inside button',
      type: {
        required: true,
      },
    },
    status: {
      description: 'The status of button (color)',
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
    mode: {
      description: 'Mode of button (like square or rounded)',
      table: {
        type: {
          summary: Object.keys(AwButtonMode).join(' | '),
        },
        defaultValue: { summary: AwButtonMode.rounded },
      },
      control: {
        type: 'select',
        options: Object.keys(AwButtonMode),
      },
      defaultValue: 'rounded',
    },
    color: {
      description: 'Colors of button (like gradient)',
      control: {
        type: 'select',
        options: Object.keys(AwButtonColor),
      },
      defaultValue: 'solid',
      table: {
        type: {
          summary: Object.keys(AwButtonColor).join(' | '),
        },
        defaultValue: {
          summary: AwButtonColor.solid,
        },
      },
    },
    size: {
      description: 'Size of button',
      control: {
        type: 'select',
        options: Object.keys(AwButtonSize),
      },
      defaultValue: AwButtonSize.large,
      table: {
        type: {
          summary: Object.keys(AwButtonSize).join(' | '),
        },
        defaultValue: {
          summary: AwButtonSize.large,
        },
      },
    },
    onlyIcon: {
      description: 'If `true` button removes label',
      control: 'boolean',
      defaultValue: false,
      table: {
        type: {},
        defaultValue: {
          summary: false,
        },
      },
    },
    icon: {
      description: `Icon class from FontAwesome 5 Free. \n\n Allows to use: brands, regular, solid. \n\n Example: \`far fa-paper-plane\``,
      table: {
        type: {},
      },
      control: 'text',
      defaultValue: 'fas fa-rocket',
    },
    iconMode: {
      description: `Position of icon`,
      defaultValue: AwButtonIconMode.left,
      control: {
        type: 'select',
        options: Object.keys(AwButtonIconMode),
      },
      table: {
        type: {
          summary: Object.keys(AwButtonIconMode).join(' | '),
        },
        defaultValue: {
          summary: AwButtonIconMode.left,
        },
      },
    },
    disabled: {
      description: 'Boolean to indicate if button is disabled',
      control: 'boolean',
      defaultValue: false,
      table: {
        type: {},
        defaultValue: {
          summary: false,
        },
      },
    },
    fullWidth: {
      description: 'If `true` button use `width: 100%`',
      control: 'boolean',
      defaultValue: false,
      table: {
        type: {},
        defaultValue: {
          summary: false,
        },
      },
    },
  },
};

const Template = ({ label, status, mode, color, size, fullWidth, disabled, onlyIcon, icon, iconMode }) =>
  `<aw-button
    id="my-button"
    ${icon && `icon="${icon}"`}
    ${fullWidth && 'fullWidth'}
    label="${label || 'Default label'}"
    status=${status}
    color=${color}
    mode=${mode}
    theme="light"
    size=${size}
    iconMode="${iconMode}"
    ${onlyIcon && 'onlyIcon'}
    ${disabled && 'disabled'}
  ></aw-button>`;

export const Default = Template.bind({});

export const Success = Template.bind({});
Success.args = {
  label: 'Success',
  status: AwStatus.success,
};

export const Outline = Template.bind({});
Outline.args = {
  label: 'Outline',
  status: AwStatus.success,
  color: AwButtonColor.outline,
};

export const Square = Template.bind({});
Square.args = {
  label: 'Danger',
  status: AwStatus.danger,
  mode: AwButtonMode.square,
  color: AwButtonColor.gradient,
};

export const onlyIcon = Template.bind({});
onlyIcon.args = {
  onlyIcon: true,
};

export const iconOnRight = Template.bind({});
iconOnRight.args = {
  iconMode: AwButtonIconMode.right,
  icon: 'fas fa-check',
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  fullWidth: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  icon: null,
};

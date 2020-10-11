import { withActions } from '@storybook/addon-actions';
import { addDecorator } from '@storybook/html';
import { AwButtonColor, AwButtonMode, AwButtonSize, AwButtonStatus } from './aw-button.model';
import readme from './readme.md';

export default {
  title: 'Components/Button',
  decorators: [
    Button => `<div style="box-sizing: border-box; padding: 40px;">
    ${Button()}
  </div>`,
  ],
  parameters: {
    notes: {
      markdown: readme,
    },
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
          summary: Object.keys(AwButtonStatus).join(' | '),
        },
        defaultValue: {
          summary: AwButtonStatus.primary,
        },
      },
      control: {
        type: 'select',
        options: Object.keys(AwButtonStatus),
      },
      defaultValue: AwButtonStatus.primary,
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
      defaultValue: 'large',
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

addDecorator(withActions('clicked'));

const Template = ({ label, status, mode, color, size, fullWidth, disabled, onlyIcon, icon }) =>
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
    ${onlyIcon && 'onlyIcon'}
    ${disabled && 'disabled'}
  ></aw-button>`;

export const Default = Template.bind({});

export const Success = Template.bind({});
Success.args = {
  label: 'Success',
  status: AwButtonStatus.success,
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  fullWidth: true,
};

export const onlyIcon = Template.bind({});
onlyIcon.args = {
  onlyIcon: true,
};

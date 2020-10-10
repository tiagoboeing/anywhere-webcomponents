import { withActions } from '@storybook/addon-actions';
import { addDecorator } from '@storybook/html';
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
    label: { control: 'text', defaultValue: 'Primary' },
    status: { control: 'text', defaultValue: 'primary' },
    mode: { control: 'text', defaultValue: 'rounded' },
    color: { control: 'text', defaultValue: 'solid' },
    theme: { control: 'text', defaultValue: 'light' },
    size: { control: 'text', defaultValue: 'large' },
    disabled: { control: 'boolean', defaultValue: false },
    fullWidth: { control: 'boolean', defaultValue: false },
    test: {
      description: 'overwritten description',
      table: {
        type: {
          summary: 'something short',
          detail: 'something really really long',
        },
      },
      control: {
        type: null,
      },
    },
  },
};

addDecorator(withActions('clicked'));

const Template = ({ label, status, mode, color, theme, size, fullWidth, disabled }) =>
  `<aw-button
    label=${label}
    status=${status}
    color=${color}
    mode=${mode}
    theme=${theme}
    size=${size}
    ${fullWidth && 'fullWidth'}
    ${disabled && 'disabled'}
  ></aw-button>`;

export const Default = Template.bind({});

export const Tiny = Template.bind({});
Tiny.storyName = 'Sizes/So simple!';
Tiny.args = {
  label: 'Tiny',
  size: 'tiny',
};

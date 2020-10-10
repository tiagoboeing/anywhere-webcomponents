import { action, withActions } from '@storybook/addon-actions';
import { addDecorator } from '@storybook/html';
import readme from './readme.md';

export default {
  title: 'Components/Button',
  notes: {
    markdown: readme,
  },
  argTypes: {
    label: { control: 'text' },
    status: { control: 'text' },
    mode: { control: 'text' },
    color: { control: 'text' },
    theme: { control: 'text' },
  },
};

addDecorator(withActions('clicked'));

const Template = ({ label, status, mode, color, theme }) =>
  `<aw-button label=${label} status=${status} color=${color} mode=${mode} theme=${theme}></aw-button>`;

Template.args = {
  mode: 'rounded',
  color: 'solid',
  theme: 'light',
};

export const Default = Template.bind({});
Default.args = {
  ...Template.args,
  label: 'Primary',
  status: 'primary',
};

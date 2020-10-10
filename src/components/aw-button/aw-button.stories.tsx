import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Button',
  argTypes: {
    label: { control: 'text' },
    status: { control: 'text' },
  },
};

export const Primary = ({ label, status }) => {
  const btn = document.createElement('aw-button');
  btn.label = label;
  btn.status = status;
  btn.addEventListener('clicked', evt => action('This was clicked')(evt));
  return btn;
};
Primary.args = {
  label: 'Primary',
  status: 'primary',
};

import React from 'react';

import { Button } from './Button';

export default {
  title: 'Component/Button',
  component: Button,
  argTypes: { onClick: { action: 'clicked' } },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'label',
};


export const Secondary = Template.bind({});
Secondary.args = {
  isPrimary: false,
  label: 'label',
};

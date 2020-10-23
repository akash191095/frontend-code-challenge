import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Button, ButtonProps } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Find a gym club',
};

export const Secondary = Template.bind({});
Secondary.args = {
  primary: false,
  label: 'Order Now',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Find a gym club',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  label: 'Find a gym club',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Find a gym club',
};

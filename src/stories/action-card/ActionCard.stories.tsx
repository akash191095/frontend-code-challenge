import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { ActionCard, ActionCardProps } from './ActionCard';

export default {
  title: 'Example/ActionCard',
  component: ActionCard,
} as Meta;

const Template: Story<ActionCardProps> = (args) => <ActionCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  textPrimary: 'Fill up the form',
  textSecondary: 'Fill in your basic information to join the Gym Club.',
  link: '/',
};

export const Secondary = Template.bind({});
Secondary.args = {
  textPrimary: 'Fill up the form',
};

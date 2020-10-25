import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { WithBackground, WithBackgroundProps } from './WithBackground';

export default {
  title: 'Example/WithBackground',
  component: WithBackground,
} as Meta;

const Template: Story<WithBackgroundProps> = (args) => (
  <WithBackground {...args} />
);

export const Main = Template.bind({});

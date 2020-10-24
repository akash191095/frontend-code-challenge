import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Sidebar, SidebarProps } from './Sidebar';

export default {
  title: 'Example/Sidebar',
  component: Sidebar,
} as Meta;

const Template: Story<SidebarProps> = (args) => <Sidebar {...args} />;

export const Main = Template.bind({});
Main.args = {
  username: 'Jimmy Hendrix',
  profileLink: '/me',
};

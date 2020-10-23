import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { OfferCard, OfferCardProps } from './OfferCard';

export default {
  title: 'Example/OfferCard',
  component: OfferCard,
} as Meta;

const Template: Story<OfferCardProps> = (args) => <OfferCard {...args} />;

export const Main = Template.bind({});
Main.args = {
  name: 'Pilates',
  description:
    'Developed first by Joseph Pilates, after whom the technique is name…',
  price: 4220,
  durationMonths: 6,
};

import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import TrendingCard from './TrendingCard.tsx';

const meta: Meta<typeof TrendingCard> = {
  component: TrendingCard,
};
export default meta;

type Story = StoryObj<typeof TrendingCard>;
export const TrendingDes: Story = {
    render: () => <TrendingCard   
    cityName='Ramallah' countryName='Palestine' description='Explore the vibrant city of Ramallah, known for its rich history and cultural diversity. Discover historical landmarks, bustling markets, and enjoy the warmth of Palestinian hospitality.' 
    thumbnailUrl="https://www.irishtimes.com/resizer/zKAUput0v-pdbzu3keSyhWThHJY=/1600x0/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/irishtimes/N4P6EWEXC55QQBJJ5Q43X66BPU.jpg"
    />,
};


import type { Meta, StoryObj } from '@storybook/react';

import { BrandsAndPartners } from '@/widgets/BrandsAndPartners/index';

const meta: Meta<typeof BrandsAndPartners> = {
  component: BrandsAndPartners,
};

export default meta;
type Story = StoryObj<typeof BrandsAndPartners>;

export const Default: Story = {};

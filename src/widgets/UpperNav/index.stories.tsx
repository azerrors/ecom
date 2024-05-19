import type { Meta, StoryObj } from '@storybook/react';

import { UpperNav } from '@/widgets/UpperNav/index';

const meta: Meta<typeof UpperNav> = {
  component: UpperNav,
};

export default meta;
type Story = StoryObj<typeof UpperNav>;

export const Default: Story = {
  args: {
    loading: true,
  },
};

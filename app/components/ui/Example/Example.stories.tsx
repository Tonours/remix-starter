import type { Meta, StoryObj } from '@storybook/react';

import { Example } from './Example';

const meta = {
  title: 'UI/Example',
  component: Example,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Example>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Default Example',
  },
};
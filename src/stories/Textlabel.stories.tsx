import type { Meta, StoryObj } from '@storybook/react';

import Label from '@components/TextLabel/TextLabel';

const meta: Meta<typeof Label> = {
  title: 'TextLabel',
  component: Label,
  argTypes: {
    children: {
      control: { type: 'text' },
    },
  },
  args: {
    children: 'Label',
  },
};

export default meta;

export const Default: StoryObj<typeof meta> = {};

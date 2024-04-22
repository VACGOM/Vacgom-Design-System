/** @jsxImportSource @emotion/react */
import { containerStyle, informationStyle } from './style';
import type { Meta, StoryObj } from '@storybook/react';

import type { ButtonProps } from '@components/Button/Button';
import Button from '@components/Button/Button';

const meta = {
  title: 'Button',
  component: Button,
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'outline', 'disabled'],
    },
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'large'],
    },
    children: {
      control: { type: 'text' },
    },
  },
  args: {
    variant: 'primary',
    size: 'large',
    children: 'Button',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

const createButtonStory = (variant: ButtonProps['variant']) => ({
  args: {
    variant,
  },
  argTypes: {
    variant: {
      control: false,
    },
  },
});

export const Playground: Story = {};

export const Variants: Story = {
  render: ({ size, children }) => {
    return (
      <ul css={containerStyle}>
        <li css={informationStyle}>
          <h6>Primary</h6>
          <Button variant="primary" size={size}>
            {children}
          </Button>
        </li>
        <li css={informationStyle}>
          <h6>Secondary</h6>
          <Button variant="secondary" size={size}>
            {children}
          </Button>
        </li>
        <li css={informationStyle}>
          <h6>Outline</h6>
          <Button variant="outline" size={size}>
            {children}
          </Button>
        </li>
        <li css={informationStyle}>
          <h6>Disabled</h6>
          <Button variant="disabled" size={size}>
            {children}
          </Button>
        </li>
      </ul>
    );
  },
  argTypes: {
    variant: {
      control: false,
    },
  },
};

export const Sizes: Story = {
  render: ({ variant, children }) => {
    return (
      <ul css={containerStyle}>
        <li css={informationStyle}>
          <h6>Small</h6>
          <Button variant={variant} size="small">
            {children}
          </Button>
        </li>
        <li css={informationStyle}>
          <h6>Medium</h6>
          <Button variant={variant} size="medium">
            {children}
          </Button>
        </li>
        <li css={informationStyle}>
          <h6>Large</h6>
          <Button variant={variant} size="large">
            {children}
          </Button>
        </li>
      </ul>
    );
  },
  argTypes: {
    size: {
      control: false,
    },
  },
};


export const Primary: Story = createButtonStory('primary');

export const Secondary: Story = createButtonStory('secondary');

export const Outline: Story = createButtonStory('outline');

export const Danger: Story = createButtonStory('disabled');
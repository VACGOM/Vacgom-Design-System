/** @jsxImportSource @emotion/react */
import { containerStyle, informationStyle } from './style';
import type { Meta, StoryObj } from '@storybook/react';

import type { ButtonButtomProps } from '@components/Button-bottom/Button-bottom';
import ButtonBottom from '@components/Button-bottom/Button-bottom';

const meta = {
  title: 'Button-bottom',
  component: ButtonBottom,
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'unavailable'],
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
    children: 'ButtonBottom',
  },
} satisfies Meta<typeof ButtonBottom>;

export default meta;
type Story = StoryObj<typeof meta>;

const createButtonBottomStory = (variant: ButtonButtomProps['variant']) => ({
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
          <ButtonBottom variant="primary" size={size}>
            {children}
          </ButtonBottom>
        </li>
        <li css={informationStyle}>
          <h6>Secondary</h6>
          <ButtonBottom variant="secondary" size={size}>
            {children}
          </ButtonBottom>
        </li>
        <li css={informationStyle}>
          <h6>Unavailable</h6>
          <ButtonBottom variant="unavailable" size={size}>
            {children}
          </ButtonBottom>
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
          <ButtonBottom variant={variant} size="small">
            {children}
          </ButtonBottom>
        </li>
        <li css={informationStyle}>
          <h6>Medium</h6>
          <ButtonBottom variant={variant} size="medium">
            {children}
          </ButtonBottom>
        </li>
        <li css={informationStyle}>
          <h6>Large</h6>
          <ButtonBottom variant={variant} size="large">
            {children}
          </ButtonBottom>
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


export const Primary: Story = createButtonBottomStory('primary');

export const Secondary: Story = createButtonBottomStory('secondary');

export const Outline: Story = createButtonBottomStory('unavailable');

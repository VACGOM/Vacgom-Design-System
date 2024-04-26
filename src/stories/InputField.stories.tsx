import { containerStyle, informationStyle } from './style';
import type { Meta, StoryObj } from '@storybook/react';

import InputField from '@components/InputField/InputField';

const meta = {
  title: 'InputField',
  component: InputField,
  argTypes: {
    label: {
      control: { type: 'text' },
    },
    variant: {
      control: { type: 'radio' },
      options: ['default', 'text'],
    },
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'large'],
    },
    isError: {
      control: { type: 'boolean' },
    },
  },
  args: {
    variant: 'default',
    size: 'medium',
    placeholder: 'placeholder',
    isError: false,
    id: 'input',
  },
} satisfies Meta<typeof InputField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Variants: Story = {
  render: ({ size, isError, placeholder }) => {
    return (
      <ul css={containerStyle}>
        <li css={informationStyle}>
          <h6>Default</h6>
          <InputField size={size} isError={isError} placeholder={placeholder} />
        </li>
        <li css={informationStyle}>
          <h6>Text</h6>
          <InputField variant="text" size={size} isError={isError} placeholder={placeholder} />
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
  render: ({ variant, isError, placeholder }) => {
    return (
      <ul css={containerStyle}>
        <li css={informationStyle}>
          <h6>Small</h6>
          <InputField size="small" variant={variant} isError={isError} placeholder={placeholder} />
        </li>
        <li css={informationStyle}>
          <h6>Medium</h6>
          <InputField variant={variant} isError={isError} placeholder={placeholder} />
        </li>
        <li css={informationStyle}>
          <h6>Large</h6>
          <InputField size="large" variant={variant} isError={isError} placeholder={placeholder} />
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

export const Default: Story = {
  args: {
    variant: 'default',
  },
  argTypes: {
    variant: {
      control: false,
    },
  },
};

export const Text: Story = {
  args: {
    variant: 'text',
  },
  argTypes: {
    variant: {
      control: false,
    },
  },
};


export const WithLabel: Story = {
  args: {
    label: 'Label',
  },
  name: 'Input with Label',
};

import type { Size } from '@type/index';
import type { ComponentPropsWithRef, ForwardedRef, ReactElement } from 'react';
import { forwardRef } from 'react';

import {
  getInputStyling,
  getSizeStyling,
  getVariantStyling,
  inputContainerStyling,
  inputWrapperStyling,
} from '@components/InputField/InputField.styles';
import Label from '@components/TextLabel/TextLabel';

export interface InputFieldProps extends Omit<ComponentPropsWithRef<'input'>, 'size'> {
  label?: string;
  variant?: 'default' | 'text' | 'focus' | 'error';
  size?: Extract<Size, 'small' | 'medium' | 'large'>;
  isError?: boolean;
  icon?: ReactElement;
}

const InputField = (
  {
    label,
    variant = 'default',
    size = 'medium',
    isError = false,
    icon,
    ...attributes
  }: InputFieldProps,
  ref: ForwardedRef<HTMLInputElement>
) => {
  return (
    <div css={inputContainerStyling}>
      {label && (
        <Label id={attributes.id}>
          {label}
        </Label>
      )}
      <div css={[getSizeStyling(size), inputWrapperStyling(isError), getVariantStyling(variant)]}>
        {icon}
        <input ref={ref} css={[getSizeStyling(size), getInputStyling]} {...attributes} />
      </div>
    </div>
  );
};

export default forwardRef(InputField);
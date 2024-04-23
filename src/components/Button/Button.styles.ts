import { css } from '@emotion/react';
import { Theme } from '../../styles/Theme'
import { Colors } from '../../styles/color'
 import type { ButtonProps } from './Button';

export const getVariantStyling = (variant: Required<ButtonProps>['variant']) => {
  const style = {
    primary: css({
      backgroundColor:  Colors.Primary,

      color: Colors.White,

    }),
    secondary: css({
      backgroundColor: Colors.PrimaryLight,

      color: Colors.Primary,

    }),
    outline: css({
      backgroundColor: Colors.White,

      color: Colors.Gray700,

      border: `1px solid ${Colors.Gray200}`,

    }),
    disabled: css({
      backgroundColor: Colors.Gray100,

      color: Colors.Gray500,

    }),
  };

  return style[variant];
};

export const getSizeStyling = (size: Required<ButtonProps>['size']) => {
  const style = {
    large: css({
      padding: '16px 20px',

      fontSize: Theme.text.large.fontSize,
      lineHeight: Theme.text.large.lineHeight,
    }),
    medium: css({
      padding: '12px 16px',

      fontSize: Theme.text.medium.fontSize,
      lineHeight: Theme.text.medium.lineHeight,
    }),
    small: css({
      padding: '8px 12px',

      fontSize: Theme.text.small.fontSize,
      lineHeight: Theme.text.small.lineHeight,
    }),
  };

  return style[size];
};

export const buttonStyling = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  border: 'none',
  borderRadius: `${Theme.borderRadius.large}`,
  outline: `0 solid ${Colors.White}`,

  backgroundColor: Colors.White,

  fontWeight: 600,

  transition: 'all .2s ease-in',

  cursor: 'pointer',

});
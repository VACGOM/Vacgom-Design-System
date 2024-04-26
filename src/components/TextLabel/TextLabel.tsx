import type { ComponentPropsWithoutRef } from 'react';

import { labelStyling } from '@components/TextLabel/TextLabel.style';

export interface LabelProps extends ComponentPropsWithoutRef<'label'> {}

const TextLabel = ({ id, children, ...attributes }: LabelProps) => {
  return (
    <label css={labelStyling} htmlFor={id} {...attributes}>
      {children}
    </label>
  );
};

export default TextLabel;

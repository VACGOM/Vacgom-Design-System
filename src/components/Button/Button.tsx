import React from "react";
import {
  buttonStyling,
  getSizeStyling,
  getVariantStyling,
} from "./Button.styles";
import type { Size } from "@type/index";
import type { ComponentPropsWithRef, ForwardedRef } from "react";
import { forwardRef } from "react";

export interface ButtonProps extends ComponentPropsWithRef<"button"> {
  size?: Extract<Size, "small" | "medium" | "large">;
  variant?: "primary" | "secondary" | "outline" | "disabled";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ size = "medium", variant = "primary", children, ...attributes }, ref) => {
    return (
      <button
        ref={ref}
        css={[buttonStyling, getVariantStyling(variant), getSizeStyling(size)]}
        {...attributes}
      >
        {children}
      </button>
    );
  }
);

export default Button;

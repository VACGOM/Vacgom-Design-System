import React from "react";
import {
  buttonStyling,
  getSizeStyling,
  getVariantStyling,
} from "./Button-bottom.styles";
import type { Size } from "@type/index";
import type { ComponentPropsWithRef, ForwardedRef } from "react";
import { forwardRef } from "react";

export interface ButtonButtomProps extends ComponentPropsWithRef<"button"> {
  size?: Extract<Size, "small" | "medium" | "large">;
  variant?: "primary" | "secondary" | "unavailable";
}

const ButtonButtom = forwardRef<HTMLButtonElement, ButtonButtomProps>(
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

export default ButtonButtom;

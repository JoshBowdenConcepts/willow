import React, { SVGProps, FC } from "react";
import clsx from "clsx";
import { Text } from "../Text";
import "./Button.css";

export type ButtonProps<T extends SVGProps<SVGSVGElement>> =
  React.HTMLAttributes<HTMLButtonElement> & {
    /*
     * Sets the variant of the button which reflects hierarchy and style
     */
    variant?: "primary" | "secondary" | "tertiary";
    /*
     * Sets the button width to fullWidth, defaults to false
     */
    fullWidth?: boolean;
    /*
     * Sets the state of the button to be disabled
     */
    disabled?: boolean;
    /*
     * Sets the start icon for the Button component
     */
    StartIcon?: React.ReactElement<T>;
    /*
     * Sets the end icon for the Button component
     */
    EndIcon?: React.ReactElement<T>;
  };

export const Button = <T extends SVGProps<SVGSVGElement>>({
  children,
  onClick,
  variant = "primary",
  fullWidth = false,
  disabled,
  StartIcon,
  EndIcon,
  ...rest
}: ButtonProps<T>) => {
  return (
    <button
      disabled={disabled}
      className={clsx("btn", `btn-${variant}`, fullWidth && "btn-fullWidth")}
      onClick={onClick}
      {...rest}
    >
      {StartIcon}
      <Text as="span" color="inherit">
        {children}
      </Text>
      {EndIcon}
    </button>
  );
};

import React, { SVGProps, FC } from "react";
import clsx from "clsx";
import { Text } from "../Text";
import "./Button.css";

export type ButtonProps<T extends SVGProps<SVGSVGElement>> = Omit<
  React.HTMLAttributes<HTMLButtonElement>,
  "children"
> & {
  children: string;
  /*
   * This property tells the component that it is icon only and makes the children string the aria-label
   */
  iconOnly?: boolean;
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
  iconOnly,
  StartIcon,
  EndIcon,
  "aria-label": ariaLabel,
  ...rest
}: ButtonProps<T>) => {
  const getButtonIconClassName = () => {
    if (StartIcon && EndIcon) {
      // Button with two icons
      return "multi";
    }
    if ((StartIcon || EndIcon) && iconOnly) {
      // Icon Button
      return "only";
    }
    if (StartIcon && children) {
      // Start Icon Button
      return "start";
    }
    if (EndIcon && children) {
      // Start Icon Button
      return "end";
    }
    return null;
  };
  const buttonIconClassName = getButtonIconClassName();
  return (
    <button
      disabled={disabled}
      className={clsx(
        "btn",
        `btn-${variant}`,
        buttonIconClassName && `btn-icon-${buttonIconClassName}`,
        fullWidth && "btn-fullWidth"
      )}
      onClick={onClick}
      aria-label={iconOnly ? children : ariaLabel}
      {...rest}
    >
      {StartIcon}
      {!iconOnly && (
        <Text as="span" color="inherit">
          {children}
        </Text>
      )}
      {EndIcon}
    </button>
  );
};

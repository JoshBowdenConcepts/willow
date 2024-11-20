import React from "react";
import clsx from "clsx";
import { Text } from "../Text";
import "./Button.css";

export type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
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
};

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  fullWidth = false,
  disabled,
  ...rest
}) => {
  return (
    <button
      disabled={disabled}
      className={clsx("btn", `btn-${variant}`, fullWidth && "btn-fullWidth")}
      onClick={onClick}
      {...rest}
    >
      <Text as="span">{children}</Text>
    </button>
  );
};

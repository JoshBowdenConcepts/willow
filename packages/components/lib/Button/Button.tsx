import React from "react";

type BaseProps = {
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "link";
};

type ButtonTagProps = BaseProps & {
  as?: "button";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

type AnchorTagProps = BaseProps & {
  as: "a";
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export type ButtonProps = ButtonTagProps | AnchorTagProps;

export const Button = (props: ButtonProps) => {
  const { as = "button" } = props;

  if (as === "a") {
    const { children, variant, className, ...rest } = props as AnchorTagProps;
    return (
      <a className={className} {...rest}>
        {children}
      </a>
    );
  }

  const { children, variant, className, ...rest } = props as ButtonTagProps;
  return (
    <button className={className} {...rest}>
      {children}
    </button>
  );
};

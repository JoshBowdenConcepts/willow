import React from "react";

export const TextTags = [
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "p",
  "span",
  "div",
  "strong",
  "em",
  "small",
] as const;

type RestrictedPolymorphism =
  | (React.HTMLAttributes<HTMLHeadingElement> & { as?: "h1" })
  | (React.HTMLAttributes<HTMLHeadingElement> & { as?: "h2" })
  | (React.HTMLAttributes<HTMLHeadingElement> & { as?: "h3" })
  | (React.HTMLAttributes<HTMLHeadingElement> & { as?: "h4" })
  | (React.HTMLAttributes<HTMLHeadingElement> & { as?: "h5" })
  | (React.HTMLAttributes<HTMLHeadingElement> & { as?: "h6" })
  | (React.HTMLAttributes<HTMLParagraphElement> & { as?: "p" })
  | (React.HTMLAttributes<HTMLSpanElement> & { as?: "span" })
  | (React.HTMLAttributes<HTMLDivElement> & { as?: "div" })
  | (React.HTMLAttributes<HTMLElement> & { as?: "strong" })
  | (React.HTMLAttributes<HTMLElement> & { as?: "em" })
  | (React.HTMLAttributes<HTMLElement> & { as?: "small" });

type TextTags = {
  /**
   * Applies the underlying HTML element
   */
  as?: (typeof TextTags)[number];
  variant?: (typeof TextTags)[number];
} & RestrictedPolymorphism;

type TextProps = TextTags & {};

export const Text = ({ as: Component = "p", variant, ...rest }: TextProps) => {
  return (
    <Component
      style={{ font: `var(--font-${variant || Component})` }}
      {...rest}
    />
  );
};

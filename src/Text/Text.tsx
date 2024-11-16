import React from "react";

export const TextTags = [
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "p",
  "span",
  "div",
  "strong",
  "em",
] as const;

type RestrictedPolymorphism =
  | (React.HTMLAttributes<HTMLHeadingElement> & { as?: "h1" })
  | (React.HTMLAttributes<HTMLHeadingElement> & { as?: "h2" })
  | (React.HTMLAttributes<HTMLHeadingElement> & { as?: "h3" })
  | (React.HTMLAttributes<HTMLHeadingElement> & { as?: "h4" })
  | (React.HTMLAttributes<HTMLHeadingElement> & { as?: "h5" })
  | (React.HTMLAttributes<HTMLParagraphElement> & { as?: "p" })
  | (React.HTMLAttributes<HTMLSpanElement> & { as?: "span" })
  | (React.HTMLAttributes<HTMLDivElement> & { as?: "div" })
  | (React.HTMLAttributes<HTMLElement> & { as?: "strong" })
  | (React.HTMLAttributes<HTMLElement> & { as?: "em" });

type TextTags = {
  /**
   * Applies the underlying HTML element
   */
  as?: (typeof TextTags)[number];
} & RestrictedPolymorphism;

type TextProps = TextTags & {};

export const Text = ({ as: Component = "p", ...props }: TextProps) => {
  return <Component {...props} />;
};

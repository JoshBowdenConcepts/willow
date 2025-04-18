import { CSSProperties } from "react";
import { tokens } from "tokens";
import styles from "./Text.module.css";
import { FGColorKeys, ColorTokenType } from "../helpers";

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
  as?: (typeof TextTags)[number];
  variant?: (typeof TextTags)[number];
} & RestrictedPolymorphism;

export type TextProps = TextTags & {
  color?: FGColorKeys;
  align?: CSSProperties["textAlign"];
};

export const Text = ({
  as = "p",
  variant,
  color = "fgDefault",
  align,
  ...rest
}: TextProps) => {
  const Component = as;
  const tokenOverrides = {
    ["--text-font"]: `var(${tokens.font[variant ? variant : as]})`,
    ["--text-color"]: color
      ? `var(${tokens.color[color as ColorTokenType]})`
      : `var(${tokens.color.fgDefault})`,
    ["--text-align"]: align ?? "left",
  } as CSSProperties;

  return (
    <Component className={styles.text_root} style={tokenOverrides} {...rest} />
  );
};

import { CSSProperties, AnchorHTMLAttributes } from "react";
import { tokens } from "tokens";
import { clsx } from "clsx";
import textStyles from "../Text/Text.module.css";
import styles from "./Link.module.css";
import { TextTags } from "../Text";
import { ColorTokenType, FGColorKeys } from "../helpers";

export const LinkTags = ["a"] as const;

type LinkProps = {
  size?: (typeof TextTags)[number]; // Use same variants from TextTags
  color?: FGColorKeys;
  type?: "button" | "nav";
} & (
  | { type: "button"; variant?: "primary" | "secondary" }
  | { type?: "nav"; variant?: never }
) &
  AnchorHTMLAttributes<HTMLAnchorElement>;

export const Link = ({
  size,
  color = "fgInherit",
  type,
  variant,
  ...rest
}: LinkProps) => {
  const tokenOverrides = {
    ["--text-font"]: `var(${tokens.font[size ? size : "p"]})`,
    ["--text-color"]: color
      ? `var(${tokens.color[color as ColorTokenType]})`
      : `var(${tokens.color.fgDefault})`,
  } as CSSProperties;

  return (
    <a
      className={clsx(
        textStyles.text_root,
        styles.link_root,
        type === "button" && styles.link_button,
        type === "nav" && styles.link_navType,
        variant === "secondary" && styles.link_button_secondary
      )}
      style={tokenOverrides}
      {...rest}
    />
  );
};

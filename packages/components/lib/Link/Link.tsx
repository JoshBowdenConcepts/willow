import { CSSProperties, AnchorHTMLAttributes } from "react";
import { tokens } from "tokens";
import { clsx } from "clsx";
import textStyles from "../Text/Text.module.css";
import styles from "./Link.module.css";
import { TextTags } from "../Text";

export const LinkTags = ["a"] as const;

type LinkProps = {
  size?: (typeof TextTags)[number]; // Use same variants from TextTags
  color?: "black" | "inherit";
} & (
  | { type?: "button"; variant?: "primary" | "secondary" }
  | { type: undefined; variant?: never }
) &
  AnchorHTMLAttributes<HTMLAnchorElement>;

export const Link = ({
  size,
  color = "inherit",
  type,
  variant,
  ...rest
}: LinkProps) => {
  const tokenOverrides = {
    ["--text-font"]: `var(${tokens.font[size ? size : "p"]})`,
    ["--text-color"]: color === "black" ? "black" : "inherit",
  } as CSSProperties;

  return (
    <a
      className={clsx(
        textStyles.text_root,
        styles.link_root,
        type === "button" && styles.link_button,
        variant === "secondary" && styles.link_button_secondary
      )}
      style={tokenOverrides}
      {...rest}
    />
  );
};

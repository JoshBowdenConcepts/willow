import { CSSProperties, AnchorHTMLAttributes } from "react";
import { tokens } from "tokens";
import { clsx } from "clsx";
import textStyles from "../Text/Text.module.css";
import styles from "./Link.module.css";
import { TextTags } from "../Text";

export const LinkTags = ["a"] as const;

type LinkProps = {
  variant?: (typeof TextTags)[number]; // Use same variants from TextTags
  color?: "black" | "inherit";
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export const Link = ({ variant, color = "inherit", ...rest }: LinkProps) => {
  const tokenOverrides = {
    ["--text-font"]: `var(${tokens.font[variant ? variant : "p"]})`, // Default to "p" if no variant
    ["--text-color"]: color === "black" ? "black" : "inherit",
  } as CSSProperties;

  return (
    <a
      className={clsx(textStyles.text_root, styles.link_root)} // Applying the same class for styling
      style={tokenOverrides}
      {...rest}
    />
  );
};

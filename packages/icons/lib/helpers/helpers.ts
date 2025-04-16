import { tokens } from "tokens";
import React from "react";

const fontSizeList = [
  "inherit",
  "small",
  "default",
  "medium",
  "large",
] as const;
export type FontSize = (typeof fontSizeList)[number];

const colorList = [
  "default",
  "inherit",
  "primary",
  "secondary",
  "action",
  "error",
  "disabled",
] as const;
export type TextColor = (typeof colorList)[number];

export type SVGComponentProps = React.SVGPops<SVGAElement> & {
  fontSize?: FontSize;
  color?: TextColor;
  titleAccess?: string;
  htmlColor?: string;
};

export const iconSize: Record<FontSize, string> = {
  inherit: "1em",
  small: tokens.size.icon[100],
  default: tokens.size.icon[200],
  medium: tokens.size.icon[200],
  large: tokens.size.icon[300],
};

export const iconColor: Record<TextColor, string> = {
  default: "currentColor",
  inherit: "inherit",
  primary: tokens.color.primary,
  secondary: tokens.color.secondary,
  action: tokens.color.another,
  error: tokens.color.error,
  disabled: tokens.color.disabled,
};

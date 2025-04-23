import { tokens } from "tokens";
import React from "react";

type FGKeys<T> = {
  [K in keyof T]: K extends `fg${string}` ? K : never;
}[keyof T];

export type FGColorKeys = FGKeys<typeof tokens.color>;

const fontSizeList = [
  "inherit",
  "small",
  "default",
  "medium",
  "large",
] as const;
export type FontSize = (typeof fontSizeList)[number];

export type SVGComponentProps = React.SVGProps<SVGAElement> & {
  fontSize?: FontSize;
  color?: FGColorKeys;
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

export const iconColor = tokens.color;

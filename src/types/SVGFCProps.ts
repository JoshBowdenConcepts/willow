import { SVGProps } from "react";

const iconSizeList = ["inherit", "default"] as const;
export type IconSize = (typeof iconSizeList)[number];

export const iconSize: Record<IconSize, string> = {
  inherit: "1em",
  default: "1rem",
};

export type SVGFCProps = SVGProps<SVGSVGElement> & {
  size?: IconSize;
};

import clsx from "clsx";
import React, { HTMLAttributes } from "react";
import { spacingStyles, SpacingStyles } from "../utils/spacingStyles";

import "./Card.css";

export type CardProps = HTMLAttributes<HTMLElement> & SpacingStyles;

export const Card = ({
  children,
  className,
  padding,
  margin,
  ...rest
}: CardProps) => {
  console.log("padding", margin);
  const spaceStyles = spacingStyles({ padding, margin });

  console.log(spaceStyles);

  return (
    <article style={spaceStyles} className={clsx("card", className)} {...rest}>
      {children}
    </article>
  );
};

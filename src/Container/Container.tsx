import clsx from "clsx";
import React, { HTMLAttributes } from "react";
import { spacingStyles, SpacingStyles } from "../utils/spacingStyles";

import "./Container.css";

export type ContainerProps = HTMLAttributes<HTMLElement> & SpacingStyles;

export const Container = ({
  children,
  className,
  padding = [500],
  margin,
  ...rest
}: ContainerProps) => {
  console.log("padding", margin);
  const spaceStyles = spacingStyles({ padding, margin });

  console.log(spaceStyles);

  return (
    <article
      style={spaceStyles}
      className={clsx("container", className)}
      {...rest}
    >
      {children}
    </article>
  );
};

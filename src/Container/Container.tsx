import clsx from "clsx";
import React, { HTMLAttributes } from "react";
import { spacingStyles, SpacingStyles, DisplayStyles } from "../utils";

import "./Container.css";

export type ContainerProps = HTMLAttributes<HTMLElement> &
  SpacingStyles &
  DisplayStyles;

export const Container = ({
  children,
  className,
  padding = [500],
  margin,
  display,
  flexDirection,
  justifyContent,
  alignItems,
  gridTemplateColumns,
  gridTemplateRows,
  gridGap,
  ...rest
}: ContainerProps) => {
  console.log("padding", margin);
  const spaceStyles = spacingStyles({ padding, margin });

  const displayStyles = {
    display,
    flexDirection,
    justifyContent,
    alignItems,
    gridTemplateColumns,
    gridTemplateRows,
    gridGap,
  };

  return (
    <article
      style={{ ...spaceStyles, ...displayStyles }}
      className={clsx("container", className)}
      {...rest}
    >
      {children}
    </article>
  );
};

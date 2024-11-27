import clsx from "clsx";
import React, { HTMLAttributes } from "react";
import {
  spacingStyles,
  SpacingStyles,
  DisplayStyles,
  SizeProps,
  createSizeStyles,
} from "../../utils";

import "./Container.css";

export type ContainerProps = HTMLAttributes<HTMLElement> &
  SpacingStyles &
  DisplayStyles &
  SizeProps;

export const Container = ({
  children,
  className,
  // Spacing Props
  padding = [0],
  margin,
  // Display Props
  display,
  flexDirection,
  justifyContent,
  alignItems,
  gridTemplateColumns,
  gridTemplateRows,
  gridGap,
  // Size Props
  height,
  maxHeight,
  width,
  maxWidth,
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

  const sizeStyles = createSizeStyles({
    height,
    maxHeight,
    width,
    maxWidth,
  });

  return (
    <article
      style={{ ...spaceStyles, ...displayStyles, ...sizeStyles }}
      className={clsx("container", className)}
      {...rest}
    >
      {children}
    </article>
  );
};

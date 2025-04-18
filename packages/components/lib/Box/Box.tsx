import React, {
  CSSProperties,
  forwardRef,
  type ElementType,
  type JSX,
  type Ref,
} from "react";
import {
  RootStyleProps,
  rootStylePropsKeys,
  pickProps,
  oneThroughFourSpacing,
} from "./boxUtils";
import { tokens } from "tokens";
import styles from "./Box.module.css";

/* eslint @typescript-eslint/no-empty-object-type: 0 */
type PolymorphicProps<E extends ElementType, P = {}> = P &
  Omit<React.ComponentPropsWithRef<E>, keyof P>;

export type BoxOwnProps<E extends ElementType = ElementType> = {
  as?: E;
} & RootStyleProps;

export type BoxProps<E extends ElementType> = PolymorphicProps<
  E,
  BoxOwnProps<E>
>;

export const Box = forwardRef(
  <E extends ElementType = "div">(
    { as, ...props }: BoxProps<E>,
    ref: Ref<HTMLElement>
  ) => {
    // Explicitly assert the default value
    const Element = (as || "div") as ElementType;
    const [
      {
        gap,
        display,
        padding,
        margin,
        justifyContent,
        alignItems,
        maxWidth,
        flexDirection,
        gridAutoFlow,
      },
      remaining,
    ] = pickProps(props, rootStylePropsKeys);

    const tokenOverrides = {
      ["--box-padding"]: oneThroughFourSpacing(padding),
      ["--box-margin"]: oneThroughFourSpacing(margin),
      ["--box-gap"]: gap ? `var(${tokens.space[gap]})` : 0,
      ["--box-display"]: display ?? "block",
      ["--box-justifyContent"]: justifyContent ?? "initial",
      ["--box-alignItems"]: alignItems ?? "initial",
      ["--box-maxWidth"]: maxWidth ?? "none",
      ["--box-flexDirection"]: flexDirection ?? "column",
      ["--box-gridAutoFlow"]: gridAutoFlow ?? "row",
    } as CSSProperties;

    return (
      <Element
        style={tokenOverrides}
        className={styles.box_root}
        ref={ref}
        {...remaining}
      />
    );
  }
) as <E extends ElementType = "div">(props: BoxProps<E>) => JSX.Element;

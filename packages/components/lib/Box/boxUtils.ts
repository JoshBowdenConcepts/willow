import { CSSProperties } from "react";
import { tokens } from "tokens";

export type OneToFour<T> = [T] | [T, T] | [T, T, T] | [T, T, T, T];

// Here you need to specify any prop you want to include on Box
const rootStylePropDefaults = {
  gap: undefined,
  padding: undefined,
  margin: undefined,
  display: undefined,
  justifyContent: undefined,
  alignItems: undefined,
  maxWidth: undefined,
  flexDirection: undefined,
} as const;

type SpaceKey = keyof (typeof tokens)["space"];

export type RootStyleProps = {
  [K in keyof typeof rootStylePropDefaults]?: K extends "padding" | "margin"
    ? SpaceKey | OneToFour<SpaceKey>
    : K extends "gap"
    ? SpaceKey
    : CSSProperties[K];
};

export const rootStylePropsKeys = Object.keys(
  rootStylePropDefaults
) as (keyof RootStyleProps)[];

export function pickProps<T extends Record<string, any>, K extends keyof T>(
  props: T,
  keys: K[]
): [Pick<T, K>, Omit<T, K>] {
  const picked = {} as Pick<T, K>;
  const rest = { ...props };

  keys.forEach((key) => {
    if (key in props) {
      (picked as any)[key] = props[key];
      delete rest[key];
    }
  });

  return [picked, rest as Omit<T, K>];
}

export function oneThroughFourSpacing(
  spacing?: keyof typeof tokens.space | OneToFour<keyof typeof tokens.space>
): string {
  if (Array.isArray(spacing)) {
    return spacing.map((key) => `var(${tokens.space[key]})`).join(" ");
  } else if (spacing) {
    return `var(${tokens.space[spacing]})`;
  } else {
    return "0";
  }
}

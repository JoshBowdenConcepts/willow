import { tokens } from "tokens";

type FGKeys<T> = {
  [K in keyof T]: K extends `fg${string}` ? K : never;
}[keyof T];

export type FGColorKeys = FGKeys<typeof tokens.color>;

export type ColorTokenType = keyof typeof tokens.color;

import { tokens } from 'tokens'

type FGKeys<T> = {
	[K in keyof T]: K extends `fg${string}` ? K : never
}[keyof T]

export type FGColorKeys = FGKeys<typeof tokens.color>

export const fgColorKeys = Object.keys(tokens.color).filter(
	(key): key is keyof typeof tokens.color => key.startsWith('fg'),
)

export type ColorTokenType = keyof typeof tokens.color

export const cvar = (string: string) => `var(${string})`

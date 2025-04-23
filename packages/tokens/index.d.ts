type ThemeValue =
	| string
	| {
			key?: string
			default?: string | number
			[key: string]: string | number
	  }
export type Theme = Record<string, Record<string, ThemeValue>>

export interface Token {
	name: string
	value: string
}

interface ConvertedItem {
	qualifiers: Qualifiers
	tokens: Token[]
}

export type ConvertedTheme = ConvertedItem[]

export type Qualifiers = string[]

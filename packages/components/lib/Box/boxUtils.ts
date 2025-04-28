import { CSSProperties } from 'react'
import { tokens } from 'tokens'

export type OneToFour<T> = [T] | [T, T] | [T, T, T] | [T, T, T, T]

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
	gridAutoFlow: undefined,
	gridTemplateColumns: undefined,
	gridTemplateRows: undefined,
} as const

type SpaceKey = keyof (typeof tokens)['space'] | 'auto'

export type RootStyleProps = {
	[K in keyof typeof rootStylePropDefaults]?: K extends 'padding' | 'margin'
		? SpaceKey | OneToFour<SpaceKey>
		: K extends 'gap'
			? SpaceKey
			: CSSProperties[K]
}

export const rootStylePropsKeys = Object.keys(
	rootStylePropDefaults,
) as (keyof RootStyleProps)[]

export function pickProps<T extends Record<string, unknown>, K extends keyof T>(
	props: T,
	keys: K[],
): [Pick<T, K>, Omit<T, K>] {
	const picked: Partial<Pick<T, K>> = {}
	const rest = { ...props }

	for (const key of keys) {
		if (key in props) {
			picked[key] = props[key]
			delete rest[key]
		}
	}

	return [picked as Pick<T, K>, rest as Omit<T, K>]
}

export function oneThroughFourSpacing(
	spacing?: keyof typeof tokens.space | OneToFour<SpaceKey>,
): string {
	if (Array.isArray(spacing)) {
		return spacing
			.map((key) =>
				key === 'auto' ? 'auto' : `var(${tokens.space[key]})`,
			)
			.join(' ')
	} else if (spacing) {
		return `var(${tokens.space[spacing]})`
	} else {
		return '0'
	}
}

export function oneThroughFourSpacingClass(
	spacing?: SpaceKey | OneToFour<SpaceKey>,
): string[] {
	if (!spacing) return []

	if (Array.isArray(spacing)) {
		const [first, second, third, fourth] = spacing

		if (spacing.length === 2) {
			return [
				first === 'auto' ? 'auto' : `pv_${first}`,
				second === 'auto' ? 'auto' : `ph_${second}`,
			]
		}

		if (spacing.length === 3) {
			return [
				first === 'auto' ? 'auto' : `pt_${first}`,
				second === 'auto' ? 'auto' : `ph_${second}`,
				third === 'auto' ? 'auto' : `pb_${third}`,
			]
		}

		if (spacing.length === 4) {
			return [
				first === 'auto' ? 'auto' : `pt_${first}`,
				second === 'auto' ? 'auto' : `pr_${second}`,
				third === 'auto' ? 'auto' : `pb_${third}`,
				fourth === 'auto' ? 'auto' : `pl_${fourth}`,
			]
		}
	} else {
		return [
			spacing === 'auto' ? 'auto' : `pt_${spacing}`,
			spacing === 'auto' ? 'auto' : `pb_${spacing}`,
			spacing === 'auto' ? 'auto' : `pl_${spacing}`,
			spacing === 'auto' ? 'auto' : `pr_${spacing}`,
		]
	}

	return []
}

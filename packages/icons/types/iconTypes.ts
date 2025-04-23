import { SVGProps, CSSProperties } from 'react'
import { tokens } from 'tokens'

type FGKeys<T> = {
	[K in keyof T]: K extends `fg${string}` ? K : never
}[keyof T]

export type FGColorKeys = FGKeys<typeof tokens.color>

export interface IconProps extends SVGProps<SVGSVGElement> {
	titleAccess?: string
	size?: keyof typeof tokens.component.icon.size
	style?: CSSProperties
}

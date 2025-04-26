import React, { CSSProperties } from 'react'
import { clsx } from 'clsx'
import styles from './Button.module.css'
import { cvar } from '../helpers'
import { tokens } from 'tokens'

type BaseProps = {
	children?: React.ReactNode
	// variant?: 'primary' | 'secondary' | 'outline' | 'link'
}

type ButtonTagProps = BaseProps & {
	as?: 'button'
} & React.ButtonHTMLAttributes<HTMLButtonElement>

type AnchorTagProps = BaseProps & {
	as: 'a'
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

export type ButtonProps = ButtonTagProps | AnchorTagProps

export const Button = (props: ButtonProps) => {
	const { as = 'button' } = props

	const tokenOverrides = {
		['--button-bgDefault']: cvar(tokens.component.button.primary.bgDefault),
		['--button-bgHover']: cvar(tokens.component.button.primary.bgHover),
		['--button-bgFocus']: cvar(tokens.component.button.primary.bgFocus),
		['--button-bgDisabled']: cvar(
			tokens.component.button.primary.bgDisabled,
		),
	} as CSSProperties

	if (as === 'a') {
		const { children, className, ...rest } = props as AnchorTagProps
		return (
			<a
				className={clsx(className, styles.button_root)}
				style={tokenOverrides}
				{...rest}
			>
				{children}
			</a>
		)
	}

	const { children, className, ...rest } = props as ButtonTagProps
	return (
		<button
			className={clsx(className, styles.button_root)}
			style={tokenOverrides}
			{...rest}
		>
			{children}
		</button>
	)
}

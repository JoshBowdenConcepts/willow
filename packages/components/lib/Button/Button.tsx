import React from 'react'
import { clsx } from 'clsx'
import styles from './Button.module.css'

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

	if (as === 'a') {
		const { children, className, ...rest } = props as AnchorTagProps
		return (
			<a className={clsx(className, styles.button_root)} {...rest}>
				{children}
			</a>
		)
	}

	const { children, className, ...rest } = props as ButtonTagProps
	return (
		<button className={clsx(className, styles.button_root)} {...rest}>
			{children}
		</button>
	)
}

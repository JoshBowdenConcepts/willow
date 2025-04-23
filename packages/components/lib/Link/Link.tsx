import { AnchorHTMLAttributes, CSSProperties } from 'react'
import textStyles from '../Text/Text.module.css'
import styles from './Link.module.css'
import { getTextStyleTokens, Text, TextProps } from '../Text'
import { tokens } from 'tokens'
import { cvar } from '../helpers'
import { clsx } from 'clsx'

export type LinkProps = {
	color?: 'default' | 'secondary'
	className?: string
} & Pick<TextProps, 'variant'> &
	AnchorHTMLAttributes<HTMLAnchorElement>

export const Link = ({
	color = 'default',
	variant,
	children,
	className,
	...rest
}: LinkProps) => {
	const resolvedColor = color === 'default' ? 'fgPrimaryBase' : 'fgDefault'
	const resolvedHoverColor = color === 'default' ? 'fgPrimaryDark' : 'fgDark'
	const textTokenOverrides = getTextStyleTokens({
		as: 'span',
		variant,
		color: resolvedColor,
		align: 'left',
	})

	const tokenOverrides = {
		['--link-color']: cvar(tokens.color[resolvedColor]),
		['--link-hover-color']: cvar(tokens.color[resolvedHoverColor]),
	} as CSSProperties

	return (
		<a
			style={tokenOverrides}
			className={clsx(styles.link_root, className)}
			{...rest}
		>
			<Text
				as="span"
				style={textTokenOverrides}
				className={textStyles.text_root}
			>
				{children}
			</Text>
		</a>
	)
}

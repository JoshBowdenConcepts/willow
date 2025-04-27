import { tokens } from 'tokens'
import { cvar } from '../../../lib/helpers'
import styles from './ColorSwatch.module.css'
import { CSSProperties } from 'react'
import { Text } from '../../../lib'

type ColorSwatchProps = {
	color: keyof typeof tokens.color
	asText?: boolean
}

export const ColorSwatch = ({ color, asText }: ColorSwatchProps) => {
	const tokenOverrides = {
		['--color-swatch']: cvar(tokens.color[color]),
	} as CSSProperties

	return (
		<div className={styles.color_swatch} style={tokenOverrides}>
			<div className={styles.checkered}>
				{asText ? (
					<Text
						as="h1"
						color="fgInherit"
						style={tokenOverrides}
						className={styles.swatch_text}
					>
						Fg
					</Text>
				) : (
					<div className={styles.circle} />
				)}
			</div>
			<Text align="center">{tokens.color[color]}</Text>
		</div>
	)
}

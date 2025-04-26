import { tokens } from 'tokens'
import { cvar } from '../../../lib/helpers'
import styles from './ColorSwatch.module.css'
import { CSSProperties } from 'react'
import { Text } from '../../../lib'

type ColorSwatchProps = {
	color: keyof typeof tokens.color
}

export const ColorSwatch = ({ color }: ColorSwatchProps) => {
	const tokenOverrides = {
		['--color-swatch']: cvar(tokens.color[color]),
	} as CSSProperties

	return (
		<div className={styles.color_swatch} style={tokenOverrides}>
			<div className={styles.checkered}>
				<div className={styles.circle} />
			</div>
			<Text align="center">{tokens.color[color]}</Text>
		</div>
	)
}

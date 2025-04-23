import { ConvertedTheme } from '../../index'

export const generateCss = (data: ConvertedTheme): string => {
	const rootStyles: string[] = []
	const darkModeStyles: string[] = []
	const classStyles: string[] = []
	const darkModeClassStyles: string[] = []
	const mediaQueries: { [key: string]: string[] } = {}

	data.forEach(({ qualifiers, tokens }) => {
		let mediaQuery = ''
		let colorMode = ''
		const classSelectors: string[] = []

		qualifiers.forEach((qualifier) => {
			if (qualifier.startsWith('@')) {
				mediaQuery = qualifier.slice(1) // Remove '@' for media query
			} else if (qualifier === 'dark') {
				colorMode = `[data-colormode="dark"]`
			} else if (qualifier.startsWith('.')) {
				classSelectors.push(qualifier)
			}
		})

		const selector =
			classSelectors.length > 0
				? colorMode
					? `${colorMode} ${classSelectors.join(' ')}`
					: classSelectors.join(' ')
				: colorMode || ':root'

		let block = `${selector} {\n`
		tokens.forEach(({ name, value }) => {
			block += `  ${name}: ${value};\n`
		})
		block += `}\n`

		// Sort into the correct category
		if (mediaQuery) {
			if (!mediaQueries[mediaQuery]) mediaQueries[mediaQuery] = []
			mediaQueries[mediaQuery].push(block)
		} else if (selector === ':root') {
			rootStyles.push(block)
		} else if (selector === '[data-colormode="dark"]') {
			darkModeStyles.push(block)
		} else if (selector.startsWith('[data-colormode="dark"]')) {
			darkModeClassStyles.push(block)
		} else {
			classStyles.push(block)
		}
	})

	// Sort media queries numerically (ascending)
	const sortedMediaQueries = Object.keys(mediaQueries)
		.map(Number)
		.sort((a, b) => a - b)
		.map(
			(size) =>
				`@media screen and (min-width: ${size}px) {\n${mediaQueries[
					size
				].join('\n')}}\n`,
		)

	// Concatenating all sections in order
	return [
		...rootStyles,
		...darkModeStyles,
		...classStyles,
		...darkModeClassStyles,
		...sortedMediaQueries,
	].join('\n')
}

export function generateCSSTokenObject(input: Object): Object {
	function traverse(obj: Object, path: string[] = []): Object {
		if (typeof obj === 'object' && obj !== null) {
			const result: Object = {}
			let hasValidKey = false
			for (const key in obj) {
				if (
					!key.startsWith('.') &&
					key !== 'default' &&
					key !== 'light' &&
					key !== 'dark' &&
					!key.startsWith('@')
				) {
					result[key] = traverse(obj[key], [...path, key])
					hasValidKey = true
				}
			}
			return hasValidKey ? result : `--${path.join('-')}`
		} else {
			return `--${path.join('-')}`
		}
	}
	return traverse(input)
}

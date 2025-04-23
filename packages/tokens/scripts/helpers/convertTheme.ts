import { ConvertedTheme, Qualifiers, Token } from '../../index'

/* GENERATE TOKENS */
const isQualifierKey = (key: string): boolean =>
	key.startsWith('.') ||
	key.startsWith('@') ||
	key === 'light' ||
	key === 'dark'

export function convertTheme(theme: Object): ConvertedTheme {
	const result: ConvertedTheme = []

	function traverse(
		obj: any,
		qualifiers: Qualifiers,
		levels: string[] = [],
		tokens: ConvertedTheme,
	) {
		for (const key in obj) {
			const value = obj[key]
			if (typeof value === 'object' && value !== null) {
				// Check if value starts with a dot (.)
				if (isQualifierKey(key)) {
					// Add the key as a qualifier
					traverse(value, [...qualifiers, key], [...levels], tokens)
				} else {
					// Handle the case where it is a level not a qualifier
					traverse(value, [...qualifiers], [...levels, key], tokens)
				}
			} else if (typeof value === 'string') {
				if (key === 'default') {
					const newToken = `--${[...levels].join('-')}`
					findAndPushToken(result, qualifiers, {
						name: newToken,
						value: value,
					})
				} else if (isQualifierKey(key)) {
					const newToken = `--${[...levels].join('-')}`
					findAndPushToken(result, [...qualifiers, key], {
						name: newToken,
						value: value,
					})
				} else {
					const newToken = `--${[...levels, key].join('-')}`
					findAndPushToken(result, qualifiers, {
						name: newToken,
						value: value,
					})
				}
			}
		}
	}

	traverse(theme, [], [], [])

	return processQualifiers(result)
}

function findAndPushToken(
	arr: ConvertedTheme,
	qualifiersToMatch: Qualifiers,
	newToken: Token,
) {
	const sortedQualifiersToMatch = [...qualifiersToMatch].sort()

	const found = arr.find(
		(obj) =>
			obj.qualifiers.length === qualifiersToMatch.length &&
			[...obj.qualifiers]
				.sort()
				.every((q, i) => q === sortedQualifiersToMatch[i]),
	)

	if (found) {
		found.tokens.push(newToken)
	} else {
		arr.push({
			qualifiers: qualifiersToMatch,
			tokens: [newToken],
		})
	}
}

const processQualifiers = (data: ConvertedTheme): ConvertedTheme => {
	const mergedData: Record<string, Token[]> = {}

	data.forEach((group) => {
		let updatedQualifiers = [...group.qualifiers]

		// If "light" is the only qualifier, merge into the base group
		if (
			updatedQualifiers.length === 1 &&
			updatedQualifiers[0] === 'light'
		) {
			updatedQualifiers = []
		}

		// Remove "light" if it's the first or last qualifier
		if (updatedQualifiers.length > 1) {
			if (updatedQualifiers[0] === 'light') {
				updatedQualifiers.shift()
			} else if (
				updatedQualifiers[updatedQualifiers.length - 1] === 'light'
			) {
				updatedQualifiers.pop()
			}
		}

		// Create a key for merging based on sorted qualifiers
		const key = updatedQualifiers.sort().join('|')

		if (!mergedData[key]) {
			mergedData[key] = []
		}

		// Merge tokens
		mergedData[key].push(...group.tokens)
	})

	// Convert back to array format
	return Object.entries(mergedData).map(([key, tokens]) => ({
		qualifiers: key ? key.split('|') : [],
		tokens,
	}))
}

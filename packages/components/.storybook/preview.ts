import type { Preview } from '@storybook/react'
import 'tokens/dist/tokens.css'

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		options: {
			storySort: {
				order: ['Intro', 'Foundation', 'Components'],
			},
		},
	},
}

export default preview

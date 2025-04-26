import { addons } from '@storybook/manager-api'
import { create } from '@storybook/theming'

addons.setConfig({
	theme: create({
		base: 'light', // or 'dark'
		brandTitle: 'Willow Design',
		brandUrl: '#',
		// brandImage: '/your-logo.svg', // relative to the public folder
		fontBase: '"Barlow", sans-serif',
		colorPrimary: '#1ea7fd',
		colorSecondary: '#00786f',
		appBg: '#f6f9fc',
		appContentBg: '#ffffff',
		appPreviewBg: '#f0f0f0',
		appBorderColor: '#ccc',
		appBorderRadius: 8,
	}),
})

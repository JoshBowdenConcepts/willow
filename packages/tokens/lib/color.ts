import { palette } from './palette'

export const color = {
	fgInherit: 'inherit',
	fgDefault: palette.gray[900],
	fgDark: palette.gray[950],
	fgSubtle: palette.gray[800],
	fgDisabled: palette.gray[800],
	fgContrast: palette.gray[200],
	fgPrimaryLight: palette.teal[600],
	fgPrimaryBase: palette.teal[700],
	fgPrimaryDark: palette.teal[800],
	bgBase: {
		light: palette.white,
		dark: palette.black,
	},
	bgDefault: {
		light: palette.gray[200],
		dark: palette.gray[800],
	},
	bgLight: palette.gray[50],
	bgContrast: palette.gray[800],
}

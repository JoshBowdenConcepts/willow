import { palette } from './palette'

export const color = {
	fgInherit: 'inherit',
	fgDefault: palette.gray[900],
	fgDark: palette.gray[950],
	fgSubtle: palette.gray[800],
	fgDisabled: palette.gray[600],
	fgContrast: palette.gray[200],
	fgPrimaryLight: palette.teal[600],
	fgPrimaryBase: palette.teal[700],
	fgPrimaryDark: palette.teal[800],
	fgErrorLight: palette.red[600],
	fgErrorBase: palette.red[700],
	fgErrorDark: palette.red[800],
	fgWarningLight: palette.yellow[600],
	fgWarningBase: palette.yellow[700],
	fgWarningDark: palette.yellow[800],
	fgSuccessLight: palette.green[600],
	fgSuccessBase: palette.green[700],
	fgSuccessDark: palette.green[800],
	fgInfoLight: palette.blue[600],
	fgInfoBase: palette.blue[700],
	fgInfoDark: palette.blue[800],
	bgBase: {
		light: palette.white,
		dark: palette.black,
	},
	bgContrast: {
		light: palette.gray[950],
		dark: palette.gray[50],
	},
	bgDefault: {
		light: palette.gray[50],
		dark: palette.gray[950],
	},
	bgLayerOne: {
		light: palette.gray[100],
		dark: palette.gray[900],
	},
	bgLayerTwo: {
		light: palette.gray[200],
		dark: palette.gray[800],
	},
}

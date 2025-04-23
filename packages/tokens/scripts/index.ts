import {
	convertTheme,
	generateCss,
	generateCSSTokenObject,
	writeOrCreate,
} from './helpers'
import { theme } from '../lib/index'

writeOrCreate({
	filePath: './dist/tokens.scss',
	templateString: `@import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');\n
${generateCss(convertTheme(theme))}`,
})

writeOrCreate({
	filePath: './dist/tokens.css',
	templateString: `@import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');\n
${generateCss(convertTheme(theme))}`,
})

writeOrCreate({
	filePath: './dist/index.ts',
	templateString: `export const tokens = ${JSON.stringify(
		generateCSSTokenObject(theme),
		null,
		2,
	).replace(/"([^"]+)":/g, '$1:')};`,
})

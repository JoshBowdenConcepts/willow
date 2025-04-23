import fs from 'fs'
import path from 'path'
import { XMLParser, XMLBuilder } from 'fast-xml-parser'

const assetsDir = path.join(__dirname, '..', 'lib', 'assets')
const distDir = path.join(__dirname, '..', 'dist')

const toPascalCase = (str: string) =>
	str
		.replace(/[-_](.)/g, (_, char) => char.toUpperCase())
		.replace(/^\w/, (c) => c.toUpperCase())

const parser = new XMLParser({
	ignoreAttributes: false,
	attributeNamePrefix: '',
})
const builder = new XMLBuilder({
	ignoreAttributes: false,
	attributeNamePrefix: '',
	format: true,
})

fs.mkdirSync(distDir, { recursive: true })

const files = fs.readdirSync(assetsDir).filter((f) => f.endsWith('.svg'))

const generateComponent = (name: string, svgObject: any) => {
	delete svgObject.width
	delete svgObject.height
	svgObject['aria-hidden'] = '{titleAccess ? "false" : "true"}'

	let jsx = builder.build({ svg: svgObject })
	jsx = jsx
		.replace(/<svg/, '<svg style={computedStyle} {...rest}')
		.replace(
			/aria-hidden="[^"]*"/,
			'aria-hidden={titleAccess ? "false" : "true"}',
		)
		.replace(
			'</svg>',
			`{titleAccess && <title>{titleAccess}</title>}</svg>`,
		)

	return `import React from 'react';
import { IconProps } from '../types/iconTypes';
import { tokens } from 'tokens';

export const ${name} = ({ titleAccess, size = 200, style, ...rest }: IconProps) => {
  const computedStyle = {
    height: \`var(\${tokens.component.icon.size[size]})\`,
    width: \`var(\${tokens.component.icon.size[size]})\`,
    ...style,
  };

  return (
    ${jsx}
  );
};
`
}

const indexExports: string[] = []

for (const file of files) {
	const raw = fs.readFileSync(path.join(assetsDir, file), 'utf-8')
	const parsed = parser.parse(raw)
	const name = toPascalCase(file.replace('.svg', '')) + 'Icon'
	const component = generateComponent(name, parsed.svg)
	const outFile = path.join(distDir, `${name}.tsx`)

	fs.writeFileSync(outFile, component, 'utf-8')
	indexExports.push(`export { ${name} } from './${name}';`)
}

fs.writeFileSync(
	path.join(distDir, 'index.ts'),
	indexExports.join('\n'),
	'utf-8',
)

console.log(`✅ Generated ${files.length} icons in dist/`)

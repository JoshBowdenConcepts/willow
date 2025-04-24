import fs from 'fs'
import path from 'path'
import { XMLParser, XMLBuilder } from 'fast-xml-parser'

const parser = new XMLParser({
	ignoreAttributes: false,
	attributeNamePrefix: '',
})
const builder = new XMLBuilder({
	ignoreAttributes: false,
	attributeNamePrefix: '',
	format: true,
})

const raw = `<svg width="100" height="100"><circle cx="50" cy="50" r="40" stroke="green"/></svg>`
// Ignoring eslint for help with typing here
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const example = parser.parse(raw)

type SvgParsed = typeof example

export const toPascalCase = (str: string) =>
	str
		.replace(/[-_](.)/g, (_, char) => char.toUpperCase())
		.replace(/^\w/, (c) => c.toUpperCase())

export const toCamelCase = (str: string) =>
	str.replace(/[-_](.)/g, (_, char) => char.toUpperCase())

type Primitive = string | number | boolean | null

export type SvgNode = {
	[key: string]: string | Primitive | Primitive[] | SvgNode | SvgNode[]
}

export const convertAttributesToCamelCase = <T extends SvgNode>(node: T): T => {
	const newNode: SvgNode = {}

	for (const key in node) {
		const value = node[key]
		const newKey = toCamelCase(key)

		if (typeof value === 'string') {
			newNode[newKey] = value
		} else if (Array.isArray(value)) {
			newNode[newKey] = value.map((item) =>
				typeof item === 'object'
					? convertAttributesToCamelCase(item)
					: item,
			)
		} else if (typeof value === 'object' && value !== null) {
			newNode[newKey] = convertAttributesToCamelCase(value)
		}
	}

	return newNode as T
}

export const generateComponent = (name: string, svgObject: SvgParsed) => {
	const camelCasedSvg = convertAttributesToCamelCase(svgObject)
	delete camelCasedSvg.width
	delete camelCasedSvg.height

	let jsx = builder.build({ svg: camelCasedSvg })
	jsx = jsx
		.replace(/<svg/, '<svg style={computedStyle} {...rest}')
		.replace(
			/aria-hidden="[^"]*"/,
			'aria-hidden={titleAccess ? "false" : "true"}',
		)
		.replace(
			'</svg>',
			`{titleAccess && <title>{titleAccess}</title>}\n    </svg>`,
		)

	return `import React from 'react';
import { IconProps } from './types/iconTypes';
import { tokens } from 'tokens';

export const ${name} = ({ titleAccess, size = 200, color = 'currentColor', style, ...rest }: IconProps) => {
  const computedStyle = {
    height: \`var(\${tokens.component.icon.size[size]})\`,
    width: \`var(\${tokens.component.icon.size[size]})\`,
    color: color === 'currentColor' ? 'currentColor' : \`var(\${tokens.color[color]})\`,
    ...style,
  };

  return (
    ${jsx}
  );
};
`
}

export const processFiles = (assetsDir: string, distDir: string) => {
	fs.mkdirSync(distDir, { recursive: true })
	const files = fs.readdirSync(assetsDir).filter((f) => f.endsWith('.svg'))
	const indexExports: string[] = []

	for (const file of files) {
		const raw = fs.readFileSync(path.join(assetsDir, file), 'utf-8')
		const parsed = parser.parse(raw)
		const name = toPascalCase(file.replace('.svg', '')) + 'Icon'
		const component = generateComponent(name, parsed.svg)
		fs.writeFileSync(path.join(distDir, `${name}.tsx`), component, 'utf-8')
		indexExports.push(`export { ${name} } from './${name}';`)
	}

	fs.writeFileSync(
		path.join(distDir, 'index.ts'),
		indexExports.join('\n'),
		'utf-8',
	)
	return files.length
}

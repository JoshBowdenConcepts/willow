import fs from 'fs'
import path from 'path'
import { toPascalCase, generateComponent, processFiles } from './generate-icons'
import { XMLParser } from 'fast-xml-parser'

jest.mock('fs')

const mockedFs = fs as jest.Mocked<typeof fs>

const mockSvg = `<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>`
const parser = new XMLParser({
	ignoreAttributes: false,
	attributeNamePrefix: '',
})

describe('toPascalCase', () => {
	it('converts kebab-case to PascalCase', () => {
		expect(toPascalCase('home-icon')).toBe('HomeIcon')
	})
})

describe('generateComponent', () => {
	it('returns a valid React component string', () => {
		const parsedSvg = parser.parse(mockSvg)
		const output = generateComponent('HomeIcon', parsedSvg.svg)
		expect(output).toContain('export const HomeIcon')
		expect(output).toContain('<svg style={computedStyle} {...rest}')
		expect(output).toContain(
			'{titleAccess && <title>{titleAccess}</title>}',
		)
	})
})

describe('processFiles', () => {
	beforeEach(() => {
		jest.resetAllMocks()
		;(mockedFs.readdirSync as jest.Mock).mockReturnValue(['home.svg'])
		;(mockedFs.readFileSync as jest.Mock).mockReturnValue(mockSvg)
		;(mockedFs.writeFileSync as jest.Mock).mockImplementation(() => {})
		;(mockedFs.mkdirSync as jest.Mock).mockImplementation(() => {})
	})

	it('processes SVG files and writes React components', () => {
		const assetPath = path.join(__dirname, '..', 'lib', 'assets')
		const distPath = path.join(__dirname, '..', 'dist')
		const count = processFiles(assetPath, distPath)

		expect(count).toBe(1)
		expect(mockedFs.writeFileSync).toHaveBeenCalledWith(
			expect.stringContaining('HomeIcon.tsx'),
			expect.stringContaining('export const HomeIcon'),
			'utf-8',
		)
		expect(mockedFs.writeFileSync).toHaveBeenCalledWith(
			expect.stringContaining('index.ts'),
			expect.stringContaining(`export { HomeIcon } from './HomeIcon';`),
			'utf-8',
		)
	})
})

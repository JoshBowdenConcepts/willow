// generateCss.test.ts
import { generateCss } from './generateCss'

describe('generateCss', () => {
	it('generates root styles when no qualifiers', () => {
		const input = [
			{
				qualifiers: [],
				tokens: [{ name: '--color-primary', value: 'red' }],
			},
		]

		const output = generateCss(input)
		expect(output).toContain(':root {\n  --color-primary: red;\n}\n')
	})

	it('generates dark mode root styles', () => {
		const input = [
			{
				qualifiers: ['dark'],
				tokens: [{ name: '--color-bg', value: 'black' }],
			},
		]

		const output = generateCss(input)
		expect(output).toContain(
			'[data-colormode="dark"] {\n  --color-bg: black;\n}\n',
		)
	})

	it('generates class-based styles', () => {
		const input = [
			{
				qualifiers: ['.button'],
				tokens: [{ name: '--color', value: 'blue' }],
			},
		]

		const output = generateCss(input)
		expect(output).toContain('.button {\n  --color: blue;\n}\n')
	})

	it('generates dark mode class styles', () => {
		const input = [
			{
				qualifiers: ['dark', '.button'],
				tokens: [{ name: '--color', value: 'white' }],
			},
		]

		const output = generateCss(input)
		expect(output).toContain(
			'[data-colormode="dark"] .button {\n  --color: white;\n}\n',
		)
	})

	it('generates media query styles', () => {
		const input = [
			{
				qualifiers: ['@768'],
				tokens: [{ name: '--font-size', value: '16px' }],
			},
		]

		const output = generateCss(input)
		expect(output).toContain(
			'@media screen and (min-width: 768px) {\n:root {\n  --font-size: 16px;\n}\n}\n',
		)
	})

	it('generates nested media query class styles', () => {
		const input = [
			{
				qualifiers: ['@1024', '.container'],
				tokens: [{ name: '--margin', value: '20px' }],
			},
		]

		const output = generateCss(input)
		expect(output).toContain(
			'@media screen and (min-width: 1024px) {\n.container {\n  --margin: 20px;\n}\n}\n',
		)
	})

	it('sorts media queries numerically', () => {
		const input = [
			{
				qualifiers: ['@1024'],
				tokens: [{ name: '--a', value: '1' }],
			},
			{
				qualifiers: ['@768'],
				tokens: [{ name: '--b', value: '2' }],
			},
		]

		const output = generateCss(input)
		const firstMediaQueryIndex = output.indexOf(
			'@media screen and (min-width: 768px)',
		)
		const secondMediaQueryIndex = output.indexOf(
			'@media screen and (min-width: 1024px)',
		)

		expect(firstMediaQueryIndex).toBeLessThan(secondMediaQueryIndex)
	})
})

import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
	roots: ['<rootDir>'],
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	transformIgnorePatterns: ['/node_modules/'],
	transform: {
		'^.+\\.ts$': 'ts-jest',
	},
	verbose: true,
	collectCoverage: true,
	collectCoverageFrom: [
		'lib/**/*.{ts,tsx}',
		'lib/**/*.stories.{ts,tsx}',
		'!lib/**/index.ts',
	],
	// coverageThreshold: {
	// 	global: {
	// 		branches: 90,
	// 		functions: 90,
	// 		lines: 90,
	// 		statements: 90,
	// 	},
	// },
}

export default config

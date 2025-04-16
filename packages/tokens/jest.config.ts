import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
	roots: ['<rootDir>'],
	testEnvironment: 'node',
	transformIgnorePatterns: ['/node_modules/'],
	transform: {
		'^.+\\.ts$': 'ts-jest',
	},
	verbose: true,
};

export default config;

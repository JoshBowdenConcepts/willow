import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  roots: ["<rootDir>"],
  testEnvironment: "node",
  transformIgnorePatterns: ["/node_modules/"],
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: ["scripts/**/*.{ts,tsx}", "!scripts/**/index.ts"],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
};

export default config;

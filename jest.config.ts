export default {
  preset: "ts-jest",
  testEnvironment: "jsdom", // For testing browser-like features
  moduleNameMapper: {
    // Handle static assets (CSS, images)
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/__mocks__/fileMock.js",
  },
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"], // Include TypeScript and JSX files
  transform: {
    "^.+\\.[tj]sx?$": "ts-jest", // Use ts-jest for TypeScript files
  },
  setupFilesAfterEnv: ["./jest.setup.ts"], // Optional setup file
};

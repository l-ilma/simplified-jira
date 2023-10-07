module.exports = {
  cacheDirectory: "<rootDir>/jest/cache",
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "<rootDir>/jest/report",
  moduleFileExtensions: ["ts", "js", "json"],
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ["<rootDir>/setup-jest.ts"],
  "transform": {
    "^.+\\.(ts|js)$": ["ts-jest", {
      babel: true,
      tsconfig: 'tsconfig.json'
    }]
  },
  verbose: true
}

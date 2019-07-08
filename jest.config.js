module.exports = {
  globals: {
    'ts-jest': {
      tsConfigFile: 'tsconfig.json',
      compiler: 'typescript',
    }
  },
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  moduleNameMapper: {
    '^client/(.*)': '<rootDir>/source/client/$1',
    '^server/(.*)': '<rootDir>/source/server/$1',
    '^shared/(.*)': '<rootDir>/source/shared/$1',
  },
  testEnvironment: 'node',
  testRegex: '^.+\\.test\\.tsx?$',
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  collectCoverageFrom: ['source/**/*.{ts,tsx}'],
}
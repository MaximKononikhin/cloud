const path = require('path');
const {defaults} = require('jest-config');
module.exports = {
    roots: [path.resolve(__dirname, './src')],
    testEnvironment: 'jest-environment-jsdom',
    moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
    displayName: 'tests',
    testMatch: ['**//__tests__/**/*.ts', '**/?(*.)+(spec|test).[jt]s?(x)'],
    testURL: 'http://localhost',
    setupFilesAfterEnv: [path.resolve(__dirname, './setupTests.js')],
    transform: {
        "\\.svg$": "svg-jest",
        ".(ts|tsx)": "ts-jest"
    }
}
const path = require('path');

module.expory = {
    testEnvironment: 'node',
    roots: path.resolve(__dirname, '..', './src/'),
    transform: {
        '\\.(js|jsx)?$': 'babel-jest'
    },
    // testMatch: ['<rootDir>/src/**/>(*.)test.{js,jsx}'],
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.jsx?$',
    moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
    testPathIgnorePatterns: ['/node_modules/', '/public/'],
    collectCoverageFrom: ['src/**/*.{js,jsx}'],
    clearMocks: true,
    setupFilesAfterEnv: [
        '@testing-library/jest-dom/extend-expect',
        '@testing-library/react/cleanup-after-each'
    ]
}
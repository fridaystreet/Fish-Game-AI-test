module.exports = {
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.js$': 'babel-jest',
      },
    setupFiles: ['./jest.setup.js'],
};
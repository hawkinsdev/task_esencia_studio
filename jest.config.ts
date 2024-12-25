module.exports = {
  roots: ['<rootDir>'],
  setupFiles: ['./jest.setup.js'], 
  transform: { '^.+\\.tsx?$': 'ts-jest', '^.+\\.css$': 'jest-css-modules-transform' }, 
  moduleNameMapper: { '\\.(css|less|scss|sass)$': 'identity-obj-proxy' },
  testEnvironment: "jsdom"
};

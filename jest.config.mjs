const jestConfig = {
  preset: 'ts-jest/presets/default-esm', // Usando preset para ESM
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        useESM: true,
      },
    ], // Transformando arquivos TypeScript
  },

  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
}

export default jestConfig

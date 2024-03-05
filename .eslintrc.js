module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    // Permite console.log, pero muestra una advertencia en la consola
    'no-console': 'warn',
    // Permite el uso de dependencias de desarrollo en los archivos de prueba y configuración
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['**/test.tsx', '**/test.ts', '**/*.config.js'] },
    ],
    // Permite la reasignación de propiedades de objetos (útil para trabajar con reducers)
    'no-param-reassign': ['error', { props: false }],
    // No requiere que las extensiones .tsx y .ts se especifiquen al importar
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    // No requiere declaraciones de tipo de propiedades con TypeScript
    'react/prop-types': 'off',
    // No requiere el uso de 'this' en los métodos de clase que no lo utilizan
    'class-methods-use-this': 'off',
    // No aplicar una máxima longitud de línea, dejando que Prettier se encargue del formateo
    'max-len': 'off',
    // Permitir ciertos métodos no modificadores en los arrays como .push
    'no-array-constructor': 'off',
    // No forzar el uso de desestructuración en objetos y arrays
    'prefer-destructuring': 'off',
  },
};

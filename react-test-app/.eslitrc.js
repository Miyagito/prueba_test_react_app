module.exports = {
  extends: ['react-app', 'react-app/jest', 'plugin:prettier/recommended'],
  rules: {
    // Allow console.log statements but show a warning
    'no-console': 'warn',

    // Warn about declared but unused variables
    'no-unused-vars': 'warn',

    // React's JSX transform was included in React 17, no need to import React in scope for JSX
    'react/react-in-jsx-scope': 'off',

    // If using TypeScript, you might not need Prop-Types validation
    'react/prop-types': 'off',
  },
};

module.exports = {
  parser: 'babel-eslint',
  extends: [
      'standard',
      'standard-jsx',
      'eslint:recommended',
      'plugin:react/recommended'
  ],
  parserOptions: {
      ecmaFeatures: {
          experimentalObjectRestSpread: true,
          jsx: true
      },
      sourceType: 'module'
  },
  plugins: [
      'react',
      'import',
      'node',
      'promise',
      'standard'
  ],
  rules: {
      quotes: ['error', 'single'],
      semi: ['error', 'never'],
      "react/no-did-update-set-state": "error",
      "react/no-unknown-property": "error",
      "react/react-in-jsx-scope": "error",
      "comma-dangle": ["error", "never"],
      "react/prop-types": [0],
  },
  globals: {
      'it': false,
      'expect': false,
      'describe': false,
      'localStorage': false,
      'sessionStorage': false
  }
}
module.exports = {
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-no-undef': ['error', {allowGlobals: true}],
  },
  globals: {
    React: true,
  },
}

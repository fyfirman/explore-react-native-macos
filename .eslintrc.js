module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'global-require': 'off',
    'no-use-before-define': ['error', { variables: false }],
    'react-native/no-unused-styles': 'error',
    'react-native/split-platform-components': 'off',
    'react-native/no-inline-styles': 'warn',
    'react-native/no-color-literals': 'error',
    'react/jsx-filename-extension': 'off',
    'prettier/prettier': ['error'],
    'react/jsx-props-no-spreading': 'off',
    'react/no-array-index-key': 'off',
    'react/jsx-wrap-multilines': [
      'error',
      {
        prop: 'ignore',
      },
    ],
    'react-hooks/exhaustive-deps': 'warn',
  },
};

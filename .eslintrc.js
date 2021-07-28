module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ['@typescript-eslint'],
  env: {
    es6: true,
  },
  rules: {
    'prettier/prettier': 1,
    'no-console': 1,
    'quotes': [1, 'single'],
    'arrow-spacing': { befor: true, after: true },
    'block-spacing': 'always',
    'no-unused-vars': 1,
  },
};

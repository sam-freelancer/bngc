module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    '@babel/plugin-syntax-dynamic-import',
    [
      'module-resolver',
      {
        root: ['./app'],
        extensions: ['.js', '.ios.js', '.android.js'],
      },
    ],
  ],
  env: {
    production: {
      plugins: ['transform-remove-console'],
    },
  },
};

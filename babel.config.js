module.exports = {
  presets: [
    [
      '@babel/env',
      {
        modules: false,
        useBuiltIns: 'usage'
      }
    ],
    '@babel/react',
    "@babel/typescript"
  ],
  plugins: ["@babel/plugin-transform-runtime"]
}

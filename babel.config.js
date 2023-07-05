module.exports = {
  presets: [
    [
      '@babel/env',
      {
        modules: false,
        useBuiltIns: 'usage',
      },
    ],
    '@babel/react',
    '@babel/typescript',
  ],
  plugins: [
    '@babel/plugin-transform-runtime',
    [
      'file-loader',
      {
        name: '[hash].[ext]',
        extensions: ['png', 'jpg', 'jpeg', 'gif', 'svg'],
        publicPath: '/src/assets',
        outputPath: '/dist/assets',
        context: '',
        limit: 0,
      },
    ],
  ],
}

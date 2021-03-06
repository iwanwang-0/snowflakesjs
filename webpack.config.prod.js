const path = require('path');

module.exports = {
  entry: './src/global.ts',
  output: {
    filename: 'snowflakes.bundle.min.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: 'tsconfig.umd.json',
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  plugins: [],
  devtool: 'source-map',
  devServer: {
    contentBase: './dist/examples',
  },
};

const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/renderer.tsx',
  target: 'electron-renderer',
  devtool: 'source-map',
  devServer: {
    static: { directory: path.join(__dirname, 'dist') },
    compress: true,
    port: 9000,
    hot: true,
    historyApiFallback: { index: "index.html" },
  },
  resolve: {
    alias: {
      ['@']: path.resolve(__dirname, 'src')
    },
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        "test": /\.tsx?$/,
        "exclude": /node_modules/,
        "use": {
          "loader": "ts-loader",
          "options": {
            "transpileOnly": false, // Set to true if you are using fork-ts-checker-webpack-plugin
            "projectReferences": true
          }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      }
    ]
  },
  output: {
    path: __dirname + '/dist',
    filename: 'renderer.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      inject: true,
    })
  ]
};
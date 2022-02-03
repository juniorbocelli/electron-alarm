const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require('path');

module.exports = {
  "mode": "development",
  "entry": "src/renderer.tsx",
  "output": {
    "path": __dirname + '/dist',
    "filename": "[name].js"
  },
  "watch": false,

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

  "context": __dirname, // to automatically find tsconfig.json
  "module": {
    "rules": [
      {
        test: /\.s[ac]ss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
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
      }
    ]
  },
  resolve: {
    modules: [
      "node_modules",
      path.resolve(__dirname)
    ],
    extensions: [".js", ".ts", ".tsx"],
    plugins: [
      new TsconfigPathsPlugin({
        logLevel: "info",
        mainFields: "module",
        extensions: [".js", ".ts", ".tsx"]
      })
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      inject: true,
    })
  ]
}
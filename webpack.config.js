const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const port = process.env.PORT || 3000;


module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devtool: 'inline-source-map',
    output: {
        path: '/home/dizzle/dev/rockstarChallange/rockstarchallange/public',
        filename: 'bundle.js'
    },

    module: {
        rules: [
    
          // First Rule
          {
            test: /\.(js)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
          },
    
          // Second Rule
          {
            test: /\.css$/,
            use: [
              {
                loader: 'style-loader'
              },
              {
                loader: 'css-loader',
                options: {
                  modules: true,
                  localsConvention: 'camelCase',
                  sourceMap: true
                }
              }
            ]
          }
        ]
      },
}
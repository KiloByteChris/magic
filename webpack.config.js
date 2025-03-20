const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/js/main.js', // Main JS file
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'), // Output folder
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Apply Babel to JS files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.scss$/, // Compile SCSS to CSS
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'), // Serve files from "dist"
    hot: true // Enable hot module replacement
  }
};
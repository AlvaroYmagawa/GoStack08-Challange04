const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'), // set the file that will be converted
  output: {
    path: path.resolve(__dirname, 'public'), // where bundle.js will be generate
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'), // to run index.html automatic
  },
  module: {
    rules: [
      {
        test: /\.js$/, // regular expression
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader' // need the babel-loader package
        }
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      },
      {
        test: /.*\.(gif|png|jpe?g)$/i,
        use: {
          loader: 'file-loader'
        }
      }
    ]
  }
}
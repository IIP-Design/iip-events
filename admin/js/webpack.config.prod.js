const webpack = require( 'webpack' );
const UglifyJsPlugin = require( 'uglifyjs-webpack-plugin' );

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      },
      {
        test: /.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: [
      '*', '.js', '.jsx'
    ]
  },
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'dist/iip-events-admin.min.js'
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin( {
        uglifyOptions: {
          warnings: false,
          mangle: true,
          keep_fnames: false
        }
      } )
    ]
  }
};
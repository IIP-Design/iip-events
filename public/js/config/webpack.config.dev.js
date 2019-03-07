const webpack = require( 'webpack' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const paths = require( './paths' );

module.exports = {
  entry: paths.appIndexJs,
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
        test: /\.(css|scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              publicPath: paths.fontPath,
              outputPath: 'fonts'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [
      '*', '.js', '.jsx'
    ]
  },
  output: {
    path: paths.appDist,
    publicPath: '/',
    filename: './js/iip-events-front.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin( {
      filename: './css/iip-events-front.css'
    } )
  ],
  devServer: {
    contentBase: paths.appPublic,
    hot: true
  }
};

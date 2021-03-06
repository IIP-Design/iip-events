const webpack = require( 'webpack' );
const { BundleAnalyzerPlugin } = require( 'webpack-bundle-analyzer' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const OptimizeCSSAssetsPlugin = require( 'optimize-css-assets-webpack-plugin' );
const UglifyJsPlugin = require( 'uglifyjs-webpack-plugin' );
const paths = require( './paths' );

module.exports = {
  devtool: 'source-map',
  entry: paths.appIndexJs,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.js$/,
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
          'postcss-loader',
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
    filename: './js/iip-events-front.min.js',
    sourceMapFilename: './js/iip-events-front.min.js.map'
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin( {
        sourceMap: true
      } ),
      new OptimizeCSSAssetsPlugin( {} )
    ]
  },
  plugins: [
    new BundleAnalyzerPlugin( {
      analyzerMode: 'disabled',
      generateStatsFile: true,
      statsFilename: './stats.json'
    } ),
    new MiniCssExtractPlugin( {
      filename: './css/iip-events-front.min.css'
    } )
  ]
};

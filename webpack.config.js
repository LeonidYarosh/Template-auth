const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const autoprefixerPlugin = require('autoprefixer')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const isHot =
  process.env.DEBUG === 'true'
const isProduction =
  process.argv.indexOf('-p') !== -1 ||
  process.argv.indexOf('--optimize-minimize') !== -1

const BACKEND_PATH = '/httpbridge-server/'
const BACKEND_HOST = 'localhost:9992'

const extractCSS = new ExtractTextPlugin('stylesheets/[name]-one.css')
const extractLESS = new ExtractTextPlugin('stylesheets/[name]-two.css')

const cssStyles = [ {
  loader: 'css-loader',
  options: {
    sourceMap: true,
    sourceComments: true,
    importLoaders: 1,
  },
},
{
  loader: 'postcss-loader',
  options: {
    sourceMap: isProduction ? true : 'inline',
    plugins: [
      autoprefixerPlugin({
        browsers: [ '> 1%', 'last 2 versions' ],
      }),
    ],
  },
},
]

const lessStyles = cssStyles.concat([ {
  loader: 'less-loader',
  options: {
    sourceMap: true,
    sourceComments: true,
  },
} ])

const paths = {
  src: path.resolve(__dirname, 'src'),
  dist: path.resolve(__dirname, 'dist'),
}

const config = (env = 'development') => ({
  context: paths.src,

  entry: {
    app: [ 'babel-polyfill', './index' ],
  },

  output: {
    path: paths.dist,
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
  },

  resolve: {
    extensions: [ '.js', '.jsx' ],
    modules: [
      path.join(__dirname, 'src'),
      'node_modules',
    ],
  },

  devServer: {
    historyApiFallback: true,
    contentBase: './',
    hot: true,
    port: 8080,
    proxy: {
      [BACKEND_PATH + '*']: {
        headers: {
          host: BACKEND_HOST,
        },
        secure: false,
        target: 'http://' + BACKEND_HOST,
      },
    },
  },

  devtool: 'inline-source-map',

  module: {
    rules: [ {
      test: /globalize/,
      loader: 'imports-loader?define=>false',
    },
    {
      test: /\.(js|jsx)?$/,
      exclude: /(node_modules)/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            plugins: isHot ? [ 'syntax-dynamic-import', 'react-hot-loader/babel' ] : [],
          },
        },
      ],
    }, {
      test: /\.css$/,
      use: isHot ?
        [ 'style-loader' ].concat(cssStyles) :
        ExtractTextPlugin.extract({
          use: cssStyles,
          publicPath: '../assets/',
        }),
    }, {
      test: /\.less$/,
      use: isHot ?
        [ 'style-loader' ].concat(lessStyles) :
        ExtractTextPlugin.extract({
          use: lessStyles,
          publicPath: '../assets/',
        }),
    }, {
      test: /\.(png|jpg|gif)$/,
      loader: 'file-loader',
      options: {
        name: 'img/[name].[ext]',
      },
    }, {
      test: /\.(ttf|eot|woff|woff2|svg)$/,
      loader: 'file-loader',
      options: {
        name: 'fonts/[name].[ext]',
      },
    },
    ],
  },

  plugins: [
    new CleanWebpackPlugin([ 'dist' ]),
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(env),
      },
    }),
    extractCSS,
    extractLESS,
  ],
})

module.exports = config()

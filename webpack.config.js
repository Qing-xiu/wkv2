const path = require('path')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports = {
  entry: {
    'main': './src/main'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          // vue-loader options go here
        }
      },
      {
        test: /\.css$/,
        loader:  ExtractTextPlugin.extract({
          fallbackLoader: "style-loader",
          loader: "css-loader"
        })
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
          test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
          loader: 'file',
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  
  plugins: [
    new webpack.LoaderOptionsPlugin({
      vue: {
        postcss: [
          require('postcss-partial-import')({
            dirs:['src/css', 'node_modules']
          }),
          require('postcss-mixins')(),
          require('postcss-each')(),
          require('postcss-simple-vars')(),
          require('postcss-nested')(),
          require('postcss-current-selector')(),
          require('postcss-conditionals')(),
          require('postcss-px2rem')({remUnit: 75}),
          autoprefixer({ browsers: ['last 8 versions'] })
        ]
      }
    }),
    new ExtractTextPlugin('style.css')
  ],

  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    },
    modules: [path.resolve('./src/'), 'node_modules']
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      //sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}

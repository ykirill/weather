import webpack from 'webpack';
import path from 'path';
import pImport from 'postcss-import';
import pCssNext from 'postcss-cssnext';
import pBrowserReport from 'postcss-browser-reporter';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const context = path.resolve(__dirname, './src');
const distPath = path.resolve(__dirname, './dist');
const NODE_ENV = process.env.NODE_ENV || 'development';
const isProd = NODE_ENV === 'production';

console.log(`Webpack script run in ${NODE_ENV} mode`);

const devtool = isProd ? '' : 'source-map';
const entry = {
  app: './index.js',
  vendors: ['react'],
};
const output = {
  path: distPath,
  filename: 'bundle.js',
};
const resolve = {
  extensions: ['.js', '.jsx'],
  modules: [
    path.resolve(__dirname, 'node_modules'),
    context,
  ],
};

/**
 * devServer
 * */
const devServer = {
  contentBase: context,
  historyApiFallback: true,
  host: '0.0.0.0',
  port: 3000,
  compress: isProd,
  hot: !isProd,
  stats: {
    assets: true,
    children: false,
    chunks: false,
    hash: false,
    modules: false,
    publicPath: false,
    timings: true,
    version: false,
    warnings: true,
    colors: {
      green: '\u001b[32m',
    },
  },
};

/**
 * Rules
 * */
const eslintRule = {
  enforce: 'pre',
  test: /\.js$/,
  include: context,
  loader: 'eslint-loader',
};
const htmlRule = {
  test: /\.html$/,
  include: context,
  use: {
    loader: 'file-loader',
    options: {
      name: '[name].[ext]',
    },
  },
};
const babelRule = {
  test: /\.js$/,
  include: context,
  loader: 'babel-loader',
};
const postCssRule = {
  test: /\.pcss$/,
  include: context,
  use: ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: [
      {
        loader: 'css-loader',
        query: {
          modules: true,
          sourceMaps: true,
          localIdentName: '[name]__[local]___[hash:base64:5]',
        },
      },
      {
        loader: 'postcss-loader',
        options: {
          plugins: () => [pImport, pCssNext, pBrowserReport],
        },
      },
    ],
  }),
};
const imagesRule = {
  test: /.*\.(gif|png|jpe?g|svg)$/i,
  use: [
    'file-loader?hash=sha512&digest=hex&name=[name]__[hash].[ext]',
    {
      loader: 'image-webpack-loader',
      query: {
        mozjpeg: {
          progressive: true,
        },
        gifscale: {
          interlaced: false,
        },
        optipng: {
          optimizationLavel: 4,
        },
        pngquant: {
          quality: '75-90',
          speed: 3,
        },
      },
    },
  ],
};

/** Plugins */
const plugins = [
  new ExtractTextPlugin('styles.css'),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendors',
    minChunks: Infinity,
    filename: 'vendor.bundle.js',
  }),
  new webpack.DefinePlugin({
    __DEV__: !isProd,
  }),
  new webpack.NamedModulesPlugin(),
  new webpack.EnvironmentPlugin(['NODE_ENV']),
];
const prodPlugins = [
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
      screw_ie8: true,
      conditionals: true,
      unused: true,
      comparisons: true,
      sequences: true,
      dead_code: true,
      evaluate: true,
      if_return: true,
      join_vars: true,
    },
    sourceMap: false,
    output: {
      comments: false,
    },
  }),
];
const devPlugins = [
  new webpack.HotModuleReplacementPlugin(),
];

export default {
  devtool,
  context,
  entry,
  output,
  resolve,
  devServer,
  module: {
    rules: [
      eslintRule,
      htmlRule,
      babelRule,
      postCssRule,
      imagesRule,
    ],
  },
  plugins: isProd ?
    [...plugins, ...prodPlugins] :
    [...plugins, ...devPlugins],
};

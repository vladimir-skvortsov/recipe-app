const { resolve } = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const { default: ImageminPlugin } = require('imagemin-webpack-plugin')
const merge = require('webpack-merge')
const nodeExternals = require('webpack-node-externals')
const TerserPlugin = require('terser-webpack-plugin')
const webpack = require('webpack')
const WorkboxPlugin = require('workbox-webpack-plugin')
const { ReactLoadablePlugin } = require('react-loadable/webpack')
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin')
const WebpackPwaManifest = require('webpack-pwa-manifest')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const WebpackDevServer = require('webpack-dev-server')
const OpenBrowserPlugin = require('open-browser-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { getIfUtils, removeEmpty } = require('webpack-config-utils')
const lessToJs = require('less-vars-to-js')
const { readFileSync } = require('fs')
const StartServerPlugin = require('start-server-webpack-plugin')
const { StatsWriterPlugin } = require("webpack-stats-plugin")
var DiskPlugin = require("webpack-disk-plugin")


const antDesignVariablesPath = readFileSync(resolve(__dirname, 'antDesignVariables.less'), 'utf8')
const themeVariables = lessToJs(antDesignVariablesPath)


module.exports = env => {
  const { ifProd, ifDev } = getIfUtils(env)


  const commonConfig = {
    optimization: { noEmitOnErrors: true },
    resolve: {
      alias: {
        '@client': resolve(__dirname, 'source/client'),
        '@server': resolve(__dirname, 'source/server'),
        '@shared': resolve(__dirname, 'source/shared'),
      },
      extensions: ['.js', '.tsx', '.ts', '.mjs'],
    },
    devtool: ifDev('source-map', false),
    mode: ifProd('production', 'development'),
    module: {
      rules: [
        { test: /\.graphql$/, loader: 'raw-loader' },
        { test: /\.mjs$/, include: /node_modules/, type: 'javascript/auto' },
        {
          test: /\.(jpg|jpeg|png|gif|svg|woff|woff2)$/,
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: ifProd('[path][name].[hash].[ext]', '[path][name].[ext]'),
          },
        },
        {
          test: /\.(ttf|eot)$/,
          loader: 'file-loader',
          options: {
            name: ifProd('[path][name].[hash].[ext]', '[path][name].[ext]'),
          },
        },
        { test: /\.ejs$/, loader: 'raw-loader' },
        { test: /\.yaml$/, use: ['json-loader', 'yaml-loader'] },
      ],
    },
    plugins: removeEmpty([
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': ifProd('"production"', '"development"'),
      }),
      ifProd(new TerserPlugin({
        cache: resolve(__dirname, 'cache/terser'),
        extractComments: true,
        terserOptions: {
          mangle: true,
          compress: {
            unsafe: true,
            unused: true,
            dead_code: true,
          },
        },
      })),
    ]),
  }

  const frontEndConfig = merge(commonConfig, {
    entry: ifProd(
      resolve(__dirname, 'source/client/client.tsx'),
      [
        'webpack-dev-server/client?http://localhost:5000/',
        'webpack/hot/dev-server',
        resolve(__dirname, 'source/client/client.tsx'),
      ],
    ),
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'awesome-typescript-loader',
          options: {
            useBabel: true,
            babelOptions: {
              presets: [
                ['@babel/preset-env', { loose: true, modules: false }],
              ],
              plugins: [
                ['babel-plugin-import', { libraryName: 'antd', style: true }],
                '@babel/plugin-syntax-dynamic-import',
                '@babel/plugin-transform-runtime',
                'react-hot-loader/babel',
                'react-loadable/babel',
              ],
            },
            useCache: true,
            cacheDirectory: resolve(__dirname, 'cache/ts'),
          },
        },
        {
          test: /\.less$/,
          use: removeEmpty([
            ifProd(ExtractCssChunks.loader, 'style-loader'),
            'css-loader',
            'postcss-loader',
            {
              loader: 'less-loader',
              options: {
                modifyVars: themeVariables,
                javascriptEnabled: true,
              },
            },
          ]),
        },
      ],
    },
    optimization: ifProd(
      {
        splitChunks: {
          chunks: 'async',
          minSize: 30000,
          minChunks: 1,
          maxAsyncRequests: 5,
          maxInitialRequests: 3,
          automaticNameDelimiter: '~',
          name: true,
          cacheGroups: {
            vendors: {
              test: /[\\/]node_modules[\\/]/,
              priority: -10,
            },
            default: {
              minChunks: 2,
              priority: -20,
              reuseExistingChunk: true,
            },
          },
        },
      },
      {},
    ),
    output: {
      path: resolve(__dirname, 'build/public'),
      filename: ifProd('bundle.[hash].js', 'bundle.js'),
      chunkFilename: ifProd('[id].[hash].js', '[id].js'),
      publicPath: '/',
    },
    target: 'web',
    plugins: removeEmpty([
      ifProd(new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)),
      ifProd(new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        reportFilename: '../report.html',
      })),
      new ExtractCssChunks({
        filename: '[name].[hash].css',
        chunkFilename: '[id].[hash].css',
      }),
      new CleanWebpackPlugin({ verbose: false, watch: ifDev() }),
      ifProd(new WebpackPwaManifest({
        name: 'Vladimir Skvortsov',
        short_name: 'Skvortsov',
        description: 'Web portfolio. I am Vladimir Skvortsov, freelance UI/UX designer & full-stack web developer in Tomsk, Russia. Web design, branding, logos, illustration, landing pages, websites.',
        crossorigin: 'use-credentials',
        fingerprints: true,
        inject: true,
        icons: [
          {
            src: resolve(__dirname, 'source/public/favicon.png'),
            sizes: [16, 32, 48, 62, 96, 128, 144, 152, 167, 180, 192, 256, 384, 512],
            destination: 'icons',
          }
        ],
        start_url: '/',
        scope: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: themeVariables['primary-color'],
      })),
      ifProd(new WorkboxPlugin.GenerateSW({
        clientsClaim: true,
        skipWaiting: true,
        swDest: 'serviceWorker.js',
        navigateFallback: '/',
      })),
      new StatsWriterPlugin({ filename: '../stats.json' }),
      ifDev(new DiskPlugin({
        output: {
          path: resolve(__dirname, 'build'),
        },
        files: [
          {
            asset: '../stats.json',
            output: { filename: 'stats.json' },
          },
        ],
      })),
      new ReactLoadablePlugin({ filename: resolve(__dirname, 'build/reactLoadableStats.json') }),
      new CopyPlugin([{ from: 'source/public' }], { copyUnmodified: ifDev() }),
      ifProd(new ImageminPlugin({
        test: /\.(jpg|jpeg|png|gif|svg)$/i,
        pngquant: { quality: '95-100' },
        optipng: { optimizationLevel: 7 },
        gifsicle: { optimizationLevel: 3 },
        jpegtran: { progressive: true },
        svgo: { removeViewBox: true },
        cacheFolder: resolve(__dirname, 'cache/imagemin'),
      })),
      new webpack.optimize.OccurrenceOrderPlugin(true),
      new webpack.HotModuleReplacementPlugin(),
      ifDev(new HtmlWebpackPlugin({
        template: resolve(__dirname, 'template.html'),
        filename: resolve(__dirname, 'build/public/index.html'),
      })),
      ifDev(new OpenBrowserPlugin({ url: 'http://localhost:5000' })),
    ]),
  })

  const backEndConfig = merge(commonConfig, {
    entry: resolve(__dirname, 'source/server/server.tsx'),
    externals: [nodeExternals()],
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'awesome-typescript-loader',
          options: {
            useBabel: true,
            babelOptions: {
              presets: [
                ['@babel/preset-env', {
                  loose: true,
                  modules: false,
                }]
              ],
              plugins: [
                '@babel/plugin-syntax-dynamic-import',
                '@babel/plugin-transform-runtime',
                'react-hot-loader/babel',
                'react-loadable/babel'
              ],
            },
            useCache: true,
            cacheDirectory: resolve(__dirname, 'cache/ts'),
          },
        },
      ],
    },
    output: {
      path: resolve(__dirname, 'build'),
      filename: 'server.js',
    },
    plugins: removeEmpty([
      new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 1 }),
      new webpack.DefinePlugin({
        __dirname: '__dirname',
        __filename: '__filename',
      }),
      ifDev(new StartServerPlugin({
        name: resolve(__dirname, 'build/server.js'),
        nodeArgs: ['--inspect'],
        signal: true,
      })),
    ]),
    target: 'node',
    watch: ifDev(),
  })


  if (ifProd()) return [backEndConfig, frontEndConfig]
  else {
    new WebpackDevServer(webpack(frontEndConfig), {
      contentBase: resolve(__dirname, 'build/public'),
      historyApiFallback: true,
      hot: true,
      inline: true,
      quiet: true,
      proxy: {
        '/graphql': `http://localhost:${process.env.PORT || 8080}`,
        '/api': `http://localhost:${process.env.PORT || 8080}`,
      },
    }).listen(5000, error => {
      if (error) throw error
      console.log('Development server is running at http://localhost:5000')
    })

    return backEndConfig
  }
}

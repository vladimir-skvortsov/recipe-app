const { resolve } = require('path')
const lessToJs = require('less-vars-to-js')
const { readFileSync } = require('fs')


const antDesignVariablesPath = readFileSync(resolve(__dirname, '../antDesignVariables.less'), 'utf8')
const themeVariables = lessToJs(antDesignVariablesPath)


module.exports = ({ config }) => {
  config.resolve.extensions.push('.tsx', '.ts')

  config.resolve.alias['@client'] = resolve(__dirname, '../source/client'),
  config.resolve.alias['@server'] = resolve(__dirname, '../source/server'),
  config.resolve.alias['@shared'] = resolve(__dirname, '../source/shared'),

  config.module.rules.push(
    {
      test: /\.tsx?$/,
      use: [
        {
          loader: 'awesome-typescript-loader',
          options: {
            useBabel: true,
            babelOptions: {
              plugins: [
                ['babel-plugin-import', {
                  libraryName: 'antd',
                  style: true
                }],
                '@babel/plugin-syntax-dynamic-import',
                '@babel/plugin-transform-runtime',
                'react-hot-loader/babel',
                'react-loadable/babel'
              ],
            },
          },
        },
        {
          loader: '@storybook/addon-storysource/loader',
          options: { parser: 'typescript' },
        },
      ],
    },
    {
      test: /\.less$/,
      use: [
        'style-loader',
        'css-loader',
        'postcss-loader',
        {
          loader: 'less-loader',
          options: {
            modifyVars: themeVariables,
            javascriptEnabled: true,
          },
        },
      ],
    },
  )


  return config
}
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ZipPlugin = require('zip-webpack-plugin');


const app = {
  entry: {
    content: './src/js/content.js',
  },
  mode: 'development',
  output: {
    path: `${__dirname}/dist/`,
    filename: 'js/[name].js'
  },
  plugins: [
    new CleanWebpackPlugin({}),
    new CopyWebpackPlugin({
      patterns: [
        {from: 'src/icon/*.svg', to: 'icon/[name].[ext]'},
        {from: 'src/meta/manifest.json'},
      ]
    }),
    new ZipPlugin({
      filename: '../unjump5ch.zip'
    }),
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
};

module.exports = [app];

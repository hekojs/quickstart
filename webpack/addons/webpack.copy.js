'use strict'

const CopyPlugin = require('copy-webpack-plugin')
const path = require('path')
const root = path.join(__dirname, '../..')

module.exports = {
  plugins: [
    new CopyPlugin([
      { from: path.join(root, 'static'), to: path.join(root, 'dist') },
    ]),
  ],
}

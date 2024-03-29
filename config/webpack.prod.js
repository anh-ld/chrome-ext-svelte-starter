const {merge} = require('webpack-merge')
const common = require('./webpack.common.js')
const paths = require('./paths')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = merge(common, {
	mode: 'production',
	devtool: false,
	output: {
		path: paths.build,
		filename: '[name].[contenthash:5].js'
	},
	optimization: {
		minimizer: [
			new TerserPlugin({
				cache: true,
				parallel: true,
				terserOptions: {
					output: {
						comments: false
					}
				}
			})
		]
	}
})

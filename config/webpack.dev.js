const WebpackDevServer = require('webpack-dev-server')
const {HotModuleReplacementPlugin} = require('webpack')
const {merge} = require('webpack-merge')
const common = require('./webpack.common.js')
const paths = require('./paths')
const PORT = 4444

const excludeEntriesToHotReload = []

for (var entryName in common.entry) {
	if (excludeEntriesToHotReload.indexOf(entryName) === -1) {
		common.entry[entryName] = [
			'webpack-dev-server/client?http://localhost:' + PORT,
			'webpack/hot/dev-server'
		].concat(common.entry[entryName])
	}
}

module.exports = merge(common, {
	mode: 'development',
	devtool: 'inline-source-map',
	plugins: [new HotModuleReplacementPlugin()],
	devServer: {
		contentBase: paths.build,
		compress: true,
		hot: true,
		headers: {'Access-Control-Allow-Origin': '*'},
		port: PORT
	}
})

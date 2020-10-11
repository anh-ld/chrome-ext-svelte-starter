const path = require('path')

module.exports = {
	root: path.resolve(__dirname, '../'),
	popup: path.resolve(__dirname, '../src/context/popup/index.js'),
	background: path.resolve(__dirname, '../src/context/background/index.js'),
	options: path.resolve(__dirname, '../src/context/options/index.js'),
	build: path.resolve(__dirname, '../build'),
	template: path.resolve(__dirname, '../src/template/'),
	assets: path.resolve(__dirname, '../src/assets/')
}

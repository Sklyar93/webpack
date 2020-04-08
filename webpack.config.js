const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const{CleanWebpackPlugin} = require('clean-webpack-plugin')//очищение в папке dist от страых фаилов
module.exports = {
	mode: 'development', // режим разработки
	entry:{
		main: './src/index.js', // входной фаил
		analytics: './src/analytics.js'
	},
	output: { // куда складывать
		filename: '[name].[contenthash].bundle.js', //формирование для разных фаилов и для обхода кэша
		path: path.resolve(__dirname, 'dist')
	},
	plugins: [
		new htmlWebpackPlugin(
			{
				template: './src/index.html'
			}
		),
		new CleanWebpackPlugin()
	]
}
const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const{CleanWebpackPlugin} = require('clean-webpack-plugin')//очищение в папке dist от страых фаилов
module.exports = {
	context: path.resolve(__dirname, 'src'), //работать с папкой src
	mode: 'development', // режим разработки
	entry:{
		main: './index.js', // входной фаил
		analytics: './analytics.js'
	},
	output: { // куда складывать
		filename: '[name].[contenthash].bundle.js', //формирование для разных фаилов и для обхода кэша
		path: path.resolve(__dirname, 'dist')
	},
	plugins: [
		new htmlWebpackPlugin(
			{
				template: './index.html'
			}
		),
		new CleanWebpackPlugin()
	],
	module: {
		rules: [{
			test: /\.css$/,
			use: ['style-loader','css-loader']
		},
		{
			test: /\.(png|svg|jpg|gif)$/,
			use: ['file-loader']
		},
		{
			test: /\.(ttf|woff|woff2)$/,
			use: ['file-loader']
		}]
	}
}
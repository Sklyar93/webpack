const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const{CleanWebpackPlugin} = require('clean-webpack-plugin')//очищение в папке dist от страых фаилов
const CopyWebpackPlugin = require('copy-webpack-plugin')//перенос фаилов
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const OptimizeCssAssetsWebpack = require('optimize-css-assets-webpack-plugin')
const isDev = process.env.NODE_ENV === "development"// определение режим разработки
const isProd = process.env.NODE_ENV === "production"// определение режим сборки


const optimizations = ()=>{
	const config = {//оптимизация фаилов
		splitChunks: {
			chunks : 'all'
		}
	}
	if(isProd){
		config.minimizer = [
			new OptimizeCssAssetsWebpack(),
			new TerserWebpackPlugin()	
		]
	}
	return config
}
const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`
const cssLoaders = ext => {
	cssloader = [
	{
        loader: MiniCssExtractPlugin.loader,
        options: {
        	hmr: isDev,//без презагрузки страницы
        	reloadAll: true,
        },
	},
	'css-loader'
	]

	if(ext){
		cssloader.push(ext)
	}

	return cssloader.map((elem) =>{ 
		return elem
	})
}
module.exports = {
	context: path.resolve(__dirname, 'src'), //работать с папкой src
	mode: 'development', // режим разработки
	devServer: {
		hot: isDev
	},
	entry:{
		main: './index.js', // входной фаил
		analytics: './analytics.js'
	},
	output: { // куда складывать
		filename: filename('js'), //формирование для разных фаилов и для обхода кэша
		path: path.resolve(__dirname, 'dist')
	},
	resolve:{// понимание форматов
		extensions: ['.js', '.json', '.png'],
		alias: {
			'@models': path.resolve(__dirname, 'src/models')
		}
	},
	optimization: optimizations(),
	plugins: [
		new htmlWebpackPlugin(//добавление хэш фаилов js
			{
				template: './index.html',
				minify: {
        			collapseWhitespace: isProd
				}
			}
		),
		new CleanWebpackPlugin(),
		new CopyWebpackPlugin([
			{
				from: path.resolve(__dirname, 'src/favicon.ico'),
				to: path.resolve(__dirname, 'dist')
			}
		]),
		new MiniCssExtractPlugin([{
			filename: filename('css'), //формирование для разных фаилов и для обхода кэша
			path: path.resolve(__dirname, 'dist')
		}])
	],
	module: {
		rules: [
		{
			test: /\.css$/,
			use: cssLoaders()

		},
		{
			test: /\.sass$/,
			use: cssLoaders('sass-loader')
		},
		{
			test: /\.(png|svg|jpg|gif)$/,
			use: ['file-loader']
		},
		{
			test: /\.(ttf|woff|woff2)$/,
			use: ['file-loader']
		},
		{
			test: /\.xml$/,
			use: ['xml-loader']
		},
		{
			test: /\.csv$/,
			use: ['csv-loader']
		}]
	}
}
console.log("prod:", isProd)
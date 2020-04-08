const path = require('path')

module.exports = {
	mode: 'development', // режим разработки
	entry: './src/index.js', // входной фаил
	output: { // куда складывать
		filename: 'bundle.js', 
		path: path.resolve(__dirname, 'dist')
	}
}
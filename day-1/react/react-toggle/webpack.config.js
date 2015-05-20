var webpack = require('webpack');

module.exports = {
	entry: {
		index: './app/index.js'
	},

	output: {
		filename: './public/[name].js'
	},

	module: {
		loaders: [
			{test: /\.js$/, loader: 'jsx-loader'}
		]
	},

	plugins: [
		new webpack.optimize.CommonsChunkPlugin('./public/common.js')
	]
};
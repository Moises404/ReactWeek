var webpack = require('webpack');

module.exports = {
	devtool: 'eval',

	entry: {
		home: './app/Home.js',
		dashboard: './app/Dashboard.js'
	},

	output: {
		filename: './public/[name].js'
	},

	module: {
		loaders: [
			{ test: /\.js$/, loader: 'jsx-loader'},
			{ test: /\.json$/, loader: 'json-loader'}
		]
	},

	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
		}),
		new webpack.optimize.CommonsChunkPlugin('./public/common.js'),
		new webpack.optimize.UglifyJsPlugin()
	]
};
const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

let config = {
	name: 'main',
	mode: process.env.NODE_ENV || 'production', // production
	target: 'web',
	entry: {
		app: './src/main.js' // ./src/index.js
	},
	output: {
		path: path.resolve(__dirname, 'dist'), // dist
		publicPath: './',
		filename: 'main.bundle.js' // main.js
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader']
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			inject: 'head',
			template: './src/index.html',
			filename: 'index.html',
			minify: {
				removeComments: true,
				collapseWhitespace: true
			}
		}),
		new MiniCssExtractPlugin()
	],
	devServer: {
		contentBase: path.resolve(__dirname, 'dist'),
		publicPath: './',
		host: '192.168.0.8',
		// port: 8080,
		// disableHostCheck: true,
		hot: true,
		historyApiFallback: true,
		writeToDisk: true
	},
	devtool: 'source-map'
}

module.exports = config
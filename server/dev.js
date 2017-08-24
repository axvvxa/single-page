/**
 * @copyright Betanovo Ltd. 2017-present
 * @author caixiaoyun
 */
'use strict'

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
console.log('**********')
console.log('[dev]')
console.log('**********')
module.exports = {
	entry: {
		app: path.resolve(__dirname, '../src/app.js')
	},
	devtool: 'inline-source-map',
	devServer: {
		port: '1001',
		host: 'localhost',
		historyApiFallback: true,
		hot: true
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'app/index.html',
			chunksSortMode: 'dependency'
		}),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('development')
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'common'
		})
	],
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, '../public')
	},
	module: {
		rules: [{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			}, {
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					'url-loader'
				]
			}, {
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env']
					}
				}
		}]
	}
}

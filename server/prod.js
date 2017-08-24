/**
 * @copyright Betanovo Ltd. 2017-present
 * @author caixiaoyun
 */
'use strict'

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
console.log('**********')
console.log('[prod]')
console.log('**********')
module.exports = {
	entry: {
		app: path.resolve(__dirname, '../src/app.js'),
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, '../public')
	},
	plugins: [
		new HtmlWebpackPlugin({ // 生成一个html文件
			template: 'app/index.html'
		}),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production')
		}),
		new webpack.optimize.UglifyJsPlugin({ //代码压缩并去除console
			compress: {
				warnings: false,
				drop_console: true
			}
		}),
		new webpack.optimize.CommonsChunkPlugin({ // 提取入口文件的公共模块
			name: 'common',
			chunks: ['app']
		})
	],
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

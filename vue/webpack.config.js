const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const { DefinePlugin } = require('webpack')

module.exports = {
	mode: "development",
	context: __dirname,
	devServer: {
		static: {
			directory: path.resolve(__dirname, "public")
		},
		liveReload: true,
		hot: true,
		port: 8000
	},
	resolve: {
		extensions: ['.js', '.vue']
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					'style-loader', 'css-loader'
				]
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'public/index.html'
		}),
		new VueLoaderPlugin(),
		new DefinePlugin({
			__VUE_OPTIONS_API__: true,
			__VUE_PROD_DEVTOOLS__: false
		})
	]
}

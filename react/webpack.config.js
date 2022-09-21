const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
	mode: "development",
	context: __dirname,
	devServer: {
		static: {
			directory: path.resolve(__dirname, 'public')
		},
		liveReload: true,
		hot: true,
		port: 8000
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
				test: /\.js?x$/,
				loader: 'babel-loader'
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "public/index.html"
		})
	],
	resolve: {
		extensions: ['.js', '.jsx']
	}
}
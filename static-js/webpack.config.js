const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
		alias: {
			"@": path.resolve(__dirname, "src/demonstration/of/resolve/alias")
		}
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					'style-loader', 'css-loader'
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'public/index.html'
		})
	]
}

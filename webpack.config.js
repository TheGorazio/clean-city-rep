const webpack = require('webpack');
const path = require('path');

module.exports = {
	entry: [
	    'webpack-hot-middleware/client',
	    './src/index.js'
  	],
	output: {
		path: path.join(__dirname, 'dist'),
    	filename: 'bundle.js',
    	publicPath: '/static/'
	},
	module: {
		loaders: [
			{
				test: /\.html$/,
				loader: "file?name=[name].[ext]"	
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loaders: ["react-hot", "babel-loader"]
			},
			{
				test: /\.tsx?$/,
				loader: "awesome-typescript-loader"
			},
			{
				test: /\.(sass|scss)$/,
				loaders: ["style-loader", "css-loader", "sass-loader"],
			}
		]
	},
	devtool: 'inline-source-map',
	resolve: {
		extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
	},
	plugins: [
	    new webpack.HotModuleReplacementPlugin(),
	    new webpack.NoErrorsPlugin()
  	],
	externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
}

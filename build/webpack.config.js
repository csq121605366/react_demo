
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

module.exports = {
    entry: {
        app: ['./src/index.jsx', 'webpack-hot-middleware/client']
    },
    devtool: '#cheap-module-eval-source-map',
    module: {
        rules: [
            {
                test: /\.jsx|\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['react', 'es2015']
                    }
                }
            }
        ]
    },
    devServer: { inline: true },
    plugins: [
        // new CleanWebpackPlugin(['dist']), //清除dist文件夹
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        }),
        new FriendlyErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],
    output: {
        path: path.resolve(__dirname, ''),
        filename: '[name].bundle.js',
        //publicPath 也会在服务器脚本用到，以确保文件资源能够在 http://localhost:3000 下正确访问，我们稍后再设置端口号。
        publicPath: ''
    }
}
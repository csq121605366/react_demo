const path = require('path');
module.exports = {
    entry: path.join(__dirname, 'app', 'index.js'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['preset-env', 'es2015']
                    }
                }
            },
            // {
            //     test: /\.css$/,
            //     use: {
            //         loader: 'style!css'
            //     }
            // },
            // {
            //     test: /\.less$/,
            //     use: [{
            //         loader: "style-loader" // creates style nodes from JS strings
            //     }, {
            //         loader: "css-loader" // translates CSS into CommonJS
            //     }, {
            //         loader: "less-loader" // compiles Less to CSS
            //     }]
            // },
            // {
            //     test: /.jsx?$/,
            //     include: [
            //         path.resolve(__dirname, 'app')
            //     ],
            //     exclude: [
            //         path.resolve(__dirname, 'node_modules'),
            //         path.resolve(__dirname, 'bower_components')
            //     ],
            //     use: 'babel-loader',
            //     query: {
            //         presets: ['es2015']
            //     }
            // }
        ]
    },
    devtool: 'source-map',
    devServer: {
        publicPath: path.join('/dist/')
    }
};
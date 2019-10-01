'use strict';

const environment = (process.env.NODE_ENV || 'development').trim();

if (environment === 'development') {
    module.exports = require('./config/webpack.config.dev');
} else {
    const path = require('path')
    const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
    const { VueLoaderPlugin } = require('vue-loader')

    module.exports = {
        node: { fs: 'empty', module: 'empty' },
        entry: path.resolve(__dirname + '/src/index.js'),
        output: {
            path: path.resolve(__dirname + '/dist/'),
            filename: 'qlt-timkiem.min.js',
            libraryTarget: 'umd',
            library: 'qlt-timkiem',
            umdNamedDefine: true
        },
        externals: {
            moment: 'moment',
            vue: 'vue'
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    include: __dirname,
                    exclude: /node_modules/
                },
                {
                    test: /\.vue$/,
                    loader: 'vue-loader'
                },
                {
                    test:/\.css$/,
                    use:['style-loader','css-loader']
                }
            ]
        },
        optimization: {
            minimizer: [
            // we specify a custom UglifyJsPlugin here to get source maps in production
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                uglifyOptions: {
                compress: false,
                ecma: 6,
                mangle: true
                },
                sourceMap: true
            })
            ]
        },
        plugins: [
            // make sure to include the plugin for the magic
            new VueLoaderPlugin()
        ]
    }
}

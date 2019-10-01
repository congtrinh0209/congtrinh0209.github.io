'use strict';
const VueLoaderPlugin      = require('vue-loader/lib/plugin');
const HtmlPlugin           = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const helpers              = require('./helpers');
const isDev                = process.env.NODE_ENV === 'development';
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');

const webpackConfig = {
    entry: {
        polyfill: '@babel/polyfill',
        main: helpers.root('src', 'main'),
    },
    resolve: {
        extensions: [ '.js', '.vue' ],
        alias: {
            'vue$': isDev ? 'vue/dist/vue.runtime.js' : 'vue/dist/vue.runtime.min.js',
            '@': helpers.root('src')
        }
    },
    module: {
        rules: [
            { test: /\.vue$/, loader: 'vue-loader' },
            { test: /\.vue\.html$/, loader: 'vue-loader' },
            {
                test: /\.css$/,
                use: [
                    isDev ? 'vue-style-loader' : MiniCSSExtractPlugin.loader,
                    { loader: 'css-loader', options: { sourceMap: isDev } },
                ]
            },
            {
                test: /\.s(c|a)ss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    {
                    loader: 'sass-loader',
                    options: {
                        implementation: require('sass'),
                        fiber: require('fibers')
                    }
                    }
                ]
            }
        ]
    },
    plugins: [
        new VuetifyLoaderPlugin(),
        new VueLoaderPlugin(),
        new HtmlPlugin({ template: 'public/index.html', chunksSortMode: 'dependency' }),
    ]
};

module.exports = webpackConfig;

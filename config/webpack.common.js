const path = require('path');
const webpack = require('webpack');
const { CheckerPlugin } = require('awesome-typescript-loader')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        'polyfills': './src/ts/polyfills.ts',
        'vendor': './src/ts/vendor.ts',
        'main': './src/ts/index.ts',
    },
    resolve: {
        extensions: ['.ts', '.js', '.json'],
        modules: ['node_modules'],
    },
    context: path.resolve(__dirname, ".."),

    module: {
        loaders: [
            {
                test: /\.(ts|tsx)$/,
                loaders: ['awesome-typescript-loader'],
                exclude: [/node_modules/, /\.(spec|e2e)\.ts$/]
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'url-loader?name=assets/[name].[hash].[ext]'
            },
            { test: /\.scss$/, loaders: ['style', 'css', 'sass'] },
            {
                test: /\.css$/,
                loader: 'style-loader'
            }, {
                test: /\.css$/,
                loader: 'css-loader',
                query: {
                    modules: true,
                    localIdentName: '[name]__[local]___[hash:base64:5]'
                }
            },
            {
                test: /\.html$/,
                loader: 'raw-loader'
            }
        ]
    },
    plugins: [
        new CheckerPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['vendor', 'polyfills']
        }),
        new HtmlWebpackPlugin({
            title: 'Hello Webassembly',
            filename: 'index.html',
            template:path.resolve(__dirname, './../src/html/index.html'),
        })
    ]
};

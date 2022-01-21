const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const { VueLoaderPlugin } = require('vue-loader')
const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src'),

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[hash].js',
    },

    devServer: {
        port: 3000,
    },

    resolve: {
        extensions: ['.js'],
        alias: {
            '@': path.resolve(__dirname, 'src'),
            'vue': 'vue/dist/vue.js',
        }
    },

    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: './css/[hash].css'
        }),
        new VueLoaderPlugin(),
    ],

    module: {
        rules: [{
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/'
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ],
    },
};
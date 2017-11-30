const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack');

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    entry: {
        main: './src/index/index.js',
        login: './src/index/login.js',
        teacherList: './src/teacher/teacherList.js',
        teacherAdd: './src/teacher/teacherAdd.js',
        vendor: ['jquery']
    },
    resolve: {
        extensions: ['.js'],
        alias: {
            '@': resolve('src'),
        }
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        loaders: [
            // {
            //     test: /\.css/,
            //     loader: 'style-loader!css-loader'
            // },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            { //解析 .html
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.(png|jpg|gif|woff2|woff|eot|svg|ttf)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        name: '[path][name][hash].[ext]',
                        outputPath: 'images/',
                        limit: 8192,
                        publicPath: '/' //虚拟路径
                    }
                }]
            }
        ]
    },
    plugins: [
        // new UglifyJSPlugin()
        new HtmlWebpackPlugin({
            template: './src/index/index.ejs',
            chunks: ['vendor', 'main'],
            filename: './index.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/teacher/list.ejs',
            chunks: ['vendor', 'teacherList'],
            filename: './teacher/list.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/teacher/add.ejs',
            chunks: ['vendor', 'teacherAdd'],
            filename: './teacher/add.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/index/login.ejs',
            chunks: ['vendor', 'login'],
            filename: './login.html'
        }),
        new ExtractTextPlugin("[name][hash:8].css"),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor'],
        }),
    ],
    devServer: {
        contentBase: '/dist',
        // publicPath: "/dist/",
        port: 3000,
        proxy: {
            '/api': {
                target: 'http://api.botue.com',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '', // rewrite path 
                },
            }
        }
    }
}
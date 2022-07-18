const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require("path");
const base = require('./webpack.config.base.js')

module.exports = {
    ...base,//把base的属性继承过来
    mode: "production",
    plugins: [
        ...base.plugins,//抄之前的plugins
        new MiniCssExtractPlugin({ //提取出CSS的插件，形成新css文件
            filename: '[name].[contenthash].css',
            chunkFilename: '[id].[contenthash].css',
            ignoreOrder: false, // Enable to remove warnings about conflicting order
        }),
    ],
    module: {
        rules: [
            ...base.module.rules,
            {
                test: /\.css$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../',
                        },
                    },
                    'css-loader',
                ],
            }
        ]
    }
};
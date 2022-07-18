const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require("path");

const base = require('./webpack.config.base.js')

module.exports = {
    ...base, //把base的属性继承过来
    devtool: "inline-source-map",
    devServer: {
        contentBase: "./dist"
    },
    module: {
        rules: [
            ...base.module.rules,
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"] //开发模式，不新生成css文件，用js写在html里
            }
        ]
    }
};
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: "./src/index.js", //入口
    output: {
        filename: "index.[contenthash].js" //输出
    },
    plugins: [
        new HtmlWebpackPlugin({  //插件
            title: "XDML - 写代码啦",
            template: "src/assets/index.html"
        })
    ],
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ["file-loader"]
            },
            {
                test: /\.styl$/,
                loader: ["style-loader", "css-loader", "stylus-loader"]
            },
            {
                test: /\.less$/,
                loader: ["style-loader", "css-loader", "less-loader"]
            },
            {
                test: /\.scss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "sass-loader",
                        options: {
                            implementation: require("dart-sass")
                        }
                    }
                ]
            }
        ]
    }
};
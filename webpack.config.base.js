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
                test:/\.(png|svg|jpg|gif)$/,
                use:["file-loader"]
            },
            {
                test: /\.styl$/,
                loader:['style-loader', 'css-loader','stylus-loader']
            },
            {
                test: /\.less$/,
                loader: ['style-loader', 'css-loader', 'less-loader'],
            },

            {
                test: /\.scss$/i,
                use: [
                    // 将 JS 字符串生成为 style 节点
                    'style-loader',
                    // 将 CSS 转化成 CommonJS 模块
                    'css-loader',
                    // 将 Sass 编译成 CSS
                    {
                        loader: "sass-loader",
                        options: {
                            implementation: require('dart-sass')
                        }
                    },
                ],
            },
        ],
    },
};
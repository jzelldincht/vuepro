const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: {
        index: __dirname + '/src/js/index.js',
    },
    output: {
        path: __dirname + '/app/assets/js',
        filename: '[name].js',
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js',
        }
    },
    externals: {

    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|devprocess|app)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        exclude: [
                            // \\ for Windows, \/ for Mac OS and Linux
                            /node_modules[\\\/]core-js/,
                            /node_modules[\\\/]webpack[\\\/]buildin/,
                        ],
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime']
                    }
                }
            },
            // 需要加入N个Loaders，譬如vue-loader、babel-loader、css-loader等等
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: __dirname + '/app/index.html',
            template: __dirname + '/src/tpl/index.html',
            inject: 'body',
            hash: true,
            chunks: ['index'],
        }),
    ],
};
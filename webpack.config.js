const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require("path")
const ExtractTextPlugin = require("extract-text-webpack-plugin")

const config = {
    mode: "production",
    entry: {
        main: ["./src/app.jsx"]
    },
    output: {
        path: path.join(__dirname, "./dist/"),
        filename: "[name].js",
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/react']
                    }
                }
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [
                    'css-loader',
                    'sass-loader'
                    ]
                })
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            template: './src/index.html',
            chunks: ['main'],
            path: path.join(__dirname, "./dist/")
        }),
        new ExtractTextPlugin('css/mystyles.css')
   ]
}

module.exports = config
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require("path")

const config = {
    mode: "production",
    entry: {
        js: ["./src/app.jsx"]
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
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            template: './src/index.html',
            chunks: ['js'],
            path: path.join(__dirname, "./dist/")
        })
   ]
}

module.exports = config
const merge = require('webpack-merge')
const path = require("path")
const baseWebpackConfig = require('./webpack.config')

const devWebpackConfig = merge(baseWebpackConfig, {
    watch: true,
    mode: "development",
    devServer: {
        contentBase: path.join(__dirname, "./dist/"),
        port: 9000
    }
})

module.exports = devWebpackConfig
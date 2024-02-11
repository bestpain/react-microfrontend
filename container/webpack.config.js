const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = {
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new ModuleFederationPlugin({
            name:'container',
            remotes:{
                productsApp:'product@http://localhost:8081/remoteEntry.js'
            }
        })
    ],
    devServer: {
        port: 8080
    }
}
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = {
    mode: 'development',
    output : {
        uniqueName: 'product',
    },
    devServer: {
        port: 8081
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new ModuleFederationPlugin({
            name:'product',
            filename:'remoteEntry.js',
            exposes:{
                './ProductsIndex':'./src/bootstrap'
            },
            shared: ['@faker-js/faker']
        })
    ]
}
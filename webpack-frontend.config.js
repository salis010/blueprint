const path = require("path")
const env = process.env.NODE_ENV
const LoadablePlugin = require('@loadable/webpack-plugin')
const webpack = require('webpack')

module.exports = {
    entry: "./src/frontend/index.tsx",
    output: {
        path: path.resolve(__dirname, "dist", "dist-frontend"),
        publicPath: '/assets/',
        filename: "[name].[chunkhash].js"
    },
    optimization: {
        splitChunks: {
            name: 'vendor',
            chunks: 'initial',
        },
    },
    plugins: [
        new LoadablePlugin(),
        new webpack.DefinePlugin({ __isBrowser__: "true" })
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [{
                    loader: "ts-loader",
                    options: {
                        configFile: "tsconfig-frontend.json"
                    }
                }]
            },
            {
                test: /\.(jpg|png)$/,
                use: {
                    loader: 'url-loader',
                }
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    mode: env || 'development',
    devtool: 'source-map'
}


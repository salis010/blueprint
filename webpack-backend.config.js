const path = require("path")
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

const env = process.env.NODE_ENV

module.exports =  {
    entry: "./src/backend/server.tsx",
    output: {
        path: path.resolve(__dirname, "dist", "dist-backend"),
        filename: "[name].js"
    },
    target: "node",
    node: {
        __dirname: true,
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [{
                    loader: "ts-loader",
                    options: {
                        configFile: "tsconfig-backend.json"
                    }
                }]
            },
        ]
    },
    plugins: [
        new webpack.DefinePlugin({ __isBrowser__: "false" })
    ],
    mode: env || 'development',
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    externals: [nodeExternals({
        allowlist: [
            /^@loadable\/component$/,
            /^react$/,
            /^react-dom$/,
            /^loadable-ts-transformer$/,
            ]
        })]
}

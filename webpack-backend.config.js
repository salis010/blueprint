const nodeExternals = require('webpack-node-externals')
const path = require("path")

const env = process.env.NODE_ENV

module.exports = {
    entry: "./src/backend/server.tsx",
    output: {
        path: path.resolve(__dirname, "dist", "dist-backend"),
        filename: "backend_bundle.js"
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
    mode: env || 'development',
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    externals: [nodeExternals()]
}

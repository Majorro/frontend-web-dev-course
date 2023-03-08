const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: {
        main: "./src/main.ts",
        comic: "./src/comic.ts",
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
        ],
    },
    plugins: [
        // TODO: add minimizing for production
        new CopyWebpackPlugin({
            patterns: [
                { from: "./src/index.html", to: "index.html" },
                { from: "./src/static", to: "static" },
                { from: "./src/styles", to: "styles" },
                { from: "./src/templates", to: "templates" },
            ],
        }),
    ],
    resolve: {
        extensions: [".ts", ".js"],
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
};

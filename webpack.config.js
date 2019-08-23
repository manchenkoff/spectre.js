// import plugins
const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const pages = require('./pug/config');

/**
 * Base webpack configuration
 *
 * @param env -> env parameters
 * @param argv -> CLI arguments, 'argv.mode' is the current webpack mode (development | production)
 * @returns object
 */
module.exports = (env, argv) => {
    let isProduction = (argv.mode === 'production');

    let config = {
        context: path.resolve(__dirname, "src"),

        entry: {
            'spectre': "./spectre.js",
            'spectre.bundle': "./bundle.js",
            'docs': [
                "./docs/app.js",
                "./docs/style.scss",
            ],
        },

        devtool: "inline-source-map",
        devServer: {contentBase: "docs"},

        output: {
            path: path.resolve(__dirname, "dist"),
            publicPath: "../",
            filename: (bundle) => {
                let id = bundle.chunk.name;

                return (id !== 'docs')
                    ? "[name].js"
                    : "../docs/assets/[name].js";
            }
        },

        plugins: [
            new MiniCssExtractPlugin({
                filename: "../docs/assets/style.css"
            }),

            ...pages.map((page) => {
                return new HtmlWebpackPlugin({
                    filename: `../docs/${page}.html`,
                    template: `../pug/pages/${page}.pug`,
                    inject: false,
                })
            }),
        ],

        optimization: {
            minimizer: [
                new OptimizeCSSAssetsPlugin(),
                new TerserPlugin(),
            ],
        },

        module: {
            rules: [
                {
                    test: /\.pug$/,
                    use: ['pug-loader'],
                },
                {
                    test: /\.(sa|sc|c)ss$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        "css-loader",
                        "sass-loader"
                    ],
                },
            ]
        },
    };

    if (isProduction) {
        config.plugins.push(
            new CleanWebpackPlugin()
        );
    }

    return config;
};

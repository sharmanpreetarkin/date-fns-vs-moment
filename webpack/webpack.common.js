const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const {
    IgnorePlugin,
    DefinePlugin,
    ContextReplacementPlugin,
} = require('webpack');
const {
    ModuleConcatenationPlugin,
} = require('webpack').optimize;

module.exports = (options) => {
    return {
        entry: {
            bundle: './source/index.js',
        },
        output: {
            path: `${process.cwd()}/${options.buildFolder}`,
            filename: options.isProduction ?
                './js/[name]-[chunkhash].js' :
                './js/[name].js',
            chunkFilename: options.isProduction ?
                './js/[id].chunk-[chunkhash].js' :
                './js/[id].chunk.js',
            publicPath: '/',
        },
        resolve: {
            extensions: ['.js', '.jsx'],
        },
        plugins: [
            new ModuleConcatenationPlugin(),

            new IgnorePlugin(/regenerator|nodent|js-beautify/, /ajv/),

            new DefinePlugin({
                ENV: {production: options.isProduction},
            }),

            new ContextReplacementPlugin(/moment[/\\]locale$/, /en/),

            new HtmlWebpackPlugin({
                template: './source/index.ejs',
                filename: './index.html',
                appVersion: options.appVersion,
            }),

            new CleanWebpackPlugin([options.buildFolder], {
                verbose: true,
                dry: false,
                root: process.cwd(),
                exclude: ['.gitignore'],
            }),
        ],
    };
};
const { DefinePlugin } = require('webpack');
const WebpackChunkHash = require('webpack-chunk-hash');
const webpackCommonFactory = require('./webpack.common');

module.exports = (options) => {
    const webpackCommon = webpackCommonFactory(options);
    return Object.assign(webpackCommon, {
        mode: 'production',

        optimization: {
            minimize: true,
            splitChunks: {
                chunks: 'all',
                minSize: 30000,
                maxSize: 0,
                minChunks: 1,
                maxAsyncRequests: 5,
                maxInitialRequests: 3,
                name: true,
                cacheGroups: {
                    default: {
                        minChunks: 2,
                        priority: -20,
                        reuseExistingChunk: true,
                    },
                    vendors: {
                        test: /[\\/]node_modules[\\/]/,
                        priority: -10,
                    },
                },
            },
        },

        plugins: webpackCommon.plugins.concat([
            new WebpackChunkHash(),

            new DefinePlugin({
                'process.env': {
                    NODE_ENV: '"production"',
                },
            }),
        ]),
    });
};
const webpackCommonFactory = require('./webpack.common');

module.exports = (options) => {
    const webpackCommon = webpackCommonFactory(options);
    return Object.assign(webpackCommon, {
        mode: 'development',
        devtool: 'source-map',
        optimization: {
            minimize: false,
        },
        devServer: {
            host: '0.0.0.0',
            port: 8080,
            contentBase: `${options.buildFolder}/`,
            historyApiFallback: true,
        },
        plugins: [
            ...webpackCommon.plugins,
        ],
    });
};
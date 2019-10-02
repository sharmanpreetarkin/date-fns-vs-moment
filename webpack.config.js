const packageFile = require('./package.json');

const isProduction = process.env.NODE_ENV === 'production';
const configOptions = {
    buildFolder: './build',
    appVersion: packageFile.version,
    extractCssFile: true,
    isProduction,
};

const webpackConfig = isProduction ?
    require('./webpack/webpack.prod')(configOptions) :
    require('./webpack/webpack.dev')(configOptions);

module.exports = webpackConfig;
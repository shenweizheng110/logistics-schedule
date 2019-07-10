const config = require('./webpack.config.dev');
const WebpackParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

config.mode = 'production';

config.module.rules[3].use = [MiniCssExtractPlugin.loader,'less-loader','css-loader'];

config.optimization.minimizer = [
    new  WebpackParallelUglifyPlugin({
        uglifyJS: {
            output: {
                beautify: false, // 是否删除可读性较强的代码
                comments: false  // 是否保留代码中的注释
            },
            compress: {
                drop_console: true, // 删除代码中的console语句
            }
        }
    }),
    new OptimizeCssAssetsWebpackPlugin({
        assetNameRegExp: /\.css$/g,
        cssProcessor: require('cssnano'),
        cssProcessorOptions: {
            safe: true,
            autoprefixer: { disable: true }, // 这里是个大坑，稍后会提到
            mergeLonghand: false,
            discardComments: {
              removeAll: true // 移除注释
            }
        },
        canPrint: true
    })
]

config.plugins.push(new MiniCssExtractPlugin({
    filename: 'style/css/[name].css'
}))

module.exports = config;
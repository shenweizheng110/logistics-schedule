const path = require('path');
const HappyPack = require('happypack');
const os = require('os');
const threadPool = HappyPack.ThreadPool({size: os.cpus().length});
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');

const config = {
    mode: 'development',
    devtool: 'source-map',
    entry: {
        console: path.resolve(__dirname,'src/console'),
        login: path.resolve(__dirname,'src/login')
    },
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'js/[name].js',
        publicPath: '/'
    },
    resolve: {
        modules: [path.resolve(__dirname,'node_modules'),path.resolve(__dirname,'src')],
        extensions: ['.js','.jsx','.tsx']
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        compress: true,
        host: 'localhost',
        port: 8080,
        hot: true,
        publicPath: '/',
        historyApiFallback: {
            rewrites: [
                { from: /^\/$/, to: '/console.html' },
                { from: /^\/console/, to: '/console.html' },
                { from: /^\/login/, to: '/login.html'}
            ]
        }
    },
    stats: {
        children: false
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                common: {
                    name: 'common',
                    chunks: 'all',
                    minChunks: 2,
                    minSize: 0
                }
            }
        }
    },
    module: {
        rules: [{
            test: /\.(js|jsx|tsx)$/,
            exclude: /node_modules/,
            loader: 'happypack/loader?id=happyBabel'
        },{
            test: /\.js$/,
            use: ["source-map-loader"],
            exclude: /node_modules/,
            enforce: "pre"
        },{
            test: /\.(png|jpg|gif)$/,
            loader: 'url-loader?limit=8192'
        },{
            test: /\.(svg|ttf|woff|eot)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: 'style/css/[hash].[ext]',
                    publicPath: '../../'
                }
            }]
        },{
            test: /\.(less|css)$/i,
            use: ['style-loader','css-loader','less-loader']
        }]
    },
    plugins: [
        new HappyPack({
            id: 'happyBabel',
            threads: 3,
            loaders: [{
                loader: 'babel-loader?cacheDirectory=true'
            }],
            threadPool: threadPool,
            verbose: true
        }),
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('./vendor-manifest.json')
        }),
        new HtmlWebpackPlugin({
            title: '物流调度',
            favicon: path.resolve(__dirname,'public/favicon.ico'),
            template: path.resolve(__dirname, 'public/console.html'),
            filename: path.resolve(__dirname, 'dist/console.html'),
            excludeChunks: ['login'],
            hash: true,
        }),
        new HtmlWebpackPlugin({
            title: '登录',
            favicon: path.resolve(__dirname,'public/favicon.ico'),
            template: path.resolve(__dirname, 'public/login.html'),
            filename: path.resolve(__dirname, 'dist/login.html'),
            excludeChunks: ['console'],
            hash: true,
        }),
        new HtmlWebpackIncludeAssetsPlugin({
            assets: ['js/vendor.js'],
            append: false,
            hash: true
        }),
        new webpack.DefinePlugin({
            QINIU: "'http://wechat.shenweini.cn/'",
            SERVICE: "'http://localhost:3000'"
        })
    ]
}

module.exports = config;
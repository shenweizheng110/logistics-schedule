const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'production',
    entry: {
        vendor: [
            'axios',
            'react',
            'react-dom',
            'react-router-dom',
            '@babel/polyfill',
            'antd',
            'less'
        ]
    },
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'js/vendor.js',
        library: 'global_vendor'
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.join(__dirname,'vendor-manifest.json'),
            name: 'global_vendor',
            context: __dirname
        })
    ]
}
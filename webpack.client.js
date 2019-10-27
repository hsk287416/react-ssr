const path = require('path');
const merge = require('webpack-merge');
const config = require('./webpack.base');

const clientConfig = {
    target: 'node',
    mode: "development",
    entry: './src/client/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    
}

module.exports = merge(config, clientConfig);

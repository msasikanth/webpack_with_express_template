var path = require('path');

var BUILD_DIR = path.resolve(__dirname, './build');
var APP_DIR = path.resolve(__dirname, './src/client');

module.exports = [{
    entry: APP_DIR + '\/styles\/app.scss',
    output: {
        // This is necessary for webpack to compile
        // But we never use style-bundle.js
        filename: 'style-bundle.js',
        path: BUILD_DIR
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: 'bundle.css',
                        path: BUILD_DIR
                    }
                },
                {loader: 'extract-loader'},
                {loader: 'css-loader'},
                {
                    loader: 'sass-loader',
                    options: {
                        includePaths: ['./node_modules']
                    }
                }
            ]
        }]
    }
}];

module.exports.push({
    entry: APP_DIR + "\/index.js",
    output: {
        filename: "bundle.js",
        path: BUILD_DIR
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            }
        }]
    }
});
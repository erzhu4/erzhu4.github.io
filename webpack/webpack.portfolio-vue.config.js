var webpack = require('webpack');
var path = require('path');

var bootstrapModule = {
    entry: [
        './bootstrap.js'
    ],

    output: {
        filename: 'bootstrap.js',
        path: path.join(__dirname, '../js')
    },

    module : {
        loaders : [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    }
};

var vueModule = {
    entry: [
        './assets/portfolio-vue.js'
    ],

    output: {
        filename: 'portfolio-vue.js',
        path: path.join(__dirname, '../js')
    },

    module : {
        loaders : [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test : /\.vue$/,
                loader : 'vue-loader'
            }
        ]
    }
};

module.exports = [bootstrapModule,vueModule];
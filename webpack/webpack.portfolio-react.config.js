var webpack = require('webpack');
var path = require('path');

var reactModule = {

    entry: [
        './resources/assets/jsx/portfolio-react.jsx'
    ],

    output: {
        filename: 'portfolio-react.js',
        path: path.join(__dirname, '../public/portfolio-react/js')
    },

    module : {
        loaders : [
            {
                test : /\.jsx?/,
                loader : 'babel-loader'
            }
        ]
    }

};

module.exports = [reactModule];
var path = require('path');

module.exports = {
    entry: {
        main: './dist/js/main.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '../dist/js/',
        filename: 'js/[name].bundle.js',
        chunkFilename: 'js/[id].bundle.js'
    }
};
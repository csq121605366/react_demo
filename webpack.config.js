
const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry:'./src/index.js',
    output:{
        path:__dirname+'/src/',
        filname:'bundle.js'
    }
}
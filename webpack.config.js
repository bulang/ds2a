const { resolve } = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode:'development',
    entry:resolve(__dirname,'src/index.js'),
    output:{
        filename:'index.js',
        path:resolve(__dirname,'dist')
    },
    module:{

    },
    plugins:[
        new CleanWebpackPlugin({
            cleanStaleWebpackAssets:false
        }),
        new HtmlWebpackPlugin({
            template:resolve(__dirname,'src/templete/index.html')
        })
    ],
    devServer:{
        contentBase:resolve(__dirname,'dist'),
        port:3000,
        open:true,
        compress:true
    }
}
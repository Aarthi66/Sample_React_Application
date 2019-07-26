const path = require ("path");
const webpack =require("webpack");

module.exports ={
    entry : ["./src/index.js"],

    output : {
        path: path.resolve(__dirname,"dist"),
        filename : "js/bundle.js"
    },
    
    devServer : {
      contentBase : "./dist",
    },
    module :{
        rules :[
            {
                test: /\.(js|jsx)$/,          
                exclude: /node_modules/,   
                loaders: [
                    'babel-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            sourceMap: true
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
      }
}
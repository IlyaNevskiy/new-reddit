const path =  require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');


const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV == 'development';
const IS_PROD = NODE_ENV == 'production';
const GLOBAL_CSS_REGEXP = /\.global\.css$/;

function setupDevtool(){
    if(IS_DEV) return 'eval';
    if(IS_PROD) return false;
}


module.exports={
    mode: NODE_ENV ? NODE_ENV : 'development',
    entry: path.resolve(__dirname, 'src/index.jsx'),
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'index.js',
        publicPath: '/'
    },
    resolve:{
        extensions:['.js','.jsx','.ts','.tsx', '.json']
    },
    module:{
        rules:[{
            test: /\.[tj]sx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        },
        {
            test: /\.css$/,
            use: [
                'style-loader' ,
                {
                    loader: 'css-loader',
                    options:{
                        modules: {
                            mode: 'local',
                            localIdentName: '[name]__[local]--[hash:base64:5]',
                        },
                    }
                },
            ],
            exclude: GLOBAL_CSS_REGEXP,
        },
        {
            test: GLOBAL_CSS_REGEXP,
            use: ['style-loader','css-loader']
        }

    ]
    },
    plugins:[
        new HTMLWebpackPlugin({ template: path.resolve(__dirname, 'index.html')})
    ],
    devServer:{
        port: 3000,
        open: true,
        hot: IS_DEV,
        historyApiFallback: true,
    },
    devtool: setupDevtool(),
};
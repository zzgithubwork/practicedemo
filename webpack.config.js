//导入http中path
const path = require('path')

// 导入webpack 热更新的第二步
const webpack = require('webpack')
// 导入html-webpack-plugin的插件用于在内存中生成bundle.js文件 
 const htmlWebpackPlugin = require('html-webpack-plugin')
 // vue加载器
 const VueLoaderPlugin = require('vue-loader/lib/plugin'); 
module.exports = {
     entry: path.join(__dirname,'./src/main.js'),
     output:{
        path:path.join(__dirname,'./dist'),
        filename:'bundle.js'
     },
     resolve:{
        alias:{ //别名
            
        },
        extensions:['.js','.vue'] //import 时不用加这些后缀名
     },
     devServer:{ //webpack-dev-server的第二种配置方式
         open: true,
         port:3000,
         contentBase:'src',
         hot:true  //开启热更新的第一步
     },
     module:{ //第三方loader
         rules:[
            { test: /\.css$/, use:['style-loader','css-loader']},//需要安装 css-loader
            {test: /\.less$/,use:['style-loader','css-loader','less-loader']}, // less less-loader
            {test: /\.scss$/,use:['style-loader','css-loader','sass-loader']}, // sass-loade node-sass
            {test: /\.(jpg|png|gif|bmp|jpeg)$/, use:'url-loader?limit=4000&name=images/[name]-[hash:5].[ext]'},
             // url-loader file-loader
            {test: /\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader'}, //处理字体文件
            {test:/\.js$/, use:'babel-loader',exclude:/node_modules/}, //exclude排除node_modules中的包
            {test:/\.vue$/,use:'vue-loader'}
         ]
     },
     plugins:[  
        new webpack.HotModuleReplacementPlugin(),//new关于热更新的模块对象 热更新的第三步
        new htmlWebpackPlugin({ // 
            template:path.join(__dirname,'./src/index.html'),
            filename:'index.html' // 名称一定要是index.html
        }),
        new VueLoaderPlugin(), // vue加载器
     ],
}
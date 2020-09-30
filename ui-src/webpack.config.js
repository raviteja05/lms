const path=require('path')
const webpack = require('webpack')
const { config } = require('process')

module.exports={
    entry:{
        exam:'./src/pages/Exam/index.js',
        "create-exam":'./src/pages/CreateExam/index.js',
        "create-question":'./src/pages/CreateQuestion/index.js',
        "bulk-upload":'./src/pages/UploadQuestions/index.js',
        login:'./src/pages/Login/index.js',
        register:'./src/pages/Register/index.js',
        vendor:['react','react-dom','redux','redux-thunk','redux-form','axios','popper.js','jquery','bootstrap']

    },
    output:{
        path:path.join(__dirname,'public','js','dist'),
        filename:"[name].bundle.js"
    },
    module: {
      rules: [
          {
              test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              use: [{
                  loader: 'babel-loader',
                  options: { presets: ['@babel/preset-react', '@babel/preset-env'] }
              }]
          },
          {
            test:/\.css$/,
            exclude: /node_modules/,
            use:['style-loader','css-loader']

          }
        ]
          
      },
      optimization: {
        splitChunks: {
          chunks: 'async',
          minSize: 20000,
          maxSize: 0,
          minChunks: 1,
          maxAsyncRequests: 30,
          maxInitialRequests: 30,
          automaticNameDelimiter: '~',
          enforceSizeThreshold: 50000,
          cacheGroups: {
            defaultVendors: {
              test: /[\\/]node_modules[\\/]/,
              priority: -10
            },
            default: {
              minChunks: 2,
              priority: -20,
              reuseExistingChunk: true
            }
          }
        }
      },

      devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        port: 9000
      }
}
const path=require('path')

module.exports={
    entry:{
        exam:'./src/pages/Exam/index.js',
        "create-exam":'./src/pages/CreateExam/index.js',
        "create-question":'./src/pages/CreateQuestion/index.js',
        "bulk-upload":'./src/pages/UploadQuestions/index.js',
        login:'./src/pages/Login/index.js',
        register:'./src/pages/Register/index.js'

    },
    output:{
        path:path.join(__dirname,'public','js','dist'),
        filename:"[name].bundle.js"
    },
    module: {
      rules: [
          {
              test: /\.js$/,
              exclude: /node_modules/,
              use: [{
                  loader: 'babel-loader',
                  options: { presets: ['@babel/preset-react', '@babel/preset-env'] }
              }]
          }
        ]
          
      },
      devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        port: 9000
      }
}
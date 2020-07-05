const path = require('path');

module.exports={
    resolve:{
        extensions:['.js','.jsx']
    },
    entry:'./src/client/index',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist')
    },
    module:{
        rules: [
            { test: /.jsx?$/,exclude: /node_modules/,use: 'babel-loader'},
            { test: /.scss?$/,exclude: /node_modules/,
              use: [
                // css-loader
                {
                  loader: 'css-loader',
                  options: {
                    modules: true
                  }
                },
                // sass-loader
                { loader: 'sass-loader' }
              ]}
        ]
    }
}
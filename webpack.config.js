var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    output: {
        filename: 'my-first-webpack.bundle.js'
      },
    resolve: {
        extensions: ['.js', '.jsx', '.css']
    },
    module: {
        rules: [
             {test: /\.js$/ , loader:'babel-loader', exclude: '/node_modules/'},
            { test: /\.jsx$/, loader: 'babel-loader', exclude: '/node_modules/' }, 
            { test: /\.css$/i, loader: ["style-loader", "css-loader"] },
            { test: /\.json5$/i, loader: 'json5-loader', type: 'javascript/auto', },
            { test: /\.html$/i, loader: 'html-loader' },
            { test: /\.txt$/, use: 'raw-loader' },
    //{ test: /\.html$/, use: 'markup-inline-loader' },
         /*    {test: /\.html$/, use: [ 'html-loader',
              {
                loader: 'posthtml-loader',/* 
                options: {
                  ident: 'posthtml',
                  parser: 'PostHTML Parser',
                  plugins: [
                    
                    require('posthtml-plugin')(options)
                  ]
                } 
              }
            ]
            } */
            
                //test: /\.jsx?$/,
               // loader: 'babel-loader'
           
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html'
    })],
    devServer: {
        historyApiFallback: true
    },
    externals: {
        // global app config object
        config: JSON.stringify({
           // apiUrl: 'http://localhost:4000'
        })
    }
}
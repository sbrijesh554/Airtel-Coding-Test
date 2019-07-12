var config = {
    entry: './main.js',
    output: {
       path:'/',
       filename: 'index.js',
    },
    devServer: {
       inline: true,
       port: 8080,
       historyApiFallback: true
    },
    mode: 'development',
    devtool: "#eval-source-map",
    module: {
       rules: [
          {
             test: /\.jsx?$/,
             exclude: /node_modules/,
             loader: 'babel-loader',
             query: {
                presets: ['es2015', 'react', 'stage-2']
             }
          },
          { test: /\.css$/, loader: "style-loader!css-loader" },
          {
            test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
            loader: 'file-loader',
          }
       ]
    }
 }
 module.exports = config;
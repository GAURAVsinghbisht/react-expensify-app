const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = (env) =>{
  const isProduction = env === 'production';
  const CssExtract = new ExtractTextPlugin("styles.css");  // the name of the css file where we want to extract css
  return {
    entry: './src/app.js',
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }, {
        test: /\.s?css$/,
        use : CssExtract.extract({
          use: [
            // 'style-loader',   // it is used for inline loading

            {
              loader: 'css-loader',
              options:{
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options:{
                sourceMap: true
              }
            }

          ]
        })
      }]
    },
    plugins: [
      CssExtract
    ],
    // devtool: isProduction ? 'source-map':'cheap-module-eval-source-map',
    devtool: isProduction ? 'source-map':'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true
    }
  }
}

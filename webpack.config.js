const path = require('path');
const BundleAnalyzerPlugin = 
    require('webpack-bundle-analyzer')
        .BundleAnalyzerPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode:"production",
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].bundle.js',
      },
      module: {
        rules: [
          {
            test: /\.html$/i,
            loader: "html-loader",
            options: {
              // Disables attributes processing
              sources: false,
            },
          },
        ],
      },
    plugins: [
        new BundleAnalyzerPlugin(),
        new HtmlWebpackPlugin({
          filename: "Fashion.html",
          template: "./src/Fashion.html",
          inject: 'body'
        }),
        new HtmlWebpackPlugin({
          filename: "Nature.html",
          template: "./src/Nature.html",
          inject: 'body'
        }),
        new HtmlWebpackPlugin({
          filename: "Film.html",
          template: "./src/Film.html",
          inject: 'body'
        }),
        new HtmlWebpackPlugin({
          filename: "People.html",
          template: "./src/People.html",
          inject: 'body'
        }),
        new HtmlWebpackPlugin({
          filename: "Technology.html",
          template: "./src/Technology.html",
          inject: 'body'
        }),
    ],
    optimization: {
        splitChunks: {
          // include all types of chunks
          chunks: 'all',
        },
      },    
    watch: true,
};
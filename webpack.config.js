const path = require('path');
const BundleAnalyzerPlugin = 
    require('webpack-bundle-analyzer')
        .BundleAnalyzerPlugin;

module.exports = {
    mode:"production",
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].bundle.js',
      },
    plugins: [
        new BundleAnalyzerPlugin()
    ],
    optimization: {
        splitChunks: {
          // include all types of chunks
          chunks: 'all',
        },
      },    
    watch: true,
};
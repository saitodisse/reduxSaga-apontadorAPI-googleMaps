var webpack = require('webpack');

module.exports = {
  module: {
    loaders: [
      {
        test: /\.css?$/,
        loader: 'style!css?modules&localIdentName=[name]---[local]---[hash:base64:5]'
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          "presets": ["react", "es2015", "stage-0", "react-hmre"]
        }
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      }
    ],
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': process.env.NODE_ENV,
        'process.env.CLIENT_ID': process.env.CLIENT_ID,
        'process.env.CLIENT_SECRET': process.env.CLIENT_SECRET,
      })
    ]
  },
};

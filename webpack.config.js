module.exports = {
    entry: './app/app.ts',
    devtool: 'inline-source-map',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node-modules/
        }
      ]
    },
    /*which files to use for module resolution*/
    resolve: {
      extensions: [ '.tsx', '.ts', '.js' ]
    },
    output: {
      filename: 'bundle.js'
    },
    devServer: {
      inline: false  /*prevents the browser to automatically refreshing when new bundles are produced - only for the purpose of this project */
    }
  };
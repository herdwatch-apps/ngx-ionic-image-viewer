const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        loader: '@jsdevtools/coverage-istanbul-loader',
        options: { esModules: true },
        enforce: 'post',
        include: [
          // path.join(__dirname, 'apps/demo'),
          path.join(__dirname, 'libs/ngx-ionic-image-viewer/src/lib')
        ],
        exclude: [/\.(cy|spec)\.ts$/, /node_modules/],
      },
    ],
  },
};

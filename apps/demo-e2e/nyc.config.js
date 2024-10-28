module.exports = {
  'report-dir': '../../coverage-e2e/libs/ngx-ionic-image-viewer/coverage',
  'temp-dir': '../../coverage-e2e/libs/ngx-ionic-image-viewer/.nyc_output',
  reporter: ['lcov', 'clover', 'json', 'json-summary'],
  extension: ['.js', '.cjs', '.mjs', '.ts', '.tsx', '.jsx'],
  excludeAfterRemap: false
}

module.exports = {
  extends: '@istanbuljs/nyc-config-typescript',
  'cache-dir': require('path').join(__dirname, 'node_modules', '.cache', 'nyc'),
  'report-dir': require('path').join(__dirname, 'coverage'),
  'temp-dir': require('path').join(__dirname, '.nyc_output'),
  reporter: ['lcov', 'clover', 'json', 'json-summary'],
  extension: ['.js', '.cjs', '.mjs', '.ts', '.tsx', '.jsx'],
  excludeAfterRemap: false
}

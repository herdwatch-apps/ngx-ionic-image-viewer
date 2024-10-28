const esModules = [
  '@angular',
  '@ionic',
  'rxjs',
].join('|');

export default {
  displayName: 'ngx-ionic-image-viewer',
  preset: '../../jest.preset.js',
  setupFilesAfterEnv: ['<rootDir>/src/setup-jest.ts'],
  globals: {},
  coverageDirectory: '../../coverage/libs/ngx-ionic-image-viewer',
  transform: {
    '^.+\\.(ts|mjs|js|html)$': [
      'jest-preset-angular',
      {
        tsconfig: '<rootDir>/tsconfig.spec.json',
        stringifyContentPathRegex: '\\.(html|svg)$',
      },
    ],
  },
  transformIgnorePatterns: [`<rootDir>/node_modules/(?!${esModules})`],
  snapshotSerializers: [
    'jest-preset-angular/build/serializers/no-ng-attributes',
    'jest-preset-angular/build/serializers/ng-snapshot',
    'jest-preset-angular/build/serializers/html-comment',
  ],
};

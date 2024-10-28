import 'jest-preset-angular/setup-jest';

Object.defineProperty(window, 'matchMedia', {
    value : (query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })
  }
);

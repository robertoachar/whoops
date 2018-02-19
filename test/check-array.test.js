const lib = require('../src/whoops');

describe('ARRAY Tests', () => {
  test('checkArray()', (done) => {
    // undefined
    expect(() => {
      lib.checkArray(undefined);
    }).toThrow('invalid array');

    // null
    expect(() => {
      lib.checkArray(null);
    }).toThrow('invalid array');

    // bool
    expect(() => {
      lib.checkArray(true);
    }).toThrow('invalid array');

    // number
    expect(() => {
      lib.checkArray(0);
    }).toThrow('invalid array');

    // string
    expect(() => {
      lib.checkArray('string');
    }).toThrow('invalid array');

    // custom message
    expect(() => {
      lib.checkArray(undefined, 'custom message');
    }).toThrow('custom message');

    done();
  });

  test('checkArrayEmpty()', (done) => {
    // empty array
    expect(() => {
      lib.checkArrayEmpty([]);
    }).toThrow('empty array');

    // custom message
    expect(() => {
      lib.checkArrayEmpty([], 'custom message');
    }).toThrow('custom message');

    done();
  });

  test('Valid array', (done) => {
    const result = lib.checkArrayEmpty([0]);
    expect(result).toBe(true);

    done();
  });
});

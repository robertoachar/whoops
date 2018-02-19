const lib = require('../src/whoops');

describe('BOOLEAN Tests', () => {
  test('checkBoolean()', (done) => {
    // undefined
    expect(() => {
      lib.checkBoolean(undefined);
    }).toThrow('invalid boolean');

    // null
    expect(() => {
      lib.checkBoolean(null);
    }).toThrow('invalid boolean');

    // number
    expect(() => {
      lib.checkBoolean(0);
    }).toThrow('invalid boolean');

    // string
    expect(() => {
      lib.checkBoolean('string');
    }).toThrow('invalid boolean');

    // custom message
    expect(() => {
      lib.checkBoolean(undefined, 'custom message');
    }).toThrow('custom message');

    done();
  });

  test('Valid bool', (done) => {
    let result;

    result = lib.checkBoolean(true);
    expect(result).toBe(true);

    result = lib.checkBoolean(false);
    expect(result).toBe(true);

    done();
  });
});

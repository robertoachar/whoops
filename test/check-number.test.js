const lib = require('../src/whoops');

describe('NUMBER Tests', () => {
  test('checkNumber()', (done) => {
    // undefined
    expect(() => {
      lib.checkNumber(undefined);
    }).toThrow('invalid number');

    // null
    expect(() => {
      lib.checkNumber(null);
    }).toThrow('invalid number');

    // string
    expect(() => {
      lib.checkNumber('string');
    }).toThrow('invalid number');

    // bool
    expect(() => {
      lib.checkNumber(true);
    }).toThrow('invalid number');

    // custom message
    expect(() => {
      lib.checkNumber(undefined, 'custom message');
    }).toThrow('custom message');

    done();
  });

  test('checkNumberEmpty()', (done) => {
    // empty number
    expect(() => {
      lib.checkNumberEmpty(0);
    }).toThrow('empty number');

    // custom message
    expect(() => {
      lib.checkNumberEmpty(0, 'custom message');
    }).toThrow('custom message');

    done();
  });

  test('Valid number', (done) => {
    let result;

    result = lib.checkNumber(0);
    expect(result).toBe(true);

    result = lib.checkNumberEmpty(1);
    expect(result).toBe(true);

    done();
  });
});

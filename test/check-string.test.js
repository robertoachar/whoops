const lib = require('../src/whoops');

describe('STRING Tests', () => {
  test('checkString()', (done) => {
    // undefined
    expect(() => {
      lib.checkString(undefined);
    }).toThrow('invalid string');

    // null
    expect(() => {
      lib.checkString(null);
    }).toThrow('invalid string');

    // number
    expect(() => {
      lib.checkString(0);
    }).toThrow('invalid string');

    // bool
    expect(() => {
      lib.checkString(true);
    }).toThrow('invalid string');

    // custom message
    expect(() => {
      lib.checkString(undefined, 'custom message');
    }).toThrow('custom message');

    done();
  });

  test('checkStringEmpty()', (done) => {
    // empty string
    expect(() => {
      lib.checkStringEmpty('');
    }).toThrow('empty string');

    // string with spaces
    expect(() => {
      lib.checkStringEmpty('   ');
    }).toThrow('empty string');

    // custom message
    expect(() => {
      lib.checkStringEmpty('', 'custom message');
    }).toThrow('custom message');

    done();
  });

  test('Valid string', (done) => {
    let result;

    result = lib.checkString('');
    expect(result).toBe(true);

    result = lib.checkStringEmpty('string');
    expect(result).toBe(true);

    done();
  });
});

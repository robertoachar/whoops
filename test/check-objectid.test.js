const lib = require('../src/whoops');

describe('OBJECTID Tests', () => {
  test('checkObjectId()', (done) => {
    // undefined
    expect(() => {
      lib.checkObjectId(undefined);
    }).toThrow('invalid objectid');

    // null
    expect(() => {
      lib.checkObjectId(null);
    }).toThrow('invalid objectid');

    // boolean
    expect(() => {
      lib.checkObjectId(true);
    }).toThrow('invalid objectid');

    // number
    expect(() => {
      lib.checkObjectId(0);
    }).toThrow('invalid objectid');

    // string
    expect(() => {
      lib.checkObjectId('');
    }).toThrow('invalid objectid');

    // objectid with wrong characters
    expect(() => {
      lib.checkObjectId('59669b2907b14208608d1c7$');
    }).toThrow('invalid objectid');

    // custom message
    expect(() => {
      lib.checkObjectId(undefined, 'custom message');
    }).toThrow('custom message');

    done();
  });

  test('Valid ObjectId', (done) => {
    const result = lib.checkObjectId('59669b2907b14208608d1c76');
    expect(result).toBe(true);

    done();
  });
});

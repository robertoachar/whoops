const lib = require('../src/whoops');

describe('ARRAY Tests', () => {

  test('checkArray()', (done) => {
    // undefined
    expect(() => {
      lib.checkArray(undefined);
    }).toThrow();

    // null
    expect(() => {
      lib.checkArray(null);
    }).toThrow();

    // bool
    expect(() => {
      lib.checkArray(true);
    }).toThrow();

    // number
    expect(() => {
      lib.checkArray(0);
    }).toThrow();

    // string
    expect(() => {
      lib.checkArray('string');
    }).toThrow();

    done();
  });

  test('checkArrayEmpty()', (done) => {
    // empty array
    expect(() => {
      lib.checkArrayEmpty([]);
    }).toThrow();

    done();
  });

  test('Valid array', (done) => {
    const result = lib.checkArrayEmpty([0]);
    expect(result).toBe(true);

    done();
  });
});

describe('BOOL Tests', () => {

  test('checkBoolean()', (done) => {
    // undefined
    expect(() => {
      lib.checkBoolean(undefined);
    }).toThrow();

    // null
    expect(() => {
      lib.checkBoolean(null);
    }).toThrow();

    // number
    expect(() => {
      lib.checkBoolean(0);
    }).toThrow();

    // string
    expect(() => {
      lib.checkBoolean('string');
    }).toThrow();

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

describe('NUMBER Tests', () => {

  test('checkNumber()', (done) => {
    // undefined
    expect(() => {
      lib.checkNumber(undefined);
    }).toThrow();

    // null
    expect(() => {
      lib.checkNumber(null);
    }).toThrow();

    // string
    expect(() => {
      lib.checkNumber('string');
    }).toThrow();

    // bool
    expect(() => {
      lib.checkNumber(true);
    }).toThrow();

    done();
  });

  test('checkNumberEmpty()', (done) => {
    // empty number
    expect(() => {
      lib.checkNumberEmpty(0);
    }).toThrow();

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

describe('OBJECTID Tests', () => {

  test('checkObjectId()', (done) => {
    // undefined
    expect(() => {
      lib.checkObjectId(undefined);
    }).toThrow();

    // null
    expect(() => {
      lib.checkObjectId(null);
    }).toThrow();

    // boolean
    expect(() => {
      lib.checkObjectId(true);
    }).toThrow();

    // number
    expect(() => {
      lib.checkObjectId(0);
    }).toThrow();

    // string
    expect(() => {
      lib.checkObjectId('');
    }).toThrow();

    // objectid with wrong characters
    expect(() => {
      lib.checkObjectId('59669b2907b14208608d1c7$');
    }).toThrow();

    done();
  });

  test('Valid ObjectId', (done) => {
    const result = lib.checkObjectId('59669b2907b14208608d1c76');
    expect(result).toBe(true);

    done();
  });

});

describe('STRING Tests', () => {

  test('checkString()', (done) => {
    // undefined
    expect(() => {
      lib.checkString(undefined);
    }).toThrow();

    // null
    expect(() => {
      lib.checkString(null);
    }).toThrow();

    // number
    expect(() => {
      lib.checkString(0);
    }).toThrow();

    // bool
    expect(() => {
      lib.checkString(true);
    }).toThrow();

    done();
  });

  test('checkStringEmpty()', (done) => {
    // empty string
    expect(() => {
      lib.checkStringEmpty('');
    }).toThrow();

    // string with spaces
    expect(() => {
      lib.checkStringEmpty('   ');
    }).toThrow();

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

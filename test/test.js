'use strict';

const lib = require('../src');

describe('TESTS', () => {

  test('Basic test', (done) => {
    lib.whoops((err, message) => {
      expect(err).toBeNull();
      expect(message).toBe('It works!');

      done();
    });
  });

});

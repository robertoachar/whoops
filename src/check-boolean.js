const { whoops } = require('./whoops-error');

module.exports.checkBoolean = (value, message = 'invalid boolean') => {
  if (typeof value !== 'boolean') {
    whoops(message);
  }

  return true;
};

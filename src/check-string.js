const { whoops } = require('./whoops-error');

module.exports.checkString = (value, message = 'invalid string') => {
  if (typeof value !== 'string') {
    whoops(message);
  }

  return true;
};

module.exports.checkStringEmpty = (value, message = 'empty string') => {
  this.checkString(value, message);

  if (value.trim() === '') {
    whoops(message);
  }

  return true;
};

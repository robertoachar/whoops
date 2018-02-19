const { whoops } = require('./whoops-error');

module.exports.checkArray = (value, message = 'invalid array') => {
  if (!Array.isArray(value)) {
    whoops(message);
  }

  return true;
};

module.exports.checkArrayEmpty = (value, message = 'empty array') => {
  this.checkArray(value, message);

  if (value.length <= 0) {
    whoops(message);
  }

  return true;
};

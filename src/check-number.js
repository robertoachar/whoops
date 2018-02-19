const { whoops } = require('./whoops-error');

module.exports.checkNumber = (value, message = 'invalid number') => {
  if (typeof value !== 'number') {
    whoops(message);
  }

  return true;
};

module.exports.checkNumberEmpty = (value, message = 'empty number') => {
  this.checkNumber(value, message);

  if (value === 0) {
    whoops(message);
  }

  return true;
};

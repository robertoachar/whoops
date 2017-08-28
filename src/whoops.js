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

module.exports.checkBoolean = (value, message = 'invalid boolean') => {
  if (typeof value !== 'boolean') {
    whoops(message);
  }

  return true;
};

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

module.exports.checkObjectId = (value, message = 'invalid objectid') => {
  const regex = new RegExp('^[0-9a-fA-F]{24}$');
  const match = value.match(regex);

  if (!match) {
    whoops(message);
  }

  return true;
};

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

function whoops(value) {
  const error = new Error();
  error.name = 'WhoopsError';
  error.message = value;

  throw error;
}

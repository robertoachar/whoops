const { checkString } = require('./check-string');
const { whoops } = require('./whoops-error');

module.exports.checkObjectId = (value, message = 'invalid objectid') => {
  checkString(value, message);

  const regex = new RegExp('^[0-9a-fA-F]{24}$');
  const match = value.match(regex);

  if (!match) {
    whoops(message);
  }

  return true;
};

module.exports.whoops = (message) => {
  const error = new Error();
  error.name = 'WhoopsError';
  error.message = message;

  throw error;
};

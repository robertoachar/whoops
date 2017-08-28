const whoops = require('./whoops');

module.exports = () => {
  return (req, res, next) => {
    req.whoops = whoops;
    next();
  };
};

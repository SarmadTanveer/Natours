module.exports = fn => {
  return (req, res, next) => {
    console.log('hey');
    fn(req, res, next).catch(next);
  };
};

module.exports = (options) => {
  return function (req, res, next) {
    console.log(req.method, req.path);
    next();
  }
}
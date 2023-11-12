const notFoundHandler = (req, res, next) => {
  const fullUrl = req.baseUrl + req.path;
  const err = new Error(`${fullUrl} isnt a valid resource`);
  err.statusCode = 404;
  next(err);
};

module.exports = notFoundHandler;


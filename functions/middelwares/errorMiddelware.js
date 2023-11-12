const errorMiddleware = (err, req, res, next) => {
  if (!err.statusCode) {
    err.statusCode = 500;
  }

  switch (err.statusCode) {
  case 422:
    res.status(err.statusCode).json({
      error: {
        code: err.statusCode,
        message: err.message,
        input: err.input,
      },
    });
    break;
  case 403:
    res.status(err.statusCode).json({
      error: {
        code: err.statusCode,
        message: 'Unauthorized',
      },
    });
    break;
  case 500:
    res.status(err.statusCode).json({
      error: {
        code: err.statusCode,
        message: 'Internal error',
      },
    });
    break;
  case 404:
    res.status(err.statusCode).json({
      error: {
        code: err.statusCode,
        message: err.message,
      },
    });
    break;
  default:
    break;
  }
};

module.exports = errorMiddleware;

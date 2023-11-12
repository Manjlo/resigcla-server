const { auth } = require('../firebase-admin/index');

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;
  if (typeof token === 'string' || token instanceof String) {
    auth()
      .verifyIdToken(token)
      .then((decodedToken) => {
        req.uid = decodedToken.uid;
        return next();
      })
      .catch((error) => {
        error.statusCode = 403;
        return next(error);
      });
  } else {
    const error = new Error('token is not a string');
    error.statusCode = 403;
    return next(error);
  }
};

module.exports = authMiddleware;


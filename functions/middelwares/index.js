const authMiddleware = require("./authMiddelware");
const errorMiddleware = require("./errorMiddelware");
const notFound = require("./404");


module.exports = {
  handlerAuth: authMiddleware,
  handlerError: errorMiddleware,
  handler404: notFound,
};

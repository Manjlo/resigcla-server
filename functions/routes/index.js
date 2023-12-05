const express = require("express");
const cors = require("cors");
const configCORS = require("./origins");
const { handlerAuth, handlerError, handler404 } = require("../middelwares");
const { USERS_PATH } = require("./paths");
const userRouter = require("./users");

const app = express();

// config server
app.use(cors(configCORS));
app.use(handlerAuth);
app.use(handlerError);


// routers
app.use(USERS_PATH, userRouter);


module.exports = app;


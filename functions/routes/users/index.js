const express = require('express');
const router = express.Router(); // eslint-disable-line new-cap
const { createUser, getUserById } = require("./controller");


router.post("/", createUser);
router.get("/:id", getUserById);


module.exports = router;

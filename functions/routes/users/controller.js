const dbUser = require("./database");
const validate = require("./models");

const createUser = async (req, res) => {
  try {
    console.log("hola");
    const { user } = req.body;
    const { error, value } = validate(user);
    if (!error) {
      const existsUser = await dbUser.getUserOnDb(user.id);
      if (existsUser.user) {
        res.status(422).json({
          message: "User already exists",
        });
      } else {
        const response = await dbUser.createUserOnDb(user);
        res.status(response.code).json({
          message: response.message,
          code: response.code,
        });
      }
    } else {
      console.log(error);
      res.status(422).json({
        message: error.message,
        input: error.details[0].path[0],
      });
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};


const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await dbUser.getUserOnDb(id);
    res.status(response.response.code).json({
      message: response.response.message,
      user: response.user,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createUser,
  getUserById,
};

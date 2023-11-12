const db = require('../../firebase-admin');
const { USERS_COLLECTION } = require('../../firebase-admin/firebasePaths');


const createUserOnDb = async (user) => {
  await db.databaseCreateValue(USERS_COLLECTION, user.uid, user);
  const response = { code: 200, message: 'User created' };
  return response;
};

const getUserOnDb = async (uid) => {
  const okResponse = { code: 200, message: 'User found' };
  const errorResponse = { code: 404, message: 'User not found' };
  const user = await db.databaseOnceValue(`${USERS_COLLECTION}/${uid}`);
  if (user.exists()) {
    return { user: user.val(), response: okResponse };
  } else {
    return { user: null, response: errorResponse };
  }
};


module.exports = {
  createUserOnDb,
  getUserOnDb,
};

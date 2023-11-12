const functions = require("firebase-functions");
const {initializeApp} = require("firebase-admin/app");
const app = require("./routes/");
const serviceAccount = require("./serviceAccountKey.json");

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//

initializeApp(serviceAccount);

exports.app = functions.runWith({ memory: "2GB", timeoutSeconds: 540 }).https.onRequest(app);

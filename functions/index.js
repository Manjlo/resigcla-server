const functions = require("firebase-functions");
const admin = require("firebase-admin");
const app = require("./routes/");
const serviceAccount = require("./serviceAccountKey.json");

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//

admin.initializeApp(
  {
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://vivid-pen-403105-default-rtdb.firebaseio.com/",
  },
);

exports.app = functions.runWith({ memory: "2GB", timeoutSeconds: 540 }).https.onRequest(app);

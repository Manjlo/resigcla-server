const functions = require("firebase-functions");

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
exports.holaMuchachones = functions.https.onRequest((request, response) => {
  functions.logger.info("Hola muchachones!", {structuredData: true});
  response.send("Tenemos server para resigcla! Direcatmente desde Firebase!");
});

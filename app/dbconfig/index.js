var admin = require("firebase-admin");

var serviceAccount = require("../../key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://project-ecommerce-1-default-rtdb.firebaseio.com"
});

const db = admin.firestore();

exports.userModel = db.collection("users");

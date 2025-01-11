var admin = require("firebase-admin");

var {configuration} = require("./constants");
admin.initializeApp({
  credential: admin.credential.cert(configuration),
  databaseURL: "https://project-ecommerce-1-default-rtdb.firebaseio.com"
});

const db = admin.firestore();

exports.userModel = db.collection("users");

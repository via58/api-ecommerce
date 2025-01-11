"use strict";

var express = require('express');
var userRoutes = require('./app/router/api');
var app = express();
var dotenv = require('dotenv');

// Set path to .env file 
dotenv.config({
  path: './.env'
});
var port = process.env.PORT || 3000;
app.use(express.json());
app.use("/api/users", userRoutes);
app.get('/', function (req, res) {
  res.send('Welcome to the Ecommerce Express API');
});
app.listen(port, function () {
  console.log(" app listening on port ".concat(port));
});
module.exports = app;
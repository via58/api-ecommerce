"use strict";

var express = require('express');
var userRoutes = require('./router/api');
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
  res.send("\n    <!DOCTYPE html>\n    <html lang=\"en\">\n    <head>\n      <meta charset=\"UTF-8\">\n      <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n      <title>Colorful Page</title>\n      <style>\n        /* Reset styles */\n        * {\n          margin: 0;\n          padding: 0;\n          box-sizing: border-box;\n        }\n\n        /* Full-page setup */\n        body {\n          height: 100vh;\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          background: linear-gradient(to right, #ff7e5f, #feb47b); /* Colorful gradient background */\n          font-family: 'Arial', sans-serif;\n        }\n\n        /* Styling the centered text */\n        .centered-text {\n          font-size: 2em;\n          font-weight: bold;\n          color: #ffffff;\n          text-align: center;\n          text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3); /* Shadow for better readability */\n        }\n\n        .emoji {\n          color: #ff6347;\n        }\n      </style>\n    </head>\n    <body>\n      <div class=\"centered-text\">\n        <span class=\"emoji\">\u2764\uFE0F</span> Made with \u2764\uFE0F using Express.js\n      </div>\n    </body>\n    </html>\n  ");
});
app.listen(port, function () {
  console.log(" app listening on port ".concat(port));
});
module.exports = app;
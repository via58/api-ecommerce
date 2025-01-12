const express = require('express');
const userRoutes = require('./router/api');
const app = express();
const dotenv = require('dotenv');

// Set path to .env file 
dotenv.config({ path: './.env' });
const port = process.env.PORT || 3000
app.use(express.json());
app.use("/api/users", userRoutes);

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Colorful Page</title>
      <style>
        /* Reset styles */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        /* Full-page setup */
        body {
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(to right, #ff7e5f, #feb47b); /* Colorful gradient background */
          font-family: 'Arial', sans-serif;
        }

        /* Styling the centered text */
        .centered-text {
          font-size: 2em;
          font-weight: bold;
          color: #ffffff;
          text-align: center;
          text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3); /* Shadow for better readability */
        }

        .emoji {
          color: #ff6347;
        }
      </style>
    </head>
    <body>
      <div class="centered-text">
        <span class="emoji">❤️</span> Made with ❤️ using Express.js
      </div>
    </body>
    </html>
  `)
});

app.listen(port, () => {
  console.log(` app listening on port ${port}`)
})
module.exports = app;
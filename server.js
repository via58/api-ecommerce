const express = require('express');
const userRoutes = require('./app/router/api');
const app = express();
const dotenv = require('dotenv');

// Set path to .env file 
dotenv.config({ path: './.env' });
const port = process.env.PORT || 3000
app.use(express.json());
app.use("/api/users", userRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the Ecommerce Express API')
});

app.listen(port, () => {
  console.log(` app listening on port ${port}`)
})
module.exports = app;
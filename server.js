const express = require('express');
const userRoutes  = require('./app/router/api');
const app = express()
const port = 3000
app.use(express.json());
app.use("/api/users", userRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
      
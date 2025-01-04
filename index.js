const express = require('express');
require('dotenv').config();

const app = express();

app.get('/', (req, res) => {
  if (process.env.IS_KALVIUM === 'true') {
    res.send({ message: "Welcome, kalvian", data: ["Squad 76 ", "Coimbatore"] });
  } else {
    res.send({ message: "Welcome, New User!", data: ["Hey This is kalvium", "Thanks for visiting our website"] });
  }
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

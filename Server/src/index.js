const express = require("express");
const server = express();
const PORT = 3001;
const { getCharById } = require("./controllers/getCharById");

server.listen(PORT, () => {
  console.log("Server raised in port: " + PORT);
});

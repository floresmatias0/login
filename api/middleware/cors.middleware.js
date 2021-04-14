const server = require('express').Router();
const cors = require('cors');

server.use(cors({
  credentials: true,
  origin: "*"
}));

module.exports = server;

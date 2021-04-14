const server = require('express').Router();
const cors = require('cors');

server.use(cors({
  credentials: true,
  origin: 'http://104.236.200.20/' || "*"
}));

module.exports = server;

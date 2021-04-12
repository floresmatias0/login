const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const flash = require('connect-flash');
const session = require('express-session');

const cors = require ('../middleware/cors.middleware');
const passport = require('../middleware/passport.middleware')
const routes = require('./routes/index.js');

require('./db.js');

const server = express();

server.name = 'API';

server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});
server.use(session({ 
  secret: 'woot',
  resave: false, 
  saveUninitialized: false
}));

server.use(passport.initialize());
server.use(passport.session());

server.use(cors);
server.use(flash());
server.use('/', routes);

// Middleware para mostrar la sesión actual en cada request
server.use((req, res, next) => {
  console.log(req.session);
  console.log(req.user); 
  next();
});

// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
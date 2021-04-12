const server = require('express').Router();
const { User } = require('../../db.js');


server.get('/', async (req, res, next) => { 
    return await User.findAll()
    .then(users => {
        res.status(200).json(users);
    }) 
    .catch(error => {
        res.status(400).send(error)
    })
});

module.exports = server;
const server = require('express').Router();
const { User } = require('../../db.js');

const passport = require('passport')
require('../../../middleware/passport.middleware');


server.post('/', async (req, res) => { 
    const {name,surname,email,password} = req.body

    return await User.findOrCreate({
        where:{
            email:email
        },
        defaults:{
            name:name,
            surname:surname,
            password:password 
        }
    })
    .then(user => {
        res.status(200).json(user);
    }) 
    .catch(error => {
        res.status(400).send(error)
    })
});

server.post('/login', async (req, res, next) => { 
    passport.authenticate('local',{session:false},
        function (err, user, info) {
            if(err)return next(err)
            if(!user)return next(info)
            console.log(user) 
    })
    console.log(user)
});

module.exports = server;
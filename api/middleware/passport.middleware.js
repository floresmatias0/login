const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { User } = require('../src/db');


passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'passwd'
},
  function(email, password, done) {
    User.findOne({ 
      email: email
    }, function(err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));

passport.serializeUser(function(user, done) {
    done(null, user.id);
});
  
passport.deserializeUser(function(id, done) {
    User.findByPk(id)
    .then((user)=>{
      done(null, user);
    })
    .catch(err => {
      return done(err)
    });
});

module.exports = passport;
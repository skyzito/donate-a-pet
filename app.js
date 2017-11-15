// app.js
var express = require('express');
var passport = require('passport');
var app = express();
var db = require('./db');
var path = require('path');
var UserController = require('./UserController');
var PetController = require('./PetController');
var LoginController = require('./LoginController');
var LocalStrategy = require('passport-local').Strategy;
app.use('/users', UserController);
app.use('/pets', PetController);
app.use('/login', LoginController);
module.exports = app;

passport.authenticate('local', { failureFlash: 'Invalid username or password.' });

// Local Passport Strategy
passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function(err, user) {
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

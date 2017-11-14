// app.js
var express = require('express');
var app = express();
var db = require('./db');
var UserController = require('./UserController');
var PetController = require('./PetController');
app.use('/users', UserController);
app.use('/pets', PetController);
module.exports = app;
// UserController.js
var express = require('express');
var passport = require('passport');
var router = express.Router();
var bodyParser = require('body-parser');
var path = require('path');
var User = require('./User');

router.use(bodyParser.urlencoded({ extended: true }));
// CREATES A NEW USER
router.post('/', 
   function (req, res) {
    User.create({
		username: req.body.username,
		email: req.body.email,
		password: req.body.password,
		phone: req.body.phone,
		state: req.body.state,
		city: req.body.city,
		address: req.body.address
    }, 
    function (err, user) {
        if (err) return res.status(500).send("There was a problem adding the information to the database.");
        res.status(200).send(user);
        console.log(user)
    });
});

// RETURNS ALL THE USERS IN THE DATABASE
router.get('/',
    // passport.authenticate('local', { successRedirect: '/',failureRedirect: '/login' }), 
    function (req, res) {
    User.find({}, function (err, users) {
        if (err) return res.status(500).send("There was a problem finding the users.");
        res.status(200).send(users);
    });
});

// GETS A SINGLE USER FROM THE DATABASE
router.get('/:id', function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) return res.status(500).send("There was a problem finding the user.");
        if (!user) return res.status(404).send("No user found.");
        res.status(200).send(user);
    });
});

// DELETES A USER FROM THE DATABASE
router.delete('/:id', function (req, res) {
    User.findByIdAndRemove(req.params.id, function (err, user) {
        if (err) return res.status(500).send("There was a problem deleting the user.");
        res.status(200).send("User "+ user.username +" was deleted.");
    });
});

// UPDATES A SINGLE USER IN THE DATABASE
router.put('/:id', function (req, res) { 
    User.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, user) {
        if (err) return res.status(500).send("There was a problem updating the user.");
        res.status(200).send(user);
    });
}); 

module.exports = router;
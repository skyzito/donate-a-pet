// UserController.js
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
var User = require('./User');

// CREATES A NEW USER
router.post('/', function (req, res) {
    User.create({
			name: req.body.name,
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
router.get('/', function (req, res) {
    User.find({}, function (err, users) {
        if (err) return res.status(500).send("There was a problem finding the users.");
        res.status(200).send(users);
    });
});
module.exports = router;
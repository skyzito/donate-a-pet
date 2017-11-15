// PetController.js
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
var Pet = require('./Pet');

// CREATES A NEW PET
router.post('/', function (req, res) {
    Pet.create({
			username: req.body.username,
			email: req.body.email,
			password: req.body.password,
			phone: req.body.phone,
			state: req.body.state,
			city: req.body.city,
			address: req.body.address
        }, 
        function (err, pet) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(pet);
            console.log(pet)
        });
});

// RETURNS ALL THE PETS IN THE DATABASE
router.get('/', function (req, res) {
    Pet.find({}, function (err, pets) {
        if (err) return res.status(500).send("There was a problem finding the pets.");
        res.status(200).send(pets);
    });
});

// GETS A SINGLE PET FROM THE DATABASE
router.get('/:id', function (req, res) {
    Pet.findById(req.params.id, function (err, pet) {
        if (err) return res.status(500).send("There was a problem finding the pet.");
        if (!pet) return res.status(404).send("No pet found.");
        res.status(200).send(pet);
    });
});

// DELETES A PET FROM THE DATABASE
router.delete('/:id', function (req, res) {
    Pet.findByIdAndRemove(req.params.id, function (err, pet) {
        if (err) return res.status(500).send("There was a problem deleting the pet.");
        res.status(200).send("Pet "+ pet.username +" was deleted.");
    });
});

// UPDATES A SINGLE PET IN THE DATABASE
router.put('/:id', function (req, res) { 
    Pet.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, pet) {
        if (err) return res.status(500).send("There was a problem updating the pet.");
        res.status(200).send(pet);
    });
}); 

module.exports = router;
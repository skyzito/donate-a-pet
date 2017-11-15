// UserController.js
var express = require('express');
var passport = require('passport');
var router = express.Router();
var bodyParser = require('body-parser');
var path = require('path');
// router.get('/login', function(req, res, next) {
//   passport.authenticate('local', function(err, user, info) {
//     if (err) { return next(err); }
//     if (!user) { return res.redirect('/login'); }
//     req.logIn(user, function(err) {
//       if (err) { return next(err); }
//       return res.redirect('/users/' + user.username);
//     });
//   })(req, res, next);
// });

router.get('/login', function(req, res) {
    res.sendFile(path.join(__dirname+'index.html'));
    // res.render('login', { username : req.username, password: req.password });
});

// CREATES A NEW PET
// router.post('/login',
//   passport.authenticate('local', { successRedirect: '/',
//                                    failureRedirect: '/login',
//                                    failureFlash: true })
// );


module.exports = router;
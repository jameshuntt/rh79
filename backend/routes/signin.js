const router = require('express').Router();
let Users = require('../models/checkout.model');

router.route('/').get((req, res) => {
    Users.find()
    .then(checkouts => res.json(checkouts))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/signin').get((req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const date = new Date();

    const newSignIn = new SignIn({
        email,
        password,
        date,
    });

    newSignIn.save()
    .then(() => res.json('Sign In Successful!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
const router = require('express').Router();
let Checkout = require('../models/checkout.model');

router.route('/').get((req, res) => {
    Checkout.find()
    .then(checkouts => res.json(checkouts))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const cardNumber = Number(req.body.cardNumber);
    const date = Date.parse(req.body.date);

    const newCheckout = new Checkout({
        username,
        cardNumber,
        date,
    });

    newCheckout.save()
    .then(() => res.json('Checkout Successful!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
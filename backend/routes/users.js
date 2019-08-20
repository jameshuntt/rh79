const router = require('express').Router();
let User = require('../models/User');

router.route('/').get((res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const newUser = new User({username});

    newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update').put((req, res) => {
    const username = req.body.username;
    const updateUser = User({username});

    updateUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error ' + err));
});

router.route('/delete').delete((req, res) => {

})

module.exports = router;
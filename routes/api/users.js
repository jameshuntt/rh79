//need express router
const router = require('express').Router();
//grab our model
let User = require('../../models/User');

//create a get request for a signin
router.route('/').get((req, res) => {
    //finds the user
    User.find()
        //returns user
        .then(users => res.json(users))
        //throws error if invalid login credentials
        .catch(err => res.status(400).json('Error: ' + err + '.'));
});

//create a post request for our sign up
router.route('/add').post((req, res) => {
    //get our data from the body
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const password = req.body.password;

    //creates new user
    const newUser = new User({});

    //assigns values to each parameter, hashing the password
    newUser.email = email;
    newUser.firstName = firstName;
    newUser.lastName = lastName;
    newUser.password =  newUser.generateHash(password);

    //saves user
    newUser.save()
        //saves then returns our message
        .then(() => res.json('User added!'))
        //throws error if we do not have an appropriate signup
        .catch(err => res.status(400).json('Error ' + err + '.'));
});

//export our router
module.exports = router;
const router = require('express').Router(); 
let User = require('../../models/User');
let UserSession = require('../../models/UserSession');

router.route('/signup').post((req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const password = req.body.password;
         
         if(!firstName) {
             return res.send({
                 success: false,
                 message: 'Error: First name can not be left blank.'
             });
         }

         if(!lastName) {
            return res.send({
                success: false,
                message: 'Error: Last name can not be left blank.'
            });
        }

        if(!email) {
            return res.send({
                success: false,
                message: 'Error: Email can not be left blank.'
            });
        }

        if(!password) {
            return res.send({
                success: false,
                message: 'Error: Password can not be left blank.'
            });
        }

        email = email.toLowerCase();

        //Steps
        // 1.Verify email doesnt exist
        // 2.Save

        // 1 - verify
        User.find({
            email: email
        }, (err, previousUsers) => {
            if (err) {
                return res.send({
                    success: false,
                    message: 'Error: Server error.'
                });
            } else if (previousUsers.length > 0) {
                return res.send('Error: Account already exists with following email ' + email + '.');
            }
        
            //2 - save
            const newUser = new User();

            newUser.email = email;
            newUser.firstName = firstName;
            newUser.lastName = lastName;
            newUser.password =  newUser.generateHash(password);
            newUser.save((err, user) => {
                if (err) {
                    return res.send({
                        success: false,
                        message: 'Error: Server error.'
                    });
                }
                return res.send({
                    success: true,
                    message: 'Signed up.'
                });
            });
        });
})

router.route('/signin').post((req, res) => {
    const email = req.body.email;
    const password = req.body.password;

        if(!email) {
            return res.send({
                success: false,
                message: 'Error: Email can not be left blank.'
            });
        }

        if(!password) {
            return res.send({
                success: false,
                message: 'Error: Password can not be left blank.'
            });
        }
        
        email = email.toLowerCase();

        User.find({
            email: email
        }, (err, users) => {
            if (err) {
                return res.send({
                    success: false,
                    message: 'Error: Server error.'
                })
            }
            if (users.length != 1) {
                return res.send({
                    success: false,
                    message: 'Error: Invalid.'
                })
            }

            const user = users[0];

            if(!user.validPassword(password)) {
                return res.send({
                    success: false,
                    message: 'Error: Incorrect password.'
                })
            }

            // Otherwise correct user
            const UserSession = new UserSession();
            userSession.userId = user._id;
            userSession.save((err, doc) => {
                if (err) {
                     return res.send({
                         success: false,
                         message: 'Error: Server error.'
                     });
                }

                return res.send({
                    success: true,
                    message: 'Valid sign in',
                    token: doc._id
                });
            });
        });
})

router.route('/verify').get((req, res) => {
    // Get the token
    const { query } = req;
    const { token } = query;

    // ?token=test

    // Verify token is unique and not deleted

    UserSession.find({
        _id: token,
        isDeleted: false
    }, (err, sessions) => {
        if (err) {
            return res.send({
                success: false,
                message: 'Error: Server error.'
            });
        }
        if (sessions.length != -1) {
            return res.send({
                success: false,
                message: 'Error: Invalid.'
            });
        } else {
            return res.send({
                success: true,
                message: 'Good.'
            })
        }
    });
});

router.route('/logout').get((req, res) => {
    // Get the token
    const { query } = req;
    const { token } = query;

    // looks sumn like this ?token=test

    // Verify token is unique and not deleted

    UserSession.findOneAndUpdate({
        _id: token,
        isDeleted: false
    }, {
       $set: {
           isDeleted:true
       }
    }, null,  (err, sessions) => {
        if (err) {
            return res.send({
                success: false,
                message: 'Error: Server error.'
            });
        }
        if (sessions.length != -1) {
            return res.send({
                success: false,
                message: 'Error: Invalid.'
            });
        } else {
            return res.send({
                success: true,
                message: 'Good.'
            });
        }
    });
});

module.exports = router;

















//from a previous video, over a year old, had to recreate with new syntax as done above
 //module.exports = (app) => {
     /*
       Sign Up
      
     app.post('api/account/signup', (req, res, next) => {
         const { body } = req;
         const {
             firstName,
             lastName,
             password
         } = body;
         let {
             email
         } = body;

         if(!firstName) {
             return res.send({
                 success: false,
                 message: 'Error: First name can not be left blank.'
             });
         }

         if(!lastName) {
            return res.send({
                success: false,
                message: 'Error: Last name can not be left blank.'
            });
        }

        if(!email) {
            return res.send({
                success: false,
                message: 'Error: Email can not be left blank.'
            });
        }

        if(!password) {
            return res.send({
                success: false,
                message: 'Error: Password can not be left blank.'
            });
        }

        email = email.toLowerCase();

        //Steps
        // 1.Verify email doesnt exist
        // 2.Save

        // 1 - verify
        User.find({
            email: email
        }, (err, previousUsers) => {
            if (err) {
                return res.send({
                    success: false,
                    message: 'Error: Server error.'
                });
            } else if (previousUsers.length > 0) {
                return res.send('Error: Account already exists with following email ' + email + '.');
            }
        
            //2 - save
            const newUser = new User();

            newUser.email = email;
            newUser.firstName = firstName;
            newUser.lastName = lastName;
            newUser.password =  newUser.generateHash(password);
            newUser.save((err, user) => {
                if (err) {
                    return res.send({
                        success: false,
                        message: 'Error: Server error.'
                    });
                }
                return res.send({
                    success: true,
                    message: 'Signed up.'
                });
            });
        });
     });
     app.post('api/account/signin', (req, res, next) => {
        const { body } = req;
        const {
            password
        } = body;
        let {
            email
        } = body;

        if(!email) {
            return res.send({
                success: false,
                message: 'Error: Email can not be left blank.'
            });
        }

        if(!password) {
            return res.send({
                success: false,
                message: 'Error: Password can not be left blank.'
            });
        }
        
        email = email.toLowerCase();

        User.find({
            email: email
        }, (err, users) => {
            if (err) {
                return res.send({
                    success: false,
                    message: 'Error: Server error.'
                })
            }
            if (users.length != 1) {
                return res.send({
                    success: false,
                    message: 'Error: Invalid.'
                })
            }

            const user = users[0];

            if(!user.validPassword(password)) {
                return res.send({
                    success: false,
                    message: 'Error: Incorrect password.'
                })
            }

            // Otherwise correct user
            const UserSession = new UserSession();
            userSession.userId = user._id;
            userSession.save((err, doc) => {
                if (err) {
                     return res.send({
                         success: false,
                         message: 'Error: Server error.'
                     });
                }

                return res.send({
                    success: true,
                    message: 'Valid sign in',
                    token: doc._id
                });
            });
        });
     });
     app.get('api/account/verify', (req, res, next) =>{
        // Get the token
        const { query } = req;
        const { token } = query;

        // ?token=test

        // Verify token is unique and not deleted

        UserSession.find({
            _id: token,
            isDeleted: false
        }, (err, sessions) => {
            if (err) {
                return res.send({
                    success: false,
                    message: 'Error: Server error.'
                });
            }
            if (sessions.length != -1) {
                return res.send({
                    success: false,
                    message: 'Error: Invalid.'
                });
            } else {
                return res.send({
                    success: true,
                    message: 'Good.'
                })
            }
        });
     });
     app.get('api/account/logout', (req, res, next) => {
         // Get the token
         const { query } = req;
         const { token } = query;
 
         // looks sumn like this ?token=test
 
         // Verify token is unique and not deleted
 
         UserSession.findOneAndUpdate({
             _id: token,
             isDeleted: false
         }, {
            $set: {
                isDeleted:true
            }
         }, null,  (err, sessions) => {
             if (err) {
                 return res.send({
                     success: false,
                     message: 'Error: Server error.'
                 });
             }
             if (sessions.length != -1) {
                 return res.send({
                     success: false,
                     message: 'Error: Invalid.'
                 });
             } else {
                 return res.send({
                     success: true,
                     message: 'Good.'
                 })
             }
         });
     });
 };

lodash for email verification ( like have them click verification link ) or indexo */
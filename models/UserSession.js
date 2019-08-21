//requirements for the model
const mongoose = require('mongoose');

//grabs Schema from mongoose
const Schema = mongoose.Schema;

//create the schema
const userSessionSchema = new Schema({
     userId: {
         type: String,
         default: ''
     },
     timestamp: {
        type: Date,
        default: Date.now() 
     },
     isDeleted: {
        type: Boolean,
        default: false
     }
})

//create our export
const UserSession = mongoose.model('UserSession', userSessionSchema);

//now export
module.exports = UserSession;
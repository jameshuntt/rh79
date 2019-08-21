//requirements for this model
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

//grab Schema from mongoose
const Schema = mongoose.Schema;

//create the Schema
const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        default: ''
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        default: ''
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3,
        default: ''
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 8,
        default: ''
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
}, {
    timestamps: true,
});

//hashes password
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password,  bcrypt.genSaltSync(8), null);
};

//create a way to compare the hash
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

//create our export
const User = mongoose.model('User', userSchema);

//export
module.exports = User;
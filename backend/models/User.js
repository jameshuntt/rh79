const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
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
        trim: true,
        minlength: 3,
        default: ''
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        default: ''
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
}, {
    timestamps: true,
});

UserSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password,  bcrypt.genSaltSync(8), null);
};

UserSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', UserSchema);
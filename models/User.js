/**
 * User Schema
 */

// Dependencies
const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    fullName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    dateOfBirth: {
        type: Date,
    },
    address: {
        type: String,
    },
    gender: {
        type: String,
    },
    phone: {
        type: String,
    },
    aadharNo: {
        type: String,
    }
}, {
    timestamps: true,
    strict: true,
    discriminatorKey: 'role'
});

// user model
const User = model('User', UserSchema);

module.exports = User;
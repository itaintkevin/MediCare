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
    }
}, {
    timestamps: true,
    strict: true,
});
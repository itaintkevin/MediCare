/**
 * Doctor Schema
 */

// Dependencies
const { Schema, model } = require('mongoose');
const User = require('./User')

const DoctorSchema = new Schema({
    registrationNo: {
        type: String,
        required: true,
    },
    yearOfPassing: {
        type: String,
        required: true,
    }
});

const Doctor = User.discriminator('Doctor', DoctorSchema);

module.exports = Doctor;
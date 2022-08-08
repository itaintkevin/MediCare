/**
 * Doctor Schema
 */

// Dependencies
const { Schema, model } = require('mongoose');
const User = require('./User')

const DoctorSchema = new Schema({
    registrationNumber: {
        type: String,
        required: true,
    }
});

const Doctor = User.discriminator('Doctor', DoctorSchema);

module.exports = Doctor;
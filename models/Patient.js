/**
 * Patient Schema
 */

// Dependencies
const { Schema, model } = require('mongoose');
const User = require('./User')

const PatientSchema = new Schema({
    emergencyContacts: [{
        name: String,
        phone: String,
        email: String,
    }]
});

const Patient = User.discriminator('Patient', PatientSchema);

module.exports = Patient;
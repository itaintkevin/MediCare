/**
 * Doctors Schema
 */

// Dependencies
const Joi = require('joi');

// Doctor Schema Container
const DoctorSchema = {};

DoctorSchema.registrationNumberSchema = Joi.object({
    registrationNo: Joi.string().required(),
    yearOfPassing: Joi.string().required().length(4),
})

// Exporting Schema
module.exports = DoctorSchema
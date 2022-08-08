/**
 * Auth Schema
 */

// Dependencies
const Joi = require('joi');

// Auth Schema Container
const AuthSchema = {};

AuthSchema.userLoginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
});

AuthSchema.patientSignupSchema = Joi.object({
    registrationNo: Joi.string().required(),
    yearOfPassing: Joi.string().email().required().length(4),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
});

AuthSchema.doctorSignupSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
});

// Exporting Schema
module.exports = AuthSchema
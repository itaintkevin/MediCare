/**
 * Application Router Hub
 */

// Dependencies
const Router = require('express').Router();
const appRouter = require('./appRouter');
const authRouter = require('./authRouter');
const doctorRouter = require('./doctorRouter');
const patientRouter = require('./patientRouter');

Router.use(appRouter);
Router.use('/api/auth', authRouter);
Router.use('/api/doctors', doctorRouter);
Router.use('/api/patients', patientRouter);

// Export Router
module.exports = Router;
/**
 * Application Router Hub
 */

// Dependencies
const Router = require('express').Router();
const appRouter = require('./appRouter');
const authRouter = require('./authRouter');

Router.use(appRouter);
Router.use('/api/auth', authRouter);

// Export Router
module.exports = Router;
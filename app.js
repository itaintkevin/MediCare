/**
 * Server Entry
 */

// Dependencies
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const appRouter = require('./routers');
const errorHandler = require('./middlewares/errorMiddleware');
const { ApiError } = require('./utils/customUtils');
const { PORT, isProduction } = require('./config');

// Initializing Application
const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(logger(isProduction ? 'combined' : 'dev'))

// Using App Routers
app.use(appRouter);

// Error handlers

app.use((req, res, next) => {
    const message = `Request: ${req.originalUrl} does not exist on this server.`;
    const statusCode = 404;
    const error = new ApiError({ message, statusCode });
    return next(error);
});

app.use(errorHandler);

// Start server
app.listen(PORT, () => {
    console.log(`Server running on Port: ${PORT}`);
});
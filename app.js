/**
 * Server Entry
 */

// Dependencies
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const redis = require('redis');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const appRouter = require('./routers');
const errorHandler = require('./middlewares/errorMiddleware');
const { ApiError } = require('./utils/customUtils');
const { PORT, isProduction, DB_URL, REDIS_CONFIG } = require('./config');

const client = redis.createClient(REDIS_CONFIG);

// Initializing Application
const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(logger(isProduction ? 'combined' : 'dev'));
app.use(session({
    secret: 'somerandomstringthatactsaspassword',
    store: new RedisStore({ client }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        sameSite: true,
        secure: false,
        httpOnly: false,
        maxAge: 1000 * 60 * 60 * 24 // 24hrs
    }
}))

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

mongoose.connect(DB_URL)
    .then(async (_) => {
        await client.connect();
        console.log('Connected to Database.');
        // Start server
        app.listen(PORT, () => {
            console.log(`Server running on Port: ${PORT}`);
        });
    })
    .catch((_) => {
        console.log(_);
        console.log('Unable to connect to DB and start Server.')
        process.exit(1);
    })

client.on('connect', (err) => {
    if (err) return console.log(`Unable to Connect to Redis: ${err}`)
    console.log('Connected to Redis.')
});
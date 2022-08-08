/**
 * Application Config
 */

// Dependencies
require('dotenv').config();

const isProduction = process.env.NODE_ENV === 'production';

const DB_URL = isProduction ? process.env.DB_URL_PROD : process.env.DB_URL_DEV;

const REDIS_CONFIG = isProduction ? {
    socket: {
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT,
    },
    password: process.env.REDIS_PASSWORD,
} : {};

// Application Config Container
const configuration = {
    PORT: process.env.PORT || 5000,
    isProduction,
    REGISTER_NUM_VERIFY_URL: 'https://www.nmc.org.in/MCIRest/open/getDataFromService?service=searchDoctor',
    DB_URL,
    REDIS_CONFIG
}

// Export configuration
module.exports = configuration;
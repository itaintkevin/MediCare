/**
 * Application Config
 */

// Dependencies
require('dotenv').config();

const isProduction = process.env.NODE_ENV === 'production';

// Application Config Container
const configuration = {
    PORT: process.env.PORT || 5000,
    isProduction,
}

// Export configuration
module.exports = configuration;
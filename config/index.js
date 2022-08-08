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
    REGISTER_NUM_VERIFY_URL: 'https://www.nmc.org.in/MCIRest/open/getDataFromService?service=searchDoctor'
}

// Export configuration
module.exports = configuration;
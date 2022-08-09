/**
 * Doctor Router
 */

// Dependencies
const Router = require('express').Router();
const { checkRegistrationNumber } = require('../controllers/doctorController');
const { registrationNumberSchema } = require('../schemas/doctorSchema');
const { validateSchema } = require('../middlewares/validatorMiddleware');


Router.post('/checkRegistrationNumber', validateSchema(registrationNumberSchema), checkRegistrationNumber);

// Export Router
module.exports = Router;
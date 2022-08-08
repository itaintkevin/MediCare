/**
 * Auth Router
 */

// Dependencies
const Router = require('express').Router();
const {loginUser, signupDoctor, signupPatient} = require('../controllers/authController');
const {userLoginSchema, doctorSignupSchema, patientSignupSchema} = require('../schemas/authSchema');
const {validateSchema} = require('../middlewares/validatorMiddleware');

Router.post('/login', validateSchema(userLoginSchema), loginUser);

Router.post('/patient/signup', validateSchema(patientSignupSchema), signupPatient);

Router.post('/doctor/signup', validateSchema(doctorSignupSchema), signupDoctor);

// Export Router
module.exports = Router;
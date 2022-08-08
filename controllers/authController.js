/**
 * Auth Controller
 */

// Dependencies

// Auth Controller Container
const AuthController = {};

AuthController.loginUser = async (req, res, next) => {
    const { email, password } = req.body;
    try {

    } catch (error) {
        return next(error);
    }
};

AuthController.signupPatient = async (req, res, next) => {};

AuthController.signupDoctor = async (req, res, next) => {};

// Exporting Auth Controller
module.exports = AuthController;
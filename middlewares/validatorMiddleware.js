/**
 * Schema Validator Middleware
 */

// Dependencies
const { ApiError } = require("../utils/customUtils");

// Validator Container
const validatorMiddleware = {};

validatorMiddleware.validateSchema = (schema) => (req, res, next) => {
    try {
        const { error } = schema.validate(req.body);
        if (!error) return next();
        else throw new ApiError({ ...error.details[0], statusCode: 422 });
    } catch (error) {
        return next(error);
    }
};

// Exporting validator middleware
module.exports = validatorMiddleware;
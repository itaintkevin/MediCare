/**
 * Error Handling Middleware
 */

// Dependencies
const {ApiError} = require('../utils/customUtils');

const errorHandler = (err, req, res, next) => {
    if(err instanceof ApiError){
        return res.status(err.statusCode).json({
            message: err.message,
            success: false,
            data: err.data,
        });
    }
    return res.status(500).json({
        message: 'Internal Server Error',
        success: false,
    })
};

module.exports = errorHandler;
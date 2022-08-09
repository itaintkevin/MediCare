/**
 * Custom Utilities
 */

class ApiError extends Error {
    constructor({ message = '', statusCode = 500, data = {} }) {
        super();
        this.message = message;
        this.statusCode = statusCode;
        this.data = data;
    };
};

const verifyDoctorRegNo = async () => { };

module.exports = {
    ApiError,
}
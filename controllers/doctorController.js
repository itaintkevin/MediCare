/**
 * Doctor Controller
 */

// Dependencies
const axios = require('axios');
const { ApiError } = require('../utils/customUtils')
const { REGISTER_NUM_VERIFY_URL } = require('../config');

// Doctor Controller Container
const DoctorController = {};

DoctorController.checkRegistrationNumber = async (req, res, next) => {
    const { registrationNo, yearOfPassing } = req.body;
    try {
        let isValidRegistrationNum = false;
        const { data } = await axios.post(REGISTER_NUM_VERIFY_URL, { registrationNo });
        if (data.length > 0) {
            const exists = data.find((doctor) => doctor.yearOfPassing === yearOfPassing && doctor.registrationNo === registrationNo);
            isValidRegistrationNum = exists !== null && typeof exists === 'object';
        }
        return res.status(200).json({
            message: 'Registration number checked',
            success: true,
            data: { isValidRegistrationNum }
        })
    } catch (error) {
        return next(error);
    }
};

// Exporting Doctor Controller
module.exports = DoctorController;

/**
 * Authentication Middlewares
 */

// Dependencies

// Auth Middleware Container
const authMiddleware = {};

authMiddleware.checkJwt = (req, res, next) => {};

authMiddleware.checkRole = (ROLES=[]) => (req, res, next) => {}

module.exports = authMiddleware;
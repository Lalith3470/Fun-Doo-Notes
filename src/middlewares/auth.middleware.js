import HttpStatus from 'http-status-codes';
import jwt from 'jsonwebtoken';

/**
 * Middleware to authenticate if user has a valid Authorization token
 * Authorization: Bearer <token>
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export const UsingAuth = async (req, res, next) => {
  try {
    let bearerToken = req.header('Authorization');
    if (bearerToken){
      bearerToken = bearerToken.split(' ')[1];
      const user  = await jwt.verify(bearerToken, process.env.JWT_SECRET);
    }
    else{
      throw {
        code: HttpStatus.BAD_REQUEST,
        message: 'Authorization token is required'
      };
    }
    next();
  } catch (error) {
    next(error);
  }
};
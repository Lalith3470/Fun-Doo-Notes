import HttpStatus from 'http-status-codes';
import * as UserService from '../services/user.service';



// registration
export const newUser = async (req, res, next) => {
  try {
    const data = await UserService.get1user(req.body);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'User created successfully'
    });
  } 
  catch (error) {
    next(error);
  }
};

// login function
export const getUser = async (req, res, next) => {
  try {
    const data = await UserService.newUser(req.body);
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: 'User fetched successfully'
      });
    }
  catch (error) {
    next(error);
  }
};

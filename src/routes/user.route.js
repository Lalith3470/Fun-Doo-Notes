import express from 'express';
import * as userController from '../controllers/user.controller';
import { newUserValidator } from '../validators/user.validator';
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();

// registering
router.post('', newUserValidator, userController.newUser);

//login
router.post('/login', userController.getUser);


export default router;

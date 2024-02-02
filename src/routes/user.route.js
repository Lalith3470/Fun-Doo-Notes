import express from 'express';
import * as userController from '../controllers/user.controller';
import { newUserValidator } from '../validators/user.validator';
import { UsingAuth } from '../middlewares/auth.middleware';

const router = express.Router();

// registering
router.post('', newUserValidator, userController.newUser);

//login
router.post('/login', userController.getUser);

//Authorization
router.get('/:_id',UsingAuth, userController.getUser);

//delete
router.delete("/:_id", userController.deleteuser);

export default router;

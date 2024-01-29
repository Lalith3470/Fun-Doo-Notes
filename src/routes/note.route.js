import express from 'express';
import * as noteController from '../controllers/note.controller';
import { newNoteValidator } from '../validators/note.validator';
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();

// registering
router.post('', newNoteValidator, noteController.newNote);

//login
router.post('/login', noteController.getNote);


export default router;

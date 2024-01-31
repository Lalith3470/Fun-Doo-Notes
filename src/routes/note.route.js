import express from 'express';
import * as noteController from '../controllers/note.controller';
import { newNoteValidator } from '../validators/note.validator';
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();

// registering
router.post('', newNoteValidator, noteController.newNote);

//login Note
router.post('/:_id', noteController.getNote);

//delete Note
router.delete("/:_id",noteController.deleteNote);

//update Note
router.put('/:_id', noteController.updateNote);

//get all notes
router.get('', noteController.getAllNotes);




export default router;

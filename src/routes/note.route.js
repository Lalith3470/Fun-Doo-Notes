import express from 'express';
import * as noteController from '../controllers/note.controller';
import { newNoteValidator } from '../validators/note.validator';
import { UsingAuth } from '../middlewares/auth.middleware';

const router = express.Router();

// creating note
router.post('',UsingAuth,newNoteValidator, noteController.newNote);

//get single Note
router.get('/getNote/:_id',UsingAuth, noteController.getNote);

//delete Note
router.delete("/delete/:_id",UsingAuth,noteController.deleteNote);

//update Note
router.put('/:_id',UsingAuth, noteController.updateNote);

//get all notes
router.get('/getAllNotes', UsingAuth,noteController.getAllNotes);


export default router;

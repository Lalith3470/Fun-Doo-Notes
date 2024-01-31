import HttpStatus from 'http-status-codes';
import * as NoteService from '../services/note.service';



// registration
export const newNote = async (req, res, next) => {
  try {
    const data = await NoteService.newNote(req.body);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'Note created successfully'
    });
  } 
  catch (error) {
    next(error);
  }
};

// login function
export const getNote = async (req, res, next) => {
  try {
    const data = await NoteService.getNote(req.body);
    if(data){
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: "Logged in Successfully"
      });
    }
    else{throw new Error("Note Not Found");}
  }
  catch (error) {
    next(error);
  }
};

//Delete User
export const deleteNote = async (req, res, next) => {
  try {
    const noteId = req.params._id;
    const data = await NoteService.deleteNoteById(noteId);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'Note delete successfull',
    });
  } catch (error) {
    next(error);
  }
};

//update single note
export const updateNote = async (req, res, next) => {
  try {
    //const note = req.params.noteId;
    const data = await NoteService.updateNote(req.params._id, req.body);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'Note Updated Successful',
    });
  } catch (error) {
    next(error);
  }
};

//Get all notes
export const getAllNotes = async (req, res, next) => {
  try {
    const data = await NoteService.getAllNotes();
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'All Notes fetched successfully'
    });
  } catch (error) {
    next(error);
  }
};

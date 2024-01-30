import Note from '../models/note.model';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


// registration function
export const newNote =async(body) =>{
  const data=await Note.create(body);
  return data;
};


//login function
export const getNote = async (body) => {
    const data = await Note.findOne({ id: body.id });
    return data;
};  


//delete function
export const deleteNoteById = async (id) => {
  await Note.findByIdAndDelete(id);
  return id;
};

//Update function
export const updateNote = async (id, body) => {
  const data = await Note.findByIdAndUpdate(
    id,
    body,
    {
      new: true
    }
  );
  return data;
};

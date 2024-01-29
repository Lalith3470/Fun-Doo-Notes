import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    title: {
      type: String
    },
    description:{
      type: String
    },
  },
  {
    timestamps: true
  }
);

export default model('Note', userSchema);

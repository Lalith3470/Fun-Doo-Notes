import User from '../models/user.model';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';



// registration function
export const get1user =async(body) =>{
  body.password= await bcrypt.hash(body.password,10);
  const hashed_password=await User.create(body);
  return hashed_password;
};


//login function
export const newUser = async (body) => {
    const isEmailmatch= await User.findOne({ email_id: body.email_id });
    if (isEmailmatch){
      const isPasswordMatch = await bcrypt.compare(body.password, isEmailmatch.password);
      if (isPasswordMatch) {
        const token = jwt.sign({ isEmailmatch: { id: isEmailmatch._id } }, process.env.JWT_SECRET, { expiresIn: '1h' });
        return { isEmailmatch, token };
      }
      else{throw new Error("Invalid password");}
    }
    else{throw new Error("Invalid Email");} 
};  




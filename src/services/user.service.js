import User from '../models/user.model';
import bcrypt from 'bcrypt';



// registration function
export const get1user =async(body) =>{
 
  body.password= await bcrypt.hash(body.password,10);
  const data=await User.create(body);
  return data;
};


//login function
export const newUser = async (body) => {
    const isEmailmatch= await User.findOne({ email_id: body.email_id });

    if (isEmailmatch){
      const isPasswordMatch = await bcrypt.compare(body.password, isEmailmatch.password);
      if(isPasswordMatch){return("Login successful");}
      else{throw new Error("invalid password");}
    }
    else{throw new Error("Invalid Email");} 
  };  




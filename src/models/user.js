
import mongoose, {Schema}  from "mongoose";
const validator = require("validator");

const userSchema = new Schema({

    
        name: {
          type: String,
          minlength: 2,
          trim: true,
          lowercase: true,  
          required: true,
        },
        email: {
          type: String,
          required: [true, "please enter email"],
          unique: [true, "email already exist"],
          validate(value) {
            if (!validator.isEmail(value)) {
              throw new Error("not valid email");
            }
          },
        },
        password: {
          type: String,
          minlength: [6, "password must be  at least 6 characters"],
          required: [true, "please enter password"],
        },
})

export const  Users =  mongoose.models.Users  || mongoose.model("Users",userSchema)
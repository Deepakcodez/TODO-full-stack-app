import { Users } from "@/models/user";
import mongoose from "mongoose";
const uri = 'mongodb://127.0.0.1:27017/TODOapp'         //for localhost mongo


export  const connectDB= async()=>{

    try {
        await mongoose.connect(uri)
        console.log('>>>>>>>>>>>DB Connected')

    

    } catch (error) {
      console.log('>>>>>>>>>>> issue in connecting Database ', error)  
    }
}


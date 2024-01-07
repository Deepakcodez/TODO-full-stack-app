import { Users } from "@/models/user";
import mongoose from "mongoose";
const uri = 'mongodb://127.0.0.1:27017/TODOapp'         //for localhost mongo


export  const connectDB= async()=>{
  const mongooseOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    connectTimeoutMS: 30000, // Increase the timeout value
    socketTimeoutMS: 30000,  // Increase the timeout value
  };
    try {
        await mongoose.connect(uri)
        console.log('>>>>>>>>>>>DB Connected')

    

    } catch (error) {
      console.log('>>>>>>>>>>> issue in connecting Database ', error)  
    }
}


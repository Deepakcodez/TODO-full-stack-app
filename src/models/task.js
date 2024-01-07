
import mongoose, {Schema}  from "mongoose";

const taskSchema = new Schema({

    
        title: {
          type: String,
          minlength: 2,
          lowercase: true,  
          required: true,
        },
        desc: {
          type: String,
          minlength: 2,
          lowercase: true,  
          required: false,
        },
        addedDate:{
            type: Date,
            default :  Date.now()
        },
        status: {
            type:String,
            enum :["pending", "completed"],
            default : "pending",
        },
        userId:{
            type : mongoose.ObjectId,
            required : true,
        }
       
       
})

export const  Tasks =  mongoose.models.Tasks  || mongoose.model("Tasks",taskSchema)
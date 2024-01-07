// Import necessary modules and models
import { NextResponse } from "next/server";
import { Tasks } from "@/models/task";
import { connectDB } from "../../../helper/db";
import { responseMessage } from "@/helper/responsemessge";

connectDB();









// Create task
export async function POST(request) {
    const { title, desc, status } = await request.json();
    
    try {
        // Create a new task
        const task = new Tasks({
            title,
            desc,
            status,
        });

        // Save the task to the database
        const newTask = await task.save();

        // Return success response
        return NextResponse.json(
            {
                success: true,
                message: "Task created successfully.",
                data: newTask,
            },
            { status: 200 }
        );
    } catch (error) {
        // Return error response
        return NextResponse.json(
            {
                success: false,
                message: "Internal error.",
                error: error.message,
            },
            { status: 500 }
        );
    }
}



// get all tasks

export async function GET(request){
      try {
        const task =  await Tasks.find();

       return responseMessage(true,"all tasks",task,200)
        
      } catch (error) {
        console.log('>>>>>>>>>>>', error)
     return   responseMessage(false,"internal error",null,500)
      }
}
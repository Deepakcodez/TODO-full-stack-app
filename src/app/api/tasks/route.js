// Import necessary modules and models
import { NextResponse } from "next/server";
import { Tasks } from "@/models/task";

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

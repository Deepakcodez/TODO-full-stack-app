import { responseMessage } from "@/helper/responsemessge";
import { Tasks } from "@/models/task";

// get  task by id
export async function GET(request, { params }) {
  const { taskid } = params;
  try {
    if (!taskid) {
      return responseMessage(false, "task id required", null, 400);
    }
    const task = await Tasks.findById(taskid);

    return responseMessage(true, "tasks found", task, 200);
  } catch (error) {
    console.log(">>>>>>>>>>>", error);
    return responseMessage(false, "internal error", null, 500);
  }
}

//update task
// Update task
export async function PUT(request, { params }) {
    const { taskid } = params;
    const { title, desc, status } = await request.json();

    try {
        if (!taskid) {
            return responseMessage(false, "Task ID is required", null, 400);
        }

        const task = await Tasks.findById(taskid);

        if (!task) {
            return responseMessage(false, "Task not found", null, 404);
        }

        task.title = title|| task.title;
        task.desc = desc || task.desc;
        task.status = status || task.status;


        const updatedTask = await task.save();

        // Return the response
        return responseMessage(true, "Task updated successfully", updatedTask, 200);
    } catch (error) {
        console.log("Error:", error);
        return responseMessage(false, "Internal error", null, 500);
    }
}


// delete task
export async function DELETE(request, { params }) {
    const { taskid } = params;

    try {
        if (!taskid) {
            return responseMessage(false, "Task ID is required", null, 400);
        }

        const deletedTask = await Tasks.findByIdAndDelete(taskid);

        if (!deletedTask) {
            return responseMessage(false, "Task not found", null, 404);
        }

        // Return the response
        return responseMessage(true, "Task deleted successfully", deletedTask, 200);
    } catch (error) {
        console.error("Error:", error);  // Log the error details
        return responseMessage(false, "Internal error", null, 500);
    }
}
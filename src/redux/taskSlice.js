import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";


const initialState = {
    tasks: []
}
export const fetchTaskApiData = createAsyncThunk('tasks/fetchTasks',
    async () => {
        const response = await fetch('https://679b417a33d316846323349a.mockapi.io/tasks');
        return response.json();
    }
);

export const deleteTaskById = createAsyncThunk('tasks/deleteTasks',
    async (taskId) => {
        const response = await fetch(`https://679b417a33d316846323349a.mockapi.io/tasks/${taskId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            window.alert("Task deleted successfully from Thunk");
            return taskId;
        } else {
            window.alert("Failed to delete task from Thunk");
        }

    }
);

export const updateTaskById = createAsyncThunk('tasks/updateTasks',
    async (taskDetails) => {
        const response = await fetch(`https://679b417a33d316846323349a.mockapi.io/tasks/${taskDetails.taskId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(taskDetails)
        });

        if (response.ok) {
            window.alert("Task details updated successfully from Thunk");
            return taskId;
        } else {
            window.alert("Failed to update task details from Thunk");
        }
    }
)

export const addTask = createAsyncThunk('tasks/addTasks', 
    async (taskDetails) => {
        // const navigate = useNavigate();
        const response = await fetch('https://679b417a33d316846323349a.mockapi.io/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(taskDetails)
        });

        if (response.ok) {
            window.alert("Task details updated successfully from Thunk");
            // navigate('/');
        } else {
            window.alert("Failed to update task details from Thunk");
        }

    }
)

export const taskSlice = createSlice({
    name: 'taskManager',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchTaskApiData.fulfilled, (state, action) => {
            state.tasks = action.payload;
        });
        builder.addCase(deleteTaskById.fulfilled, (state, action) => {
            console.log("action payload", action.payload)
            state.tasks = state.tasks.filter((task) => task.id !== action.payload);
            console.log("deleted state", state.tasks);
        });
        
    }

});

export default taskSlice.reducer;
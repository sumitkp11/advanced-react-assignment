import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


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
    async (taskId) => {
        const response = await fetch(`https://679b417a33d316846323349a.mockapi.io/tasks/${taskId}`, {
            method: 'PUT',
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
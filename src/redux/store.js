import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../redux/taskSlice";

/**
 * set up redux store
 * with thunk middleware added by default
 */
const taskManagerStore = configureStore({
    reducer: {
        data: tasksReducer
    }
});

export default taskManagerStore;
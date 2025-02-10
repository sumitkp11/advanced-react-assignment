import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { DateFormatForMonth } from "../utilities/dateFormatter";
import { useDispatch } from "react-redux";
import { updateTaskById } from "../redux/taskSlice";

export default function EditTask() {

    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {
        taskId,
        taskTitle,
        taskAssign,
        taskStatus,
        taskPriority,
        taskStart,
        taskEnd } = location.state || {};

    const [title, setTitle] = useState(taskTitle);
    const [assignedTo, setAssign] = useState(taskAssign);
    const [status, setStatus] = useState(taskStatus);
    const [priority, setPriority] = useState(taskPriority);
    const [startDate, setStartDate] = useState(taskStart);
    const [endDate, setEndDate] = useState(taskEnd);

    const submitTask = async (event) => {
        event.preventDefault();
        const taskData = {
            taskId,
            title,
            assignedTo,
            status,
            priority,
            startDate: DateFormatForMonth(startDate),
            endDate: DateFormatForMonth(endDate)
        };

        dispatch(updateTaskById(taskData));
    }

    return (
        <div>
            <h2 className="font-bold text-xl text-center mt-4">Edit Task Details for <span className="text-blue-600">{taskAssign}</span></h2>
            <p className="text-red-600 font-bold text-center mt-4">Leave unchanged for default values</p>
            <div className="flex items-center justify-center h-auto m-5">
                <form onSubmit={submitTask}>
                    <div id="task-title-text" className="mb-3">
                        <label htmlFor="title" className="text-left mr-20 font-bold ">Title:</label><input type="text" name="" id="title" className="rounded-lg border-4 border-red px-2" defaultValue={taskTitle} onChange={(event) => setTitle(event.target.value)} contentEditable />
                    </div>
                    <div id="task-assignedTo-text" className="mb-3">
                        <label htmlFor="assignedTo" className="text-left mr-20 font-bold">Assigned To:</label><input type="text" name="" id="assignedTo" className="rounded-lg border-4 border-red px-2" defaultValue={taskAssign} onChange={(event) => setAssign(event.target.value)} />
                    </div>
                    <br />
                    <div id="task-status-radio" className="mb-3">
                        <label htmlFor="status" className="text-left mr-20 font-bold ">Status:</label>
                        <input
                            type="radio"
                            name="taskStatusRadio"
                            id="openStatus"
                            onClick={() => setStatus('Open')} />
                        <label htmlFor="openStatus" className="mr-4 ml-1">Open</label>
                        <input
                            type="radio"
                            name="taskStatusRadio"
                            id="inProgressStatus"
                            onClick={() => setStatus("In-Progress")} />
                        <label htmlFor="inProgressStatus" className="mr-4 ml-1" >In-Progress</label>
                        <input
                            type="radio"
                            name="taskStatusRadio"
                            id="underReviewStatus"
                            onClick={() => setStatus("Under-review")} />
                        <label htmlFor="underReviewStatus" className="mr-4 ml-1" >Under-review</label>
                        <input
                            type="radio"
                            name="taskStatusRadio"
                            id="doneStatus"
                            onClick={() => setStatus("Done")} />
                        <label htmlFor="doneStatus" className="mr-4 ml-1" >Done</label>
                    </div>
                    <br />
                    <div id="task-priority-radio" className="mb-3">
                        <label htmlFor="priorityRadio" className="text-left mr-20 font-bold ">Priority:</label>
                        <input
                            type="radio"
                            name="taskPriorityRadio"
                            id="priorityRadio"
                            onClick={() => setPriority('Low')} />
                        <label htmlFor="priorityRadio" className="mr-4 ml-1">Low</label>
                        <input
                            type="radio"
                            name="taskPriorityRadio"
                            id="mediumPriority"
                            onClick={() => setPriority("Medium")} />
                        <label htmlFor="mediumPriority" className="mr-4 ml-1" >Medium</label>
                        <input
                            type="radio"
                            name="taskPriorityRadio"
                            id="highPriority"
                            onClick={() => setPriority("High")} />
                        <label htmlFor="highPriority" className="mr-4 ml-1" >High</label>
                    </div>
                    <div id="task-start-date" className="mb-3">
                        <label htmlFor="startDate" className="text-left mr-20 font-bold ">Start Date:</label>
                        <input type="date" className="border-black border-2" id="startDate" value={taskStart} onChange={(event) => setStartDate(event.target.value)} />
                    </div>
                    <div id="task-end-date" className="mb-3">
                        <label htmlFor="endDate" className="text-left mr-20 font-bold ">End Date:</label>
                        <input type="date" className="border-black border-2" id="endDate" value={taskEnd} onChange={(event) => setEndDate(event.target.value)} />

                    </div>
                    <div className="mb-3">
                        <button title="Update task details" type="submit" className="rounded-full bg-lime-300 hover:bg-slate-900 hover:text-slate-50 border-2 border-white px-5 py-1">Update</button>
                        <button title="Reset form" type="reset" className="rounded-full bg-lime-300 hover:bg-slate-900 hover:text-slate-50 border-2 border-white px-5 py-1">Reset</button>
                        <button type="button" className="rounded-full bg-lime-300 hover:bg-slate-900 hover:text-slate-50 border-2 border-white px-5 py-1" onClick={() => { navigate('/') }}>Back to Home</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
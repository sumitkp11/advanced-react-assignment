import { useDispatch, useSelector } from "react-redux";
import { fetchTaskApiData, deleteTaskById } from "../redux/taskSlice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export default function DisplayTasks() {
    let [sortIcon, setSortIcon] = useState('');
    let [currentSelectedColumn, setSelectedColumn] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { tasks, loading, error } = useSelector((state) => state.data);
    const [taskList, setTaskList] = useState(tasks);

    /**
     * 
     * @param {*} task 
     */
    const openTaskDetails = (task) => {
        navigate('/details', {
            state: {
                taskId: task.id,
                taskTitle: task.title,
                taskAssign: task.assignedTo,
                taskStatus: task.status,
                taskPriority: task.priority,
                taskStart: task.startDate,
                taskEnd: task.endDate
            }
        });
    };

    /**
     * 
     * @param {*} taskId 
     */
    const deleteTask = (taskId) => {
        if (window.confirm("Are you sure you want to delete?")) {
            dispatch(deleteTaskById(taskId));
        }
    };

    /**
     * @description function to sort table data based on columns header selection
     * @param {*} input 
     * @param {*} sortOrder 
     * @example ▲ - ascending order, ▼ - descending order
     */
    const sortColumnByInput = (column) => {
        setSelectedColumn(column);
        setSortIcon(sortIcon === "▲" ? "▼" : "▲");
        const sortedItems = [...taskList].sort((a, b) => sortIcon === "▲"? b[column].localeCompare(a[column]) :  a[column].localeCompare(b[column]));
        // const sortedItems = [...taskList].sort((a, b) => sortIcon === "▲"? a['title'].localeCompare(b['title']) :  b['title'].localeCompare(a['title']));
        console.log("sorted", sortedItems)
        setTaskList(sortedItems);
    }

    useEffect(() => {
        dispatch(fetchTaskApiData());
    }, [dispatch]);



    if (loading) return <div>Loading...</div>
    if (error) return <div>Error: {error}</div>

    return (
        <div className="flex items-center justify-center h-auto m-5">
            {taskList.length > 0 ?
                <div>
                    <table className="border-separate border-spacing-2 border border-slate-500 table-auto">
                        <thead>
                            <tr className="">
                                <th className="hover:bg-slate-200 hover:text-black border border-slate-600 bg-slate-600 text-white w-40 click: " onClick={() => sortColumnByInput("title")}>{currentSelectedColumn !== "title" ? "Title" : `Title ${sortIcon}`} </th>
                                <th className="hover:bg-slate-200 hover:text-black border border-slate-600 bg-slate-600 text-white w-40" onClick={() => sortColumnByInput("assignedTo")}>{currentSelectedColumn !== "assignedTo" ? "Assigned To" : `Assigned To ${sortIcon}`}</th>
                                <th className="hover:bg-slate-200 hover:text-black border border-slate-600 bg-slate-600 text-white w-40" onClick={() => sortColumnByInput("status")}>{currentSelectedColumn !== "status" ? "Status" : `Status ${sortIcon}`}</th>
                                <th className="hover:bg-slate-200 hover:text-black border border-slate-600 bg-slate-600 text-white w-40" onClick={() => sortColumnByInput("priority")}>{currentSelectedColumn !== "priority" ? "Priority" : `Priority ${sortIcon}`}</th>
                                <th className="hover:bg-slate-200 hover:text-black border border-slate-600 bg-slate-600 text-white w-40">{currentSelectedColumn !== "startDate" ? "Start Date" : `Start Date ${sortIcon}`}</th>
                                <th className="hover:bg-slate-200 hover:text-black border border-slate-600 bg-slate-600 text-white w-40">{currentSelectedColumn !== "endDate" ? "End Date" : `End Date ${sortIcon}`}</th>
                                <th className="border border-slate-600 bg-slate-600 text-white w-40">Actions</th>

                            </tr>
                        </thead>
                        <tbody>
                            {taskList.map((task) => (
                                <tr key={task.id} className="hover:bg-blue-200" onClick={() => openTaskDetails(task)}>
                                    <td className="border border-slate-700 text-center">{task.title}</td>
                                    <td className="border border-slate-700 text-center">{task.assignedTo}</td>
                                    <td className="border border-slate-700 text-center">{task.status}</td>
                                    <td className="border border-slate-700 text-center">{task.priority}</td>
                                    <td className="border border-slate-700 text-center">{task.startDate}</td>
                                    <td className="border border-slate-700 text-center">{task.endDate}</td>
                                    <td className="border border-slate-700"><button className="rounded-full hover:bg-slate-300 hover:text-slate-900 border-2 border-white px-5 mb-2" onClick={(event) => { event.stopPropagation(); navigate('/edit'); }}>📝</button><button id="delete-btn" className="rounded-full hover:bg-slate-300 hover:text-slate-900 border-2 border-white px-5" onClick={(event) => { event.stopPropagation(); deleteTask(task.id); }}>❌</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div> : <div className="flex font-bold text-xl text-center mt-4"><h2>No task to show. Please wait for the books to load</h2></div>}
        </div>
    )
}
import { useLocation, Link } from "react-router-dom";




export default function TaskDetails() {
    const location = useLocation();

    const {
        taskId, 
        taskTitle, 
        taskAssign,
        taskStatus,
        taskPriority,
        taskStart,
        taskEnd } = location.state || {};

    return (
        <div >
            <h2 className="font-bold text-xl text-center mt-4">Task Details for <span className="text-blue-600">{taskAssign}</span></h2>
            <div className="flex items-center justify-center h-auto m-5">
            <table className="border-separate border-spacing-2 border border-slate-500 table-auto">
                <tr>
                    <th className="border border-slate-600 bg-slate-600 text-white w-40">Title</th>
                    <td className="border border-slate-700 text-center">{taskTitle}</td>
                </tr>
                <tr>
                    <th className="border border-slate-600 bg-slate-600 text-white w-40">Assigned To</th>
                    <td className="border border-slate-700 text-center">{taskAssign}</td>
                </tr>
                <tr>
                    <th className="border border-slate-600 bg-slate-600 text-white w-40">Status</th>
                    <td className="border border-slate-700 text-center">{taskStatus}</td>
                </tr>
                <tr>
                    <th className="border border-slate-600 bg-slate-600 text-white w-40">Priority</th>
                    <td className="border border-slate-700 text-center">{taskPriority}</td>
                </tr>
                <tr>
                    <th className="border border-slate-600 bg-slate-600 text-white w-40">Start Date</th>
                    <td className="border border-slate-700 text-center">{taskStart}</td>
                </tr>
                <tr>
                    <th className="border border-slate-600 bg-slate-600 text-white w-40">End Date</th>
                    <td className="border border-slate-700 text-center">{taskEnd}</td>
                </tr>
            </table>
            </div>
            <div><Link to="/" className="rounded-full hover:bg-blue-200 hover:text-slate-900 border-2 border-black px-5 py-1 m-5">Go Back</Link></div>
            
        </div>
    )
}
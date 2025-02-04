import { Link } from "react-router-dom"

export default function Header() {
    return (
        <div className="border-b-2 grid grid-cols-2 bg-blue-600 h-auto">
            <div className="text-white m-4 font-bold text-2xl">
                <Link to="/">Task Manager App</Link>
            </div>
            <div className="m-4 font-bold text-2xl text-right w-auto">
            <Link to="/info">Project Info</Link>
                </div>       
        </div>
    )
}
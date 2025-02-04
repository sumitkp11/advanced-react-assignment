import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import taskManagerStore from "./redux/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import DisplayTasks from "./components/DisplayTasks";
import EditTask from "./components/EditTask";
import TaskDetails from "./components/TaskDetails";
import ProjectInfo from "./components/ProjectInfo";

createRoot(document.getElementById('root')).render(
  <Provider store={taskManagerStore}>
    <BrowserRouter>
      <Header />
        <Routes>
          <Route exact path="/" element={<DisplayTasks />} />
          <Route exact path="/edit" element={<EditTask />} />
          <Route exact path="/details" element={<TaskDetails />} />
          <Route exact path="/info" element={<ProjectInfo />} />
        </Routes>
    </BrowserRouter>
  </Provider>
)
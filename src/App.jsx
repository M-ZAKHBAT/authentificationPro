import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./component/HomePage";
import RegisterPage from "./component/RegisterPage";
import TasksPage from "./component/TasksPage";
// import UpdatePage from "./component/UpdatePage";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/task" element={<TasksPage />}></Route>
        {/* <Route exact path="/update/:id" element={<UpdatePage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

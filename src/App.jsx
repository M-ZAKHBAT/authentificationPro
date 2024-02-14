import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./component/HomePage";
import RegisterPage from "./component/RegisterPage";
import TasksPage from "./component/TasksPage";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/task" element={<TasksPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

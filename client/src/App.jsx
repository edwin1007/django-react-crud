
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import {TasksPage} from './pages/TasksPage';
import { TaskFormPage } from "./pages/TaskFormPage";
import { Navegation } from "./components/Navegation";

function App() {
    return (
      <BrowserRouter>
        <Navegation />

        <Routes>
            <Route path="/" element={<Navigate to="/tasks" />} />
            <Route path="/tasks" element={<TasksPage />} />
            <Route path="/tasks-create" element={<TaskFormPage />} />
        </Routes>
      </BrowserRouter>
    );  
  }

export default App 
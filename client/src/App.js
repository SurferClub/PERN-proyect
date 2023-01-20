import { BrowserRouter, Route, Routes } from "react-router-dom";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Menu from "./components/Navbar";
import { Container } from "@mui/material";

function App() {
  return (
    <BrowserRouter>
        <Menu />
      <Container>
        <Routes>
          <Route path="/task/new" element={<TaskForm />}></Route>
          <Route path="/" element={<TaskList />}></Route>
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;

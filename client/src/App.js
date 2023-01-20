import {BrowserRouter, Route, Routes} from 'react-router-dom'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/task/new' element={<TaskForm/>}></Route>
      <Route path='/' element={<TaskList/>}></Route>
    </Routes>
    
    </BrowserRouter>
  )
}

export default App
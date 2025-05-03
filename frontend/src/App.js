import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import DashboardPage from './pages/DashboardPage';
import DepartmentPage from './pages/DepartmentPage';
import MembersPage from './pages/MembersPage';
import ProjectsPage from './pages/ProjectsPage';
import TaskPage from './pages/TaskPage';

function App() {
  return (
<>

<BrowserRouter>
<Routes>
  <Route path='/' element={<DashboardPage/>}/>
  <Route path='/project' element={<ProjectsPage/>}/>
  <Route path='/task' element={<TaskPage/>}/>
  <Route path='/employees' element={<MembersPage/>}/>
  <Route path='/department' element={<DepartmentPage/>}/>

</Routes>
</BrowserRouter>



</>
  );
}


export default App;

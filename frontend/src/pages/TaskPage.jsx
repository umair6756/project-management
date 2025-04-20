import React from 'react'
import Sidebar from '../components/common/Sidebar';
import { useState } from 'react';

import { FaBars } from 'react-icons/fa';
import ProjectsSection from '../components/Projects/ProjectsCard';
import TaskManagement from '../components/Tasks/TaskManagement';
const TaskPage = () => {

      const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div className="flex">
    <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
    <div className="flex-1">
      <div className="md:hidden p-4 flex justify-end">
        <button onClick={() => setShowSidebar(!showSidebar)}>
          <FaBars className="text-2xl" />
        </button>
      </div>
      <TaskManagement/>
    </div>
  </div>
  )
}

export default TaskPage
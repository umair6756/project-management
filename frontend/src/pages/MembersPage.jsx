import React from 'react'
import Sidebar from '../components/common/Sidebar';
import { useState } from 'react';

import { FaBars } from 'react-icons/fa';
import EmployeCard from '../components/Employ/EmployeCard';
const MembersPage = () => {
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
        <EmployeCard/>
      </div>
    </div>
  )
}

export default MembersPage
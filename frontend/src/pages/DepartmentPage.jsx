
import { useState } from 'react';
import Sidebar from '../components/common/Sidebar';

import { FaBars } from 'react-icons/fa';
import DepartmentTable from '../components/Department/DepartmentTable';
// import DepartmentTable from '../components/Department/DepartmentTable';

const DepartmentPage = () => {
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
         <DepartmentTable/>
      </div>
    </div>
  );
}

export default DepartmentPage
// DashboardPage.jsx
import { useState } from 'react';
import Sidebar from '../components/common/Sidebar';
import MainContent from '../components/Dashboard/MainContent';
import { FaBars } from 'react-icons/fa';

export default function DashboardPage() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="flex">
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <div className="flex-1">
        <div className="md:hidden p-4">
          <button onClick={() => setShowSidebar(!showSidebar)}>
            <FaBars className="text-2xl" />
          </button>
        </div>
        <MainContent />
      </div>
    </div>
  );
}
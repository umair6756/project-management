import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHome, FaProjectDiagram, FaTicketAlt, FaUsers, FaChevronDown, FaBars } from 'react-icons/fa';

const Sidebar = ({ showSidebar, setShowSidebar }) => {
  const [dropdown, setDropdown] = useState({ dashboard: false, projects: false });

  const handleDropdown = (key) => {
    setDropdown((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className={`fixed top-0 left-0 h-full z-50 bg-purple-800 text-white w-64 p-4 transition-transform duration-300 ease-in-out ${showSidebar ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
      <div className="text-2xl font-bold mb-6 flex items-center gap-2">
        <span className="bg-white p-2 rounded-full text-purple-800"><FaHome /></span> My-Task
      </div>
      <nav>
        <div>
          <button onClick={() => handleDropdown('dashboard')} className="flex justify-between items-center w-full py-2 px-3 hover:bg-purple-700 rounded">
            <span className="flex items-center gap-2"><FaHome /> Dashboard</span>
            <FaChevronDown className={`transform transition-transform duration-300 ${dropdown.dashboard ? 'rotate-180' : ''}`} />
          </button>
          <AnimatePresence>
            {dropdown.dashboard && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="ml-6"
              >
                <a href="#" className="block py-1">Hr Dashboard</a>
                <a href="#" className="block py-1">Project Dashboard</a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div>
          <button onClick={() => handleDropdown('projects')} className="flex justify-between items-center w-full py-2 px-3 hover:bg-purple-700 rounded">
            <span className="flex items-center gap-2"><FaProjectDiagram /> Projects</span>
            <FaChevronDown className={`transform transition-transform duration-300 ${dropdown.projects ? 'rotate-180' : ''}`} />
          </button>
          <AnimatePresence>
            {dropdown.projects && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="ml-6"
              >
                <a href="#" className="block py-1">Project A</a>
                <a href="#" className="block py-1">Project B</a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <a href="#" className="flex items-center gap-2 py-2 px-3 hover:bg-purple-700 rounded"><FaTicketAlt /> Tickets</a>
        <a href="#" className="flex items-center gap-2 py-2 px-3 hover:bg-purple-700 rounded"><FaUsers /> Our Clients</a>
      </nav>
    </div>
  );
};

export default Sidebar;
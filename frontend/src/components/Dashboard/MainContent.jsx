// import { FaBell, FaCog, FaUserCircle } from 'react-icons/fa';

// const MainContent = () => {
//   return (
//     <main className="flex-1 p-6 bg-gray-100 min-h-screen md:ml-64">
//       <div className="flex justify-between items-center mb-4">
//         <input type="text" placeholder="Search" className="px-4 py-2 border rounded-md w-1/2" />
//         <div className="flex items-center gap-4">
//           <FaBell className="text-xl" />
//           <FaCog className="text-xl" />
//           <FaUserCircle className="text-2xl" />
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
//         <div className="bg-yellow-100 p-4 rounded shadow">
//           <h4>Total Task</h4>
//           <p className="text-2xl font-bold">122</p>
//         </div>
//         <div className="bg-blue-100 p-4 rounded shadow">
//           <h4>Completed Task</h4>
//           <p className="text-2xl font-bold">376</p>
//         </div>
//         <div className="bg-green-100 p-4 rounded shadow">
//           <h4>Progress Task</h4>
//           <p className="text-2xl font-bold">74</p>
//         </div>
//       </div>

//       <div className="bg-white p-6 rounded shadow mb-6">
//         <h2 className="text-xl font-bold mb-2">Dylan Hunter</h2>
//         <p className="text-gray-600 mb-4">Welcome back Dylan Hunter. Integer molestie, arcu non porta sollicitudin, arcu felis aliquam urna...</p>
//         <button className="bg-pink-500 text-white px-4 py-2 rounded">Free Inquire</button>
//       </div>

//       <div className="bg-blue-100 p-6 rounded shadow">
//         <h3 className="text-lg font-bold mb-2">Create Project Credentials</h3>
//         <input type="text" placeholder="Enter Username" className="w-full mb-2 p-2 rounded" />
//         <input type="password" placeholder="Enter Password" className="w-full mb-2 p-2 rounded" />
//         <input type="password" placeholder="Confirm Password" className="w-full mb-2 p-2 rounded" />
//         <button className="bg-blue-600 text-white px-4 py-2 rounded">Create Credentials</button>
//       </div>
//     </main>
//   );
// };


// export default MainContent;


















// Main.jsx

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


import { BsClipboardData, BsCheck2Circle } from "react-icons/bs";
import { HiOutlineChartBar } from "react-icons/hi";
import IncomeChart from "./IncomeChart";
import ProjectTimeline from "./ProjectTimeline";
import ProjectTable from "./ProjectTable";
import TopNavbar from "../common/TopNavbar";

export default function MainContent() {
  return (
    <div className="flex-1 p-6 bg-gray-100 min-h-screen md:ml-64 ">
      {/* Top Navbar */}
      <TopNavbar/>

      {/* Task Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white shadow-lg rounded-2xl p-6 flex items-center gap-4 border-l-4 border-yellow-500">
          <div className="bg-yellow-100 text-yellow-600 p-3 rounded-full">
            <BsClipboardData size={24} />
          </div>
          <div>
            <h4 className="text-sm text-gray-500 font-medium">Total Task</h4>
            <p className="text-2xl font-semibold text-gray-800">122</p>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-2xl p-6 flex items-center gap-4 border-l-4 border-blue-500">
          <div className="bg-blue-100 text-blue-600 p-3 rounded-full">
            <BsCheck2Circle size={24} />
          </div>
          <div>
            <h4 className="text-sm text-gray-500 font-medium">Completed Task</h4>
            <p className="text-2xl font-semibold text-gray-800">376</p>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-2xl p-6 flex items-center gap-4 border-l-4 border-teal-500">
          <div className="bg-teal-100 text-teal-600 p-3 rounded-full">
            <HiOutlineChartBar size={24} />
          </div>
          <div>
            <h4 className="text-sm text-gray-500 font-medium">Progress Task</h4>
            <p className="text-2xl font-semibold text-gray-800">74</p>
          </div>
        </div>
      </div>

      {/* Welcome + Credentials Form */}
      <div className="mt-8 flex flex-col lg:flex-row gap-8">
        <div className="bg-white rounded-2xl shadow-lg p-6 flex-1">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Dylan Hunter</h2>
          <p className="text-gray-600 mb-4">
            Welcome back Dylan Hunter. Integer molestie, arcu non porta sollicitudin, arcu felis aliquam urna, placerat maximus lorem urna commodo sem. Pellentesque venenatis leo quam, sed mattis sapien lobortis ut. Placerat maximus lorem urna commodo sem.
          </p>
          <button className="bg-rose-500 hover:bg-rose-600 text-white px-4 py-2 rounded-lg shadow transition duration-300">
            Free Inquire
          </button>
        </div>

        <div className="bg-blue-100 rounded-2xl shadow-lg p-6 w-full lg:w-96">
          <h3 className="text-lg font-bold text-blue-800 mb-2">Create Project Credentials</h3>
          <p className="text-sm text-blue-700 mb-4">Create a project credentials now and never miss</p>
          <form className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Enter Username"
              className="px-4 py-2 rounded-md border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="Enter Password"
              className="px-4 py-2 rounded-md border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="px-4 py-2 rounded-md border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md shadow-md transition duration-300">
              Create Credentials
            </button>
          </form>
        </div>
      </div>


      <div className="p-4 space-y-6 md:space-y-0 md:space-x-6 md:flex">
      <IncomeChart />
      <ProjectTimeline />
    </div>

    <div className="">
  <ProjectTable />
</div>
    </div>
  );
}
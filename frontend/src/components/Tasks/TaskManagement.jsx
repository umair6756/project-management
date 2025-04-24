import React from "react";
import TaskBoard from "./TaskBoard";
import TopNavbar from "../common/TopNavbar";
import CreateButton from "../common/CreateButton";

const TaskManagement = () => {
  return (
    <div className="bg-[#f5f7fb] min-h-screen p-6 md:p-10 font-sans md:ml-64">
      <TopNavbar/>
      <CreateButton title="Create Task"/>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Task Progress */}
        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <h3 className="font-semibold text-lg text-gray-800 mb-5">Task Progress</h3>
          {[
            { label: "UI/UX Design", value: 2, total: 7, color: "bg-purple-200" },
            { label: "Website Design", value: 1, total: 3, color: "bg-cyan-300" },
            { label: "Quality Assurance", value: 2, total: 7, color: "bg-green-200" },
            { label: "Development", value: 1, total: 5, color: "bg-red-200" },
            { label: "Testing", value: 1, total: 8, color: "bg-orange-200" },
          ].map((task, index) => (
            <div key={index} className="mb-5">
              <div className="flex justify-between text-sm font-medium text-gray-700 mb-1">
                <span>{task.label}</span>
                <span>0{task.value}/0{task.total}</span>
              </div>
              <div className="w-full bg-gray-200 h-2.5 rounded-full">
                <div className={`${task.color} h-2.5 rounded-full`} style={{ width: `${(task.value / task.total) * 100}%` }}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="bg-white border border-gray-200 rounded-lg px-5 py-9">
          <h3 className="font-semibold text-lg text-gray-800 mb-5">Recent Activity</h3>
          <div className="border-l-[1px] border-gray-300">
          {[
            { initials: "RH", name: "Rechard Add New Task", time: "20Min ago", dot: "bg-green-400" },
            { initials: "SP", name: "Shipa Review Completed", time: "40Min ago", dot: "bg-blue-400" },
            { initials: "MR", name: "Mora Task To Completed", time: "1Hr ago", dot: "bg-red-400" },
          ].map((item, index) => (
            <div key={index} className="group flex items-start space-x-4 mb-6 border-b-[1px] border-gray-300 pb-5  ">
              <span className={`w-2 h-2 mt-2 border-2 border-gray-300 relative right-1 rounded-full group-hover:w-4 group-hover:h-4 group-hover:right-2 transition-3 ${item.dot}`}></span>
              <div className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full text-sm font-semibold text-white" style={{ backgroundColor: item.dot.replace('bg-', '') }}>
                {item.initials}
              </div>
              <div>
                <div className="text-sm font-medium text-gray-800">{item.name}</div>
                <div className="text-xs text-gray-500">{item.time}</div>
              </div>
            </div>
          ))}
          </div>
        </div>

        {/* Allocated Task Members */}
        <div className="bg-white border border-gray-200 rounded-lg px-5 py-9" >
          <h3 className="font-semibold text-lg text-gray-800 mb-5">Allocated Task Members</h3>
          {[
            { name: "Lucinda Massey", role: "UI/UX Designer", img: "https://via.placeholder.com/40x40?text=L" },
            { name: "Ryan Nolan", role: "Website Designer", img: "https://via.placeholder.com/40x40?text=R" },
            { name: "Oliver Black", role: "App Developer", img: "https://via.placeholder.com/40x40?text=O" },
          ].map((member, index) => (
            <div key={index} className="flex justify-between items-center mb-6 border-b-[1px] border-gray-300 pb-5">
              <div className="flex items-center space-x-4">
                <img src={member.img} alt={member.name} className="w-10 h-10 rounded-full" />
                <div>
                  <div className="font-semibold text-sm text-gray-800">{member.name}</div>
                  <div className="text-xs text-gray-500">{member.role}</div>
                </div>
              </div>
              <button className="text-sm bg-pink-200 text-gray-800 px-3 py-1 rounded">Remove</button>
            </div>
          ))}
        </div>
      </div>



      <TaskBoard/>
    </div>
  );
}




export default TaskManagement
import React from "react";

import employImg from '../bg1.jpg'

const employees = [
  {
    name: "Luke Short",
    role: "UI/UX Designer",
    description:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices",
    tasks: 4,
    rating: 4.5,
    files: 4,
    tagColor: "bg-purple-500",
    tagText: "UI/UX Designer",
    avatarColor: "bg-red-500",
    
  },
  {
    name: "Lillian Powell",
    role: "Quality Assurance",
    description:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices",
    tasks: 0,
    rating: 0,
    files: 0,
    tagColor: "bg-green-400",
    tagText: "Quality Assurance",
    image: ".",
  },
  {
    name: "Rachel Parsons",
    role: "Website Designer",
    description:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices",
    tasks: 10,
    rating: 4,
    files: 15,
    tagColor: "bg-cyan-500",
    tagText: "Website Designer",
    avatarColor: "bg-red-500",
  },
  {
    name: "John Hardacre",
    role: "Developer",
    description:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices",
    tasks: 12,
    rating: 3,
    files: 25,
    tagColor: "bg-orange-400",
    tagText: "Developer",
    avatarColor: "bg-yellow-500",
  },
];

const EmployeCard = () => {
  return (
    <div className="grid sm:grid-cols-2 gap-6 p-6 bg-gray-100 min-h-screen md:ml-64">
      {employees.map((emp, index) => (
        <div key={index} className="bg-white rounded-lg shadow overflow-hidden flex flex-col md:flex-row items-center md:items-start">
          
          {/* Left section with image and stats */}
          <div className="flex flex-col md:pl-8 md:py-6 pt-6 w-40 ">
            <div className="w-30 h-31 flex items-center rounded-full mb-4 bg-gray-500">
             <img src={employImg} className="rounded-full p-1 w-full"/>
            </div>
            <div className="flex justify-center gap-5 text-center text-xs text-gray-600 ">
              <div>
                <div className="font-bold">{emp.tasks}</div>
                <div>📋</div>
              </div>
              <div>
                <div className="font-bold">{emp.rating}</div>
                <div>⭐</div>
              </div>
              <div>
                <div className="font-bold">{emp.files}</div>
                <div>📄</div>
              </div>
            </div>
          </div>

          {/* Vertical divider */}
<div className="md:border-l-[1px] md:border-gray-300 md:ml-6 md:my-5 h-[85%]"></div>

          {/* Right section with details */}
          <div className="flex-1 p-6">
          <div className="flex flex-col items-center md:items-start">
  <h2 className="font-bold text-lg text-gray-800">{emp.name}</h2>
  <span className={`text-xs text-white px-2 py-1 my-1 rounded ${emp.tagColor}`}>
    {emp.tagText}
  </span>
</div>

<div className="md:border-b-[1px] border-gray-300 my-5"></div>

            <p className="text-gray-700 mt-2 text-sm">{emp.description}</p>
            <div className="flex gap-2 mt-4">
              <button className="bg-purple-800 hover:bg-purple-700 text-white text-sm px-4 py-2 rounded flex items-center gap-2">
                ➕ Add Task
              </button>
              <button className="bg-purple-800 hover:bg-purple-700 text-white text-sm px-4 py-2 rounded flex items-center gap-2">
                👤 Profile
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}



export default EmployeCard
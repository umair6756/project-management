import React from "react";
import { FaPaintBrush, FaMobileAlt, FaEdit, FaTrash, FaPaperclip, FaClock, FaUsers, FaComments } from "react-icons/fa";
import TopNavbar from "../common/TopNavbar";
import CreateButton from "../common/CreateButton";
import { BsPlusCircleFill } from "react-icons/bs";

const projects = [
  {
    icon: <FaPaintBrush className="text-purple-500 text-2xl" />,
    tag: "Social Geek Made",
    title: "UI/UX Design",
    attachments: 5,
    duration: "4 Month",
    members: 5,
    comments: 10,
    daysLeft: 35,
    avatars: ["#FBBF24", "#FBBF24", "#FBBF24", "#FBBF24", "#FBBF24"]
  },
  {
    icon: <FaEdit className="text-blue-400 text-2xl" />,
    tag: "Practice to Perfect",
    title: "Website Design",
    attachments: 4,
    duration: "1 Month",
    members: 4,
    comments: 3,
    daysLeft: 15,
    avatars: ["#FBBF24", "#FBBF24", "#FBBF24", "#FBBF24"]
  },
  {
    icon: <FaMobileAlt className="text-yellow-400 text-2xl" />,
    tag: "Rhinestone",
    title: "App Development",
    attachments: 7,
    duration: "2 Month",
    members: 6,
    comments: 5,
    daysLeft: 25,
    avatars: ["#FBBF24", "#FBBF24", "#FBBF24", "#FBBF24", "#FBBF24", "#FBBF24"]
  },
];

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 w-full max-w-xs relative shadow-sm">
      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white rounded-xl p-3 shadow-md">
        {project.icon}
      </div>
      <div className="mt-6 text-center">
        <p className="text-xs text-gray-400 font-medium mb-1">{project.tag}</p>
        <div className="flex justify-between">
            <div>
            <h2 className="text-xl font-semibold text-black mt-3">{project.title}</h2>

            </div>
            <div className="flex justify-end gap-0 px-2 mt-3">
        <button className="text-green-500 border-[1px] border-gray-300 p-1 py-[6px] px-[9px] hover:bg-red-500 hover:text-white transition-transform duration-200 ">
          <FaEdit className=""/>
        </button>
        <button className="text-red-500  border-[1px] border-gray-300 py-[6px] px-[9px] hover:bg-red-500 hover:text-white transition-transform duration-200">
          <FaTrash />
        </button>
      </div>
        </div>
        <div className="flex items-center mb-5 mt-5">
  <div className="flex -space-x-3">
    {project.avatars.map((color, i) => (
      <div
        key={i}
        className="w-6 h-6 rounded-full border-2 border-white"
        style={{ backgroundColor: color }}
      ></div>
    ))}
    <BsPlusCircleFill className="text-purple-800 text-xl ml-3" />
  </div>
</div>

      </div>
      <div className="text-sm text-gray-700 space-y-1 px-2">
        <div className="flex justify-between">
          <div className="flex items-center gap-1">
            <FaPaperclip /> <span>{project.attachments} Attach</span>
          </div>
          <div className="flex items-center gap-1">
            <FaClock /> <span>{project.duration}</span>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-1">
            <FaUsers /> <span>{project.members} Members</span>
          </div>
          <div className="flex items-center gap-1">
            <FaComments /> <span>{project.comments}</span>
          </div>
        </div>
      </div>

      <div className="border-b-[1px] border-gray-400 my-5"></div>
      <div className="mt-3 px-2">
        <div className="flex justify-between">
            <div>
            <p className="text-sm font-medium text-gray-700 mb-1">Progress</p>

            </div>

            <div className="text-right text-xs font-semibold bg-purple-100 rounded-md p-2 mb-3">
          ⏱ {project.daysLeft} Days Left
        </div>
        </div>
        <div className="h-2 bg-gray-200 rounded-full w-full">
          <div
            className="bg-pink-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${100 - project.daysLeft}%` }}
          ></div>
        </div>

      </div>

    </div>
  );
};

const ProjectsSection = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6 md:ml-64">
      <TopNavbar/>

      <CreateButton title="Create project"/>

   

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4 ">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;

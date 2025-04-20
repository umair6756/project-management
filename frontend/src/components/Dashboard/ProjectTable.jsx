import React from "react";
import Progress from "./Progress";
import {
  FaUserTie,
  FaChartLine,
  FaFolderOpen,
  FaProjectDiagram,
} from "react-icons/fa";

// Stats data
const stats = [
  {
    icon: <FaFolderOpen className="text-white text-2xl" />, // Total Projects
    label: "Total Projects",
    value: "550",
    bg: "bg-purple-800",
  },
  {
    icon: <FaProjectDiagram className="text-white text-2xl" />, // Coming Projects
    label: "Coming Projects",
    value: "210",
    bg: "bg-purple-700",
  },
  {
    icon: <FaChartLine className="text-white text-2xl" />, // Progress Projects
    label: "Progress Projects",
    value: "8456 Files",
    bg: "bg-purple-600",
  },
  {
    icon: <FaFolderOpen className="text-white text-2xl" />, // Finished Projects
    label: "Finished Projects",
    value: "88 Files",
    bg: "bg-purple-900",
  },
];

// Project data
const data = [
  {
    title: "Box",
    dateStart: "23-02-2021",
    deadline: "1 Month",
    leader: "Peter",
    completion: 85,
    stage: "MEDIUM",
  },
  {
    title: "Fast Cad",
    dateStart: "14-04-2021",
    deadline: "2 Month",
    leader: "Benjamin",
    completion: 76,
    stage: "MEDIUM",
  },
  {
    title: "Gob Geeklords",
    dateStart: "16-03-2021",
    deadline: "10 Month",
    leader: "Evan",
    completion: 65,
    stage: "LOW",
  },
  {
    title: "Java Dalia",
    dateStart: "17-03-2021",
    deadline: "8 Month",
    leader: "Connor",
    completion: 48,
    stage: "MEDIUM",
  },
  {
    title: "Practice to Perfect",
    dateStart: "12-02-2021",
    deadline: "1 Month",
    leader: "Colin",
    completion: 80,
    stage: "LOW",
  },
  {
    title: "Rhinestone",
    dateStart: "18-02-2021",
    deadline: "2 Month",
    leader: "Adam",
    completion: 90,
    stage: "HIGH",
  },
];

export default function ProjectTable() {
  return (
    <div className="p-4 md:p-8 space-y-8">
    {/* Cards Section */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((item, index) => (
        <div
          key={index}
          className={`flex items-center justify-between p-4 rounded-lg text-white ${item.bg}`}
        >
          <div className="text-3xl">{item.icon}</div>
          <div className="text-right">
            <p className="text-sm font-light">{item.label}</p>
            <p className="text-lg font-bold">{item.value}</p>
          </div>
        </div>
      ))}
    </div>

    {/* Project Table Section */}
    <div className="bg-white shadow-md rounded-lg">
      <div className="p-4 border-b border-gray-200">
        <h2 className="font-semibold text-lg">Project Information</h2>
      </div>

      {/* Table Scrollable Container */}
      <div className="overflow-x-auto w-full">
        <div className="overflow-x-auto inline-block min-w-full align-middle">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date Start
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Deadline
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Leader
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Completion
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Stage
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {data.map((project, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">{project.title}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{project.dateStart}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{project.deadline}</td>
                  <td className="px-6 py-4 whitespace-nowrap flex items-center gap-2">
                    <FaUserTie className="text-purple-700" />
                    {project.leader}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap w-40">
                    <div className="relative">
                      {/* Progress Bar */}
                      <Progress value={project.completion} className="w-full" />
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`text-xs font-semibold px-2 py-1 rounded-full text-white ${
                        project.stage === "HIGH"
                          ? "bg-red-500"
                          : project.stage === "MEDIUM"
                          ? "bg-yellow-500"
                          : "bg-green-500"
                      }`}
                    >
                      {project.stage}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  );
}

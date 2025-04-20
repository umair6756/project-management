import React from "react";
import { FaFlag, FaComments, FaPaperclip, FaMale, FaFemale } from "react-icons/fa";

const tasks = {
  "In Progress": [
    {
      title: "Quality Assurance",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id nec scelerisque massa.",
      date: "28 Mar",
      comments: 5,
      attachments: 5,
      priority: "MEDIUM",
      statusColor: "border-yellow-400",
      tag: "Box of Crayons",
      tagColor: "bg-pink-200",
      labelColor: "bg-green-200 text-green-900",
      avatars: ["male", "female"]
    },
    {
      title: "Website Design",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id nec scelerisque massa.",
      date: "12 Feb",
      comments: 3,
      attachments: 4,
      priority: "LOW",
      statusColor: "border-yellow-400",
      tag: "Practice to Perfect",
      tagColor: "bg-purple-200",
      labelColor: "bg-cyan-300 text-cyan-900",
      avatars: ["female"]
    }
  ],
  "Needs Review": [
    {
      title: "UI/UX Design",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id nec scelerisque massa.",
      date: "03 Apr",
      comments: 7,
      attachments: 2,
      priority: "MEDIUM",
      statusColor: "border-pink-300",
      tag: "Social Geek Made",
      tagColor: "bg-pink-200",
      labelColor: "bg-purple-200 text-purple-900",
      avatars: ["male", "female"]
    },
    {
      title: "UI/UX Design",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id nec scelerisque massa.",
      date: "25 Nov",
      comments: 4,
      attachments: 5,
      priority: "MEDIUM",
      statusColor: "border-pink-300",
      tag: "Social Geek Made",
      tagColor: "bg-pink-200",
      labelColor: "bg-purple-200 text-purple-900",
      avatars: ["male", "female"]
    }
  ],
  "Completed": [
    {
      title: "UI/UX Design",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id nec scelerisque massa.",
      date: "13 Jan",
      comments: 4,
      attachments: 1,
      priority: "MEDIUM",
      statusColor: "border-green-500",
      tag: "Social Geek Made",
      tagColor: "bg-pink-200",
      labelColor: "bg-purple-200 text-purple-900",
      avatars: ["female"]
    },
    {
      title: "UI/UX Design",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id nec scelerisque massa.",
      date: "02 Feb",
      comments: 1,
      attachments: 5,
      priority: "MEDIUM",
      statusColor: "border-green-500",
      tag: "Social Geek Made",
      tagColor: "bg-pink-200",
      labelColor: "bg-purple-200 text-purple-900",
      avatars: ["male", "female"]
    }
  ]
};

const AvatarIcon = ({ type }) => {
  const base = "w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center border-2 border-white text-sm text-gray-700";
  return (
    <div className={base}>
      {type === "male" ? <FaMale /> : <FaFemale />}
    </div>
  );
};

export default function TaskBoard() {
  return (
    <div className="min-h-screen bg-[#f5f7fb] p-4 md:p-10 font-sans">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Object.entries(tasks).map(([status, cards]) => (
          <div key={status}>
            <h2 className="font-semibold text-gray-800 text-lg mb-4">{status}</h2>
            <div className="space-y-6">
              {cards.map((card, idx) => (
                <div key={idx} className={`bg-white border rounded-lg shadow-sm ${card.statusColor} border-b-4 p-4`}>
                  <div className="flex justify-between items-center mb-2">
                    <span className={`text-sm font-semibold px-2 py-1 rounded ${card.labelColor}`}>{card.title}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs bg-yellow-300 px-2 py-0.5 rounded text-yellow-800 font-bold">
                        {card.priority}
                      </span>
                      <div className="flex -space-x-2">
                        {card.avatars.map((type, i) => (
                          <AvatarIcon key={i} type={type} />
                        ))}
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 mb-4 leading-snug text-justify">
                    {card.description}
                  </p>

                  <div className="flex justify-between items-center text-xs text-gray-600">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <FaFlag /> {card.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaComments /> {card.comments}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaPaperclip /> {card.attachments}
                      </span>
                    </div>
                    <span className={`text-xs font-semibold px-3 py-1 rounded ${card.tagColor} text-gray-800`}>
                      {card.tag}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

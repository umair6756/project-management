import React from 'react';
// import { MoreVertical } from 'lucide-react';
import { FaGripVertical } from 'react-icons/fa';
const ChatSection = () => {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-lg font-semibold">Grace Smith</h2>
          <p className="text-xs text-gray-500">Last seen: 3 hours ago</p>
        </div>
        <div className="flex space-x-3 text-gray-400">
          <i className="fas fa-camera"></i>
          <i className="fas fa-video"></i>
          <i className="fas fa-cog"></i>
          <i className="fas fa-info-circle"></i>
        </div>
      </div>

      <div className="space-y-4">
        <div className="bg-white rounded-lg p-3 shadow w-fit max-w-sm">
          Hi Aiden, how are you?
        </div>
        <div className="bg-white rounded-lg p-3 shadow w-fit max-w-sm">
          I am working on 10 tasks. 5 tasks Completed and 5 in progress
        </div>
        <div className="relative group">
          <div className="bg-white rounded-lg p-3 shadow w-fit max-w-sm">
            <div className="flex items-center justify-between">
              <span>How many task are working?</span>
              <FaGripVertical className="w-4 h-4 cursor-pointer ml-2" />
            </div>
          </div>
          <div className="absolute top-8 right-0 bg-white shadow rounded hidden group-hover:block">
            <ul className="text-sm text-gray-700">
              <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer">Edit</li>
              <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer">Share</li>
              <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer">Delete</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <input
          type="text"
          placeholder="Enter text here..."
          className="w-full p-2 border rounded focus:outline-none"
        />
      </div>
    </div>
  );
};

export default ChatSection;

// // App.jsx
// import React, { useState } from 'react';
// import ChatSection from '../components/Chat/ChatSection';
// import ContactsSidebar from '../components/Chat/ChatSidebar';
// import { FaBars } from 'react-icons/fa';


// const ChatPage = () => {
//   const [showSidebar, setShowSidebar] = useState(false);

//   return (
//     <div className="flex flex-col md:flex-row h-screen">
//       {/* Sidebar Toggle for small screens */}
//       <div className="md:hidden flex items-center justify-between p-4 bg-purple-800 text-white">
//         <h1 className="text-xl font-bold">My-Task</h1>
//         <FaBars className="w-6 h-6 cursor-pointer" onClick={() => setShowSidebar(!showSidebar)} />
//       </div>

//       {/* Sidebar */}
//       <div className={`fixed inset-0 z-30 md:relative md:translate-x-0 transition-transform transform ${showSidebar ? 'translate-x-0' : '-translate-x-full'} md:flex md:flex-col w-64 bg-purple-800 text-white`}>
//         <ContactsSidebar />
//       </div>

//       {/* Main Chat Area */}
//       <div className="flex-1 bg-gray-100 overflow-y-auto">
//         <ChatSection />
//       </div>
//     </div>
//   );
// };

// export default ChatPage;






// App.jsx
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';

const contacts = [
  { name: 'Vanessa Knox', message: 'There are many variations of passages', time: '10:45 AM' },
  { name: 'Abigail Bell', message: 'changed an issue from "In Progress" to ...', time: '11:45 AM' },
  { name: 'Diane Blake', message: 'It is a long established fact that a reader ...', time: '12:45 AM' },
  { name: 'Megan Dyer', message: 'Contrary to popular belief', time: '12:46 AM' },
];

export default function ChatPage() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`fixed md:static top-0 left-0 z-50 h-full bg-white shadow-md md:w-1/4 w-64 transition-transform duration-300 ease-in-out ${showSidebar ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
        <div className="p-4 font-bold text-xl border-b">My-Task</div>
        <div className="px-4 py-2">
          <button className="text-white bg-purple-700 px-4 py-1 rounded mb-4">Chat</button>
          <button className="ml-2 text-gray-600">Members Groups</button>
          <button className="ml-2 text-gray-600">Contact</button>
        </div>
        <div>
          {contacts.map((contact, idx) => (
            <div key={idx} className="flex items-start p-4 border-b cursor-pointer hover:bg-gray-100">
              <div className="w-10 h-10 bg-gray-300 rounded-full mr-4"></div>
              <div>
                <div className="font-semibold">{contact.name}</div>
                <div className="text-sm text-gray-500">{contact.message}</div>
              </div>
              <div className="ml-auto text-xs text-gray-400">{contact.time}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Chat Section */}
      <div className="flex-1 flex flex-col">
        <div className="md:hidden p-4 bg-purple-700 text-white flex justify-between items-center">
          <span className="text-xl font-bold">My-Task</span>
          <FaBars className="w-6 h-6 cursor-pointer" onClick={() => setShowSidebar(!showSidebar)} />
        </div>

        <div className="flex-1 overflow-auto p-6">
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 bg-yellow-300 rounded-full mr-4"></div>
            <div>
              <div className="font-semibold text-lg">Grace Smith</div>
              <div className="text-xs text-gray-500">Last seen: 3 hours ago</div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-start">
              <div className="w-8 h-8 bg-yellow-300 rounded-full mr-2"></div>
              <div className="bg-white p-4 rounded shadow w-fit">Hi Aiden, how are you?</div>
            </div>

            <div className="flex items-start">
              <div className="w-8 h-8 bg-yellow-300 rounded-full mr-2"></div>
              <div className="bg-white p-4 rounded shadow w-fit">
                I am working on 10 tasks. 5 tasks Completed and 5 in progress
              </div>
            </div>

            <div className="flex justify-end relative">
              <div className="bg-purple-700 text-white p-2 rounded-lg">How many task are working?</div>
              <div className="absolute top-0 right-0 mt-8 bg-white border rounded shadow w-32">
                <button className="block px-4 py-2 text-left hover:bg-gray-100">Edit</button>
                <button className="block px-4 py-2 text-left hover:bg-gray-100">Share</button>
                <button className="block px-4 py-2 text-left hover:bg-gray-100">Delete</button>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <input
              type="text"
              placeholder="Enter text here..."
              className="w-full border rounded p-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

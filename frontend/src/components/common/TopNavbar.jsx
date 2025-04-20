import React from 'react'
import { FiSettings } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";

const TopNavbar = () => {
  return (
    <div>
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
                <div className="relative w-full max-w-md">
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none shadow-md text-gray-700"
                  />
                  <FiSearch className="absolute left-3 top-2.5 text-gray-400 text-lg" />
                </div>
                <div className="flex items-center gap-4 text-gray-600 text-xl">
                  <IoMdNotificationsOutline className="hover:text-indigo-500 transition duration-200 cursor-pointer" />
                  <FiSettings className="hover:text-indigo-500 transition duration-200 cursor-pointer" />
                  <FaUserCircle className="text-2xl text-indigo-600" />
                </div>
              </div>
    </div>
  )
}

export default TopNavbar
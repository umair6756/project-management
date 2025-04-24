import React from 'react'
import { BsPlusCircleFill } from "react-icons/bs";

const CreateButton = ({title}) => {
  return (
    <div>
              <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Projects</h1>
        <button className="bg-purple-700 text-white px-4 py-2 rounded-md hover:bg-purple-800 flex items-center gap-2">
          <BsPlusCircleFill /> {title}
        </button>
      </div>
      <div className="border-b-[1px] border-gray-300 mb-9"></div>
    </div>
  )
}

export default CreateButton
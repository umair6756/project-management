import React from 'react';

const Progress = ({ value, max = 100, className = '' }) => {
  const percentage = (value / max) * 100;

  return (
    <div className={`relative pt-1 ${className}`}>

      <div className="flex mb-2">
        <div className="relative flex w-full">
          <div className="flex  w-full rounded-full h-4 bg-gray-200">
            <div
              className="flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500 h-full rounded-full"
              style={{ width: `${percentage}%` }}
            >{percentage}%</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;

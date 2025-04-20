import react from 'react';

import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Design', Justin: 4, Michael: 3, Jason: 2 },
  { name: 'MobileApp', Justin: 3, Michael: 5, Jason: 4 },
  { name: 'Infography', Justin: 5, Michael: 4, Jason: 3 },
  { name: 'Prototyping', Justin: 2, Michael: 3, Jason: 5 },
  { name: 'Development', Justin: 3, Michael: 2, Jason: 6 },
];

export default function ProjectTimeline() {
  return (
    <div className="bg-white shadow-md rounded-2xl p-9 w-full md:w-2/3">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Project Timeline</h2>
        <select className="bg-gray-100 px-2 py-1 rounded-md text-sm">
          <option>Last 7 days</option>
          <option>Last 30 days</option>
          <option>Last 60 days</option>
        </select>
      </div>
      <ResponsiveContainer width="100%" height={500}>
        <BarChart data={data} layout="vertical">
          <XAxis type="number" />
          <YAxis type="category" dataKey="name" />
          <Tooltip />
          <Legend />
          <Bar dataKey="Justin" fill="#8884d8" />
          <Bar dataKey="Michael" fill="#82ca9d" />
          <Bar dataKey="Jason" fill="#ffc658" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

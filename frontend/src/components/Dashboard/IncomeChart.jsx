import react from 'react';

import { PieChart, Pie, Tooltip, Cell, Legend, ResponsiveContainer } from "recharts";

const data = [
  { name: "France", value: 1043 },
  { name: "India", value: 1325 },
  { name: "Canada", value: 980 },
  { name: "Italy", value: 765 },
  { name: "Japan", value: 1465 },
  { name: "US", value: 1200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8e44ad", "#3498db"];

export default function IncomeChart() {
  return (
    <div className="bg-white  rounded-2xl shadow-lg p-6 w-full lg:w-4/12 mb-6">
      <h2 className="text-xl font-bold text-gray-700 dark:text-gray-100 mb-4">Income Analytics</h2>
      <div className="flex flex-col items-center">
        <div className="mb-2 text-lg">
          <span className="text-green-500 font-semibold">$5,318</span> Income
        </div>
        <div className="mb-4 text-lg">
          <span className="text-red-500 font-semibold">$2,840</span> Expense
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={false}
              outerRadius={100}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend layout="horizontal" verticalAlign="bottom" align="center" />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
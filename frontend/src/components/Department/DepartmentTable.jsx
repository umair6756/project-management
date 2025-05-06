import react from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const DepartmentTable = () => {
  const departments = [
    { id: 1, head: 'Joan Dyer', department: 'Web Development', employees: 40 },
    { id: 2, head: 'Ryan Randall', department: 'Accounts', employees: 48 },
    { id: 3, head: 'Phil Glover', department: 'Support', employees: 15 },
    { id: 4, head: 'Victor Rampling', department: 'App Development', employees: 39 },
    { id: 5, head: 'Sally Graham', department: 'Recruiter', employees: 12 },
    { id: 6, head: 'Robert Anderson', department: 'Admin', employees: 8 },
  ];

  return (
    <div className="p-4 md:ml-64">
    <div className="bg-white shadow-md rounded-lg">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-2">
          <label htmlFor="showEntries" className="text-sm font-medium">Show</label>
          <select
            id="showEntries"
            className="border rounded px-2 py-1 text-sm"
          >
            <option>10</option>
            <option>25</option>
            <option>50</option>
          </select>
          <span className="text-sm font-medium">entries</span>
        </div>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search:"
            className="border rounded px-2 py-1 text-sm"
          />
        </div>
      </div>

      {/* Scroll wrapper */}
      <div className="s">
        <table className="w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 text-left text-xs font-medium text-gray-500 uppercase">#</th>
              <th className="p-2 text-left text-xs font-medium text-gray-500 uppercase">Department Head</th>
              <th className="p-2 text-left text-xs font-medium text-gray-500 uppercase">Department Name</th>
              <th className="p-2 text-left text-xs font-medium text-gray-500 uppercase">Employee Underwork</th>
              <th className="p-2 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {departments.map((dept, index) => (
              <tr key={dept.id} className="hover:bg-gray-100 transition">
                <td className="p-2 text-sm text-gray-700">{index + 1}</td>
                <td className="p-2 flex items-center gap-2 text-sm font-semibold text-gray-800">
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-500">
                    {dept.head.charAt(0)}
                  </div>
                  {dept.head}
                </td>
                <td className="p-2 text-sm text-gray-700">{dept.department}</td>
                <td className="p-2 text-sm text-gray-700">{dept.employees}</td>
                <td className="p-2 flex items-center gap-2">
                  <button className="text-green-600 hover:text-green-800">
                    <FaEdit />
                  </button>
                  <button className="text-red-600 hover:text-red-800">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between p-4 text-sm text-gray-600">
        <div>Showing 1 to 6 of 6 entries</div>
        <div className="flex gap-2">
          <button className="px-2 py-1 border rounded bg-gray-100 hover:bg-gray-200">Previous</button>
          <button className="px-2 py-1 border rounded bg-purple-600 text-white hover:bg-purple-700">Next</button>
        </div>
      </div>
    </div>
  </div>
  );
};

export default DepartmentTable;

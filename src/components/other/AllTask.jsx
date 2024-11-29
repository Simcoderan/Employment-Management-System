import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const AllTask = () => {
  const authData = useContext(AuthContext);

  return (
    <div className="bg-black p-5 rounded mt-5 h-60 overflow-auto">
      {/* Header Row */}
      <div className="bg-[#FFD700] mb-2 py-2 px-4 flex w-full rounded">
        <h2 className="flex-1 text-black font-bold text-center">Employee Name</h2>
        <h3 className="flex-1 text-black font-bold text-center">New Task</h3>
        <h5 className="flex-1 text-black font-bold text-center">Active Task</h5>
        <h5 className="flex-1 text-black font-bold text-center">Completed</h5>
        <h5 className="flex-1 text-black font-bold text-center">Failed</h5>
      </div>

      {/* Employee Data Rows */}
      {authData.employees.map((elem, idx) => (
        <div
          key={elem.id || idx}
          className="bg-[#1F2937] mb-2 py-2 px-4 flex w-full rounded text-white"
        >
          <h2 className="flex-1 text-center">{elem.firstName}</h2>
          <h3 className="flex-1 text-center">{elem.taskCounts.newTask}</h3>
          <h5 className="flex-1 text-center">{elem.taskCounts.active}</h5>
          <h5 className="flex-1 text-center">{elem.taskCounts.completed}</h5>
          <h5 className="flex-1 text-center">{elem.taskCounts.failed}</h5>
        </div>
      ))}
    </div>
  );
};

export default AllTask;

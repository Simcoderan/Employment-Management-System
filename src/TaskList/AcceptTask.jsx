import React from 'react';

function AcceptTask({ data }) {
  return (
    <div className="flex-shrink-0 h-full w-[300px] p-6 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-xl shadow-lg transform transition duration-300 hover:scale-105">
      
      {/* Task Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="bg-indigo-500 text-white text-xs px-3 py-1 rounded-full uppercase tracking-wider">
          {data.category}
        </h3>
        <h4 className="text-sm text-gray-200">{new Date(data.taskDate).toLocaleDateString()}</h4>
      </div>

      {/* Task Title & Description */}
      <h2 className="mt-3 text-xl font-bold text-white leading-tight">
        {data.title}
      </h2>
      <p className="text-sm text-gray-100 mt-4 leading-relaxed">
        {data.description}
      </p>

      {/* Buttons */}
      <div className="flex justify-between mt-6">
        <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 text-sm font-semibold rounded-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition-all">
          Mark as Completed
        </button>
        <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 text-sm font-semibold rounded-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-400 transition-all">
          Mark as Failed
        </button>
      </div>

    </div>
  );
}

export default AcceptTask;

import React from 'react'

function FailedTask({ data }) {
  return (
    <div className="flex-shrink-0 h-full w-[300px] p-6 bg-gradient-to-br from-red-600 to-orange-600 rounded-xl shadow-lg transform transition duration-300 hover:scale-105">
      
      {/* Task Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="bg-red-500 text-white text-xs px-3 py-1 rounded-full uppercase tracking-wider">
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

      {/* Failed Button */}
      <div className="mt-6">
        <button className="w-full bg-lime-500 text-white py-2 px-4 text-sm font-semibold rounded-lg shadow-md hover:bg-lime-600 transition-all focus:outline-none focus:ring-2 focus:ring-lime-400">
          Mark as Failed
        </button>
      </div>
      
    </div>
  )
}

export default FailedTask

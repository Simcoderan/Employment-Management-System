import React, { useState } from "react";

const CreateTask = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [assignTo, setAssignTo] = useState('');
  const [category, setCategory] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    // Validation to ensure all fields are filled
    if (!taskTitle || !taskDescription || !taskDate || !assignTo || !category) {
      alert('Please fill in all the fields.');
      return;
    }

    // Create new task object
    const newTask = {
      taskTitle,
      taskDescription,
      taskDate,
      category,
      completed: false, 
    };

    // Get the employees data from localStorage
    const employees = JSON.parse(localStorage.getItem('employees')) || [];

    // Find the employee to whom the task is assigned
    const employeeIndex = employees.findIndex(emp => emp.firstName === assignTo);

    if (employeeIndex === -1) {
      alert('Employee not found!');
      return;
    }

    // Add the new task to the employee's task list
    employees[employeeIndex].tasks.push(newTask);

    // Save the updated employees array back to localStorage
    localStorage.setItem('employees', JSON.stringify(employees));

    // Log the new task for debugging purposes
    console.log("Task Created:", newTask);
    console.log("Updated Employee Data:", employees[employeeIndex]);

    // Reset the form fields after submission
    setTaskTitle('');
    setTaskDescription('');
    setTaskDate('');
    setAssignTo('');
    setCategory('');
  };

  return (
    <div className="p-10 bg-gradient-to-r from-[#1c1c1c] via-[#2a2a2a] to-[#121212] mt-7 rounded-lg shadow-2xl">
      <form onSubmit={submitHandler} className="flex flex-wrap w-full items-start justify-between gap-10">
        
        {/* Left Section */}
        <div className="w-full md:w-[48%]">
          <div className="mb-6">
            <h3 className="text-sm text-gray-300 mb-2">Task Title</h3>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className="text-sm py-3 px-4 w-full rounded-lg outline-none bg-[#1f1f1f] border border-gray-600 text-white focus:border-emerald-500 focus:ring focus:ring-emerald-500/30 transition duration-300"
              type="text"
              placeholder="Enter task title"
            />
          </div>

          <div className="mb-6">
            <h3 className="text-sm text-gray-300 mb-2">Date</h3>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              className="text-sm py-3 px-4 w-full rounded-lg outline-none bg-[#1f1f1f] border border-gray-600 text-white focus:border-emerald-500 focus:ring focus:ring-emerald-500/30 transition duration-300"
              type="date"
            />
          </div>

          <div className="mb-6">
            <h3 className="text-sm text-gray-300 mb-2">Assign To</h3>
            <input
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              className="text-sm py-3 px-4 w-full rounded-lg outline-none bg-[#1f1f1f] border border-gray-600 text-white focus:border-emerald-500 focus:ring focus:ring-emerald-500/30 transition duration-300"
              type="text"
              placeholder="Employee name"
            />
          </div>

          <div className="mb-6">
            <h3 className="text-sm text-gray-300 mb-2">Category</h3>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="text-sm py-3 px-4 w-full rounded-lg outline-none bg-[#1f1f1f] border border-gray-600 text-white focus:border-emerald-500 focus:ring focus:ring-emerald-500/30 transition duration-300"
              type="text"
              placeholder="Design / Web / Other"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-[48%]">
          <h3 className="text-sm text-gray-300 mb-2">Description</h3>
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className="w-full h-44 text-sm py-3 px-4 rounded-lg outline-none bg-[#1f1f1f] border border-gray-600 text-white focus:border-emerald-500 focus:ring focus:ring-emerald-500/30 transition duration-300"
            placeholder="Enter task description"
          ></textarea>
        </div>

        {/* Button Section */}
        <div className="w-full mt-6">
          <button
            type="submit"
            className="bg-emerald-500 py-4 px-6 rounded-lg text-white text-sm font-medium w-full md:w-auto hover:bg-emerald-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;

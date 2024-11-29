import React from "react";
import Header from "../other/Header";
import TaskListNumbers from "../other/TaskListNumbers";
import TaskList from "../../TaskList/TaskList";

const EmployeeDashboard = ({ data }) => {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      {/* Header Section */}
      <Header data={data} />

      {/* Task Statistics Section */}
      <div className="mt-6">
        <TaskListNumbers data={data} />
      </div>

      {/* Task List Section */}
      <div className="mt-8">
        <TaskList data={data} />
      </div>
    </div>
  );
};

export default EmployeeDashboard;

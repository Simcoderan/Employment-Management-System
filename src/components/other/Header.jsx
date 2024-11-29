import React from "react"; 

const Header = ({ data }) => {
  // Safely access firstName
  const firstName = data?.firstName || 'User';

  const logOutUsert = () => {
    localStorage.setItem("loggedInUser", "");
    window.location.reload();
  };

  return (
    <div className="flex items-center justify-between p-6 bg-gradient-to-r from-[#2c2c2c] to-[#3a3a3a] rounded-lg shadow-lg">
      <div>
        <h1 className="text-3xl font-semibold text-white">
          Hello, <span className="text-4xl font-extrabold text-emerald-500">{firstName} 👋</span>
        </h1>
        <p className="text-lg text-gray-300 mt-2">Welcome to the Employee Management System</p>
      </div>
      <button
        onClick={logOutUsert}
        className="bg-red-600 hover:bg-red-700 text-lg font-medium text-white px-6 py-3 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105"
      >
        Log out
      </button>
    </div>
  );
};

export default Header;

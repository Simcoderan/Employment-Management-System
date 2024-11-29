import React, { useState } from 'react';

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail('');
    setPassword('');
  };

  return (
    <div className="flex h-screen w-screen bg-black items-center justify-center">
      <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black p-16 rounded-2xl shadow-2xl w-full max-w-lg">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold text-white mb-4">
            Welcome
          </h1>
          <p className="text-lg text-gray-400">
            Please log in to access your dashboard and manage your tasks.
          </p>
        </div>

        <form onSubmit={submitHandler} className="flex flex-col items-center">
          <input 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="outline-none bg-transparent border-2 border-green-500 text-white text-xl py-4 px-6 rounded-full mb-5 placeholder:text-gray-400 focus:ring-2 focus:ring-green-600 transition duration-200"
            type="email" 
            placeholder="Enter your email"
          />
          
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="outline-none bg-transparent border-2 border-green-500 text-white text-xl py-4 px-6 rounded-full mb-8 placeholder:text-gray-400 focus:ring-2 focus:ring-green-600 transition duration-200"
            type="password" 
            placeholder="Enter your password"
          />
          
          <button 
            type="submit"
            className="text-white bg-green-600 hover:bg-green-700 text-xl py-4 px-8 rounded-full transition duration-200 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-500"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

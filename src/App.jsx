import React, { useEffect, useState, useContext } from 'react';
import './index.css';
import Login from './components/Auth/Login.jsx';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard.jsx';
import AdminDashboard from './components/Dashboard/AdminDashboard.jsx';
import { getLocalStorage } from './utils/localStorage.jsx';
import { AuthContext } from './context/AuthProvider.jsx';

const App = () => {
  const [user, setUser] = useState(null);
  const authData = useContext(AuthContext);

  const handleLogin = (email, password) => {
    // Check for admin credentials
    if (email === 'admin@me.com' && password === '123') {
      setUser('admin');
    } 
    // Check for employee credentials
    else if (authData && authData.employees.find((e) => email === e.email && e.password === password)) {
      setUser('employee');
    } 
    // Invalid credentials
    else {
      alert("Invalid Credentials");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : null}
      {user === 'admin' ? <AdminDashboard /> : user === 'employee' ? <EmployeeDashboard /> : null}
    </>
  );
};

export default App;

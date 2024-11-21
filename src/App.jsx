import React, { useState, useContext, useEffect } from 'react';
import './index.css';
import Login from './components/Auth/Login.jsx';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard.jsx';
import AdminDashboard from './components/Dashboard/AdminDashboard.jsx';
import { getLocalStorage } from './utils/localStorage.jsx';
import { AuthContext } from './context/AuthProvider.jsx';

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const authData = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) {
      setUser(loggedInUser.role);
      if (loggedInUser.role === "employee") {
        const employee = authData.employees.find(e => e.email === loggedInUser.email);
        setLoggedInUserData(employee);
      }
    }
  }, [authData]);

  const handleLogin = (email, password) => {
    // Check for admin credentials
    if (email === 'admin@me.com' && password === '123') {
      setUser('admin');
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin', email }));
    } 
    // Check for employee credentials
    else {
      const employee = authData.employees.find(e => e.email === email && e.password === password);
      if (employee) {
        setUser('employee');
        setLoggedInUserData(employee);
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', email }));
      } else {
        alert("Invalid Credentials");
      }
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : null}
      {user === 'admin' ? <AdminDashboard /> : null}
      {user === 'employee' && loggedInUserData ? (
        <EmployeeDashboard data={loggedInUserData} />
      ) : null}
    </>
  );
};

export default App;

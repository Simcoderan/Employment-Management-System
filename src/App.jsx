import React, { useEffect, useState } from 'react'
import './index.css';
import Login from './components/Auth/Login.jsx';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard.jsx';
import AdminDashboard from './components/Dashboard/AdminDashboard.jsx';
import { getLocalStorage, setLocalStorage } from './utils/localStorage.jsx';




const App =() => {

  useEffect(() => {
   // setLocalStorage()
    getLocalStorage()
    
    },)

    






 
  return (
    <>
     <Login/>
     {/*<EmployeeDashboard/>*/}
    { /*<AdminDashboard/>*/}
      </>
  )
}

export  default App



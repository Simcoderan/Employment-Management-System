import React, { useEffect, useState } from 'react'
import './index.css';
import Login from './components/Auth/Login.jsx';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard.jsx';
import AdminDashboard from './components/Dashboard/AdminDashboard.jsx';
import { getLocalStorage, setLocalStorage } from './utils/localStorage.jsx';
import { useContext } from 'react';
import { AuthContext } from './context/AuthProvider.jsx';




const App =() => {

  const [user,setUser]= useState(null)
  const authData= useContext(AuthContext)
  


  const handleLogin= (email,password)=>{

    if(email == 'admin@me.com' && password =='123'){
    setUser('admin')
 
    } else if(authData && authData.employees.find((e)=>email == e.mail && e.password == password) ){
      setUser('employee')
      
    } else{
      alert("Invalid Credentials")
    }
    

 
  }





  //useEffect(() => {
   // setLocalStorage()
   // getLocalStorage()
    
   // },)

  return (
    <>
    {!user? <Login handleLogin={handleLogin} />: ''}

    {user =='admin'? <AdminDashboard/> : <EmployeeDashboard/>}

     {/*<EmployeeDashboard/>*/}
    { /*<AdminDashboard/>*/}
      </>
  )
}

export  default App



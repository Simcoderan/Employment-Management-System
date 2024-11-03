import React, { useState } from 'react'

const Login =({handleLogin}) =>{


    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
  

    const submitHandler = (e) =>{
        e.preventDefault()
        handleLogin(email,password)
        console.log ("email is",email)
        console.log ("password is",password)
        setEmail("")
        setPassword("")

    }
    return (
        <div  className='flex h-screen w-screen items-center justify-center'>
            <div className='border-2 rounded-xl border-green-900 p-20'>
                <form
                onSubmit = {()=>{
                    submitHandler(e)
                }}
                
                className='flex flex-col items-center justify-center '>
                    <input 
                    value = {email}
                    onChange={(e)=>{
                       // console.log (e.target.value)
                       setEmail(e.target.value)
                    }}
                     required 
                    className=' outline-none  bg-transparent border-2 border--400 text-xl py-4 px-5 rounded-full  placeholder:text-gray-400' type="email" placeholder='Enter your email'
                    />
                    <input
                    value ={password}
                    onChange={(e)=>{
                        setPassword(e.target.value)
                    }}
                     required 
                     className='outline-none  bg-transparent border-2 border-green-400 text-xl py-4 px-5 rounded-full  mt-4 placeholder:text-gray-400'  type="password" placeholder='Enter password'
                     />
                    <button className='mt-5 text-white border-none outline-none   border-2 bg-green-700 text-xl py-4 px-5 rounded-full  mt-4 placeholder:text-white'>Login</button>
                </form>


            </div>

        </div>
    )
}

export default Login
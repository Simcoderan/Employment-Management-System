import React, { useState } from 'react'

const Login =() =>{

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
  

    const submitHandler = (e) =>{
        e.preventDefault()
        console.log ("Form Submitted")

    }
    return (
        <div  className='flex h-screen w-screen items-center justify-center'>
            <div className='border-2 rounded-xl border-blue-900 p-20'>
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
                    className=' outline-none  bg-transparent border-2 border-blue-400 text-xl py-4 px-5 rounded-full  placeholder:text-gray-400' type="email" placeholder='Enter your email'
                    />
                    <input required className='outline-none  bg-transparent border-2 border-blue-400 text-xl py-4 px-5 rounded-full  mt-4 placeholder:text-gray-400'  type="password" placeholder='Enter password'/>
                    <button className='mt-5 text-white border-none outline-none   border-2 bg-blue-700 text-xl py-4 px-5 rounded-full  mt-4 placeholder:text-white'>Login</button>
                </form>


            </div>

        </div>
    )
}

export default Login
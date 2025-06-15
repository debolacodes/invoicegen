import React, { useState } from 'react'
import AuthService from '../services/authService';

export default function Login() {
  const [userData, setUserData] = useState({
    email: "",
    password:""
  });

  const handleChange = (name, value) =>{
    setUserData({...userData, [name]: value})
  }

  const handleSubmit = () =>{
    //Submit the data
    AuthService.login(userData)
  }


  return (
    <div className='w-full h-full content-center'>
        <div className='p-[30px] bg-gray-200 w-[400px] min-h-[500px] m-auto'>
            <div className='font-bold text-[20px] text-center mb-[50px]'>Login</div>
            
            <input type='text' 
            className='w-full h-[50px] bg-white mb-[10px] p-4'
            placeholder='Email Address'
            name="email"
            onChange={(e)=>{
                const elementName = e.target.name
                const value = e.target.value
                handleChange(elementName, value) 
            }}
            />
             <input type='password' 
            className='w-full h-[50px] bg-white mb-[10px] p-4'
            placeholder='Password'
            name="password"
            onChange={(e)=>{
                const elementName = e.target.name
                const value = e.target.value
                handleChange(elementName, value) 
            }}
            
            />
            <div className='w-full h-[50px] bg-teal-800 cursor-pointer
            mb-[10px] content-center text-white text-center'
            onClick={()=>{
                handleSubmit()
            }}
            >Login</div>
        </div>
    </div>
  )
}

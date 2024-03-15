import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import Button from '../../utils/Button'
import image from '../../assets/photo/login-img.svg'
import { request } from '../../api/request'

const Login = () => {
    const[isLoged, setIsLoged] = useState(true)
    const[isActive, setIsActive] = useState('login')
    const { handleSubmit, register, reset } = useForm()

    const handleSignIn = () => {
        setIsLoged(true)
        setIsActive('login')
    }

    const handleSignUp = () => {
        setIsLoged(false)
        setIsActive('signup')
    }

    const registerSubmit = (data) => {
        console.log(data);
        request.post('/users/register', data).then(res => console.log(res))
    }

    

  return (
    <div className='h-[750px] relative'>
        <div className='w-[400px] m-auto rounded-md box-shadow mt-[64px] p-8'>
            <div className='flex mb-6'>
                <p className={`w-[45%] text-center font-bold pb-2 cursor-pointer border-b-[3px] ${isActive == 'login' ? 'border-black' : 'text-secondary-dark' }`} onClick={handleSignIn}>Kirish</p>
                <p className={`w-[55%] text-center font-bold pb-2 cursor-pointer border-b-[3px] ${isActive == 'signup' ? ' border-black' : 'text-secondary-dark'} `} onClick={handleSignUp}>Ro’yxatdan o’tish</p>
            </div>
            {isLoged ? 
                <form className='flex flex-col gap-2' onSubmit={handleSubmit} >
                    <label htmlFor="username">Username</label>
                    <input className='p-3 border-2 rounded-lg' type="text" {...register('username')} placeholder='Username' />
                    <label htmlFor="password">Password</label>
                    <input className='p-3 border-2 rounded-lg mb-[50px]' type="text" {...register('password')} placeholder='Password' />
                    <Button text={'Kirish'} bg={'dark'} padding={'15px 0'} radius={'16'} font={'bold'}/>
                </form>
                :
                <form className='flex flex-col gap-2' onSubmit={handleSubmit(registerSubmit)}>
                    <label htmlFor="username">Username</label>
                    <input className='p-3 border-2 rounded-lg' type="text" {...register('username')} placeholder='Username' id='username' />
                    <label htmlFor="email">Email</label>
                    <input className='p-3 border-2 rounded-lg' type="email" {...register('email') } placeholder='Email' id='email' />
                    <label htmlFor="password">Password</label>
                    <input className='p-3 border-2 rounded-lg' type="password" {...register('password')} placeholder='Password' id='password' />
                    <label htmlFor="address">Address</label>
                    <input className='p-3 border-2 rounded-lg' type="text" {...register('address')} placeholder='Address' id='address' />
                    <label htmlFor="image">Image</label>
                    <input className='p-3 border-2 rounded-lg mb-[50px]' type="text" {...register('image')} placeholder='Your image' id='image' />
                    <Button text={'Kirish'} bg={'dark'} padding={'15px 0'} radius={'16'} font={'bold'}/>
                </form>
            }
        </div>
        <img className='absolute bottom-0' src={image} alt="" />
    </div>
  )
}

export default Login
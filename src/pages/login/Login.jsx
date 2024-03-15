import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import Button from '../../utils/Button'
import image from '../../assets/photo/login-img.svg'
import { request } from '../../api/request'
import { date } from '../../utils/date'
import { useRegister } from '../../service/mutation/useRegister'
import { saveState } from '../../config/storage'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import { Bounce, ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    console.log(date);
    const[isLoged, setIsLoged] = useState(true)
    const[isActive, setIsActive] = useState('login')
    const { handleSubmit, register, reset } = useForm()
    const { mutate, isError } = useRegister()
    const navigate = useNavigate()

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
        mutate({...data, date}, {
            onSuccess: (res) => {
                console.log(res)
                saveState('user', res.user)
                Cookies.set('token', res.accessToken, { expires: 3 })
                navigate('/')
                toast.success("Siz muvofaqiyatli ro'yxatdan o'tdingiz!", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Bounce,
                    });
            }
        },
        {
            onError: (error) => console.log(error)
        })
        // request.post('/users/register', data).then(res => console.log(res.data))
    }
    const loginSubmit = (data) => {
        request.post('/users/login', data).then(res => console.log(res.data))
    }

    

  return (
    <div className='h-[750px] relative'>
        <div className='w-[400px] m-auto rounded-md box-shadow mt-[64px] p-8'>
            <div className='flex mb-6'>
                <p className={`w-[45%] text-center font-bold pb-2 cursor-pointer border-b-[3px] ${isActive == 'login' ? 'border-black' : 'text-secondary-dark' }`} onClick={handleSignIn}>Kirish</p>
                <p className={`w-[55%] text-center font-bold pb-2 cursor-pointer border-b-[3px] ${isActive == 'signup' ? ' border-black' : 'text-secondary-dark'} `} onClick={handleSignUp}>Ro’yxatdan o’tish</p>
            </div>
            {isLoged ? 
                <form className='flex flex-col gap-2' onSubmit={handleSubmit(loginSubmit)} >
                    <label htmlFor="email">Email</label>
                    <input className='p-3 border-2 rounded-lg' type="text" {...register('email')} placeholder='Email' id='email' />
                    <label htmlFor="password">Password</label>
                    <input className='p-3 border-2 rounded-lg mb-[50px]' type="text" {...register('password')} placeholder='Password' id='password' />
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
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            />
    </div>
  )
}

export default Login
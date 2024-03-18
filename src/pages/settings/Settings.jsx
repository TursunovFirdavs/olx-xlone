import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useGetUser } from '../../service/query/useGetUser'
import { useForm } from 'react-hook-form'
import Button from '../../utils/Button'
import { putUser } from '../../service/mutation/putUser'
import { request } from '../../api/request'
import { saveState } from '../../config/storage'

const Settings = () => {

    const { id } = useParams()
    const { data: user } = useGetUser(id)
    // console.log(user);
    const { register, handleSubmit } = useForm()
    const { mutate } = putUser(id)
    const navigate = useNavigate()

    const submit = (data) => {
        mutate(data, {
            onSuccess: res => {
                console.log(res)
                saveState('user', res)
                navigate('/profile')
            }
        })
        request.patch(`/users/${id}`, data).then(res=> console.log(res.data))
    }

    return (
        <div className='t bg-secondary-light py-10'>
            <div className='w-[750px] m-auto '>
                <div className='rounded-lg bg-white p-8'>
                    <h2 className='text-center text-3xl mb-8 font-semibold'>Profilni tahrirlash</h2>
                    <form className='flex flex-col'>
                        <label className='text-lg font-semibold text-gray-600' htmlFor="img">Surat</label>
                        <input className='border-2 rounded-md py-3 my-3 px-5' {...register('image')} type="text" id='img' />
                        <label className='text-lg font-semibold text-gray-600' htmlFor="name">Ism</label>
                        <input className='border-2 rounded-md py-3 my-3 px-5' {...register('username')} type="text" id='name' />
                        <label className='text-lg font-semibold text-gray-600' htmlFor="address">Address</label>
                        <input className='border-2 rounded-md py-3 my-3 px-5' {...register('address')} type="text" id='address' />
                        <label className='text-lg font-semibold text-gray-600' htmlFor="email">Email</label>
                        <input className='border-2 rounded-md py-3 my-3 px-5' {...register('email')} type="text" id='email' />
                    </form>
                </div>
            <div className='t text-right mt-7'>
            <Button onclick={handleSubmit(submit)} text={'Saqlash'} bg={'dark'} padding={'12px 100px'} />
            </div>
            </div>
        </div>
    )
}

export default Settings
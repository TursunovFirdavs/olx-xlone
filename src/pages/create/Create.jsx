import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import camera from '../../assets/photo/camera.svg'
import Button from '../../utils/Button'
import { date } from '../../utils/date'
import { useCreate } from '../../service/mutation/useCreate'
import { request } from '../../api/request'

const Create = () => {
  const[isActive, setIsActive] = useState('narx')
  const[category, setCategory] = useState('')
  const[price, setPrice] = useState('')
  const[valyut, setValyut] = useState('')
  const { register, handleSubmit } = useForm()
  const { mutate } = useCreate(category)

  const images = [1, 2, 3, 4, 5, 6, 7]
  const elementPrice = isActive == 'narx' ? `${price} ${valyut}` : isActive

  console.log(category);

  const creat = (data) => {
    mutate({...data, category, date, price: elementPrice }, {
      onSuccess: res => console.log(res)
    })
    // request.post('/hobbi', {...data, category, date, price: elementPrice }).then(res => console.log(res))
  }

  return (
    <div className='bg-secondary-light'>
      <div className='container m-auto py-[48px] flex flex-col gap-6'>
        <h2 className='font-bold text-2xl'>E’lon berish</h2>
        <div className='p-8 bg-white rounded-md flex flex-col gap-6'>
          <h3 className='text-xl font-semibold'>Bizga e’loningiz haqida gapirib bering</h3>
          <div className='flex flex-col w-[792px]'>
            <label className='mb-2' htmlFor="title">Sarlavha kiriting</label>
            <input className='bg-secondary-light py-3 px-4' type="text" {...register('title')} placeholder='Masalan iphone 13 Pro Max' id='title' />
          </div>
          <div className='flex flex-col w-[792px]'>
            <label className='mb-2' htmlFor="category">Rukn</label>
            <select onChange={(e) => setCategory(e.target.value)}className='bg-secondary-light py-3 px-4'>
              <option className='disabled'>Bo’limni tanlang</option>
              <option value="home">Ko’chmas mulk</option>
              <option value="hobbi">Xobbi</option>
              <option value="garden">Uy va bog‘</option>
              <option value="cars">Transport</option>
              <option value="texno">Elektr jihozlari</option>
              <option value="children-for">Bolalar uchun</option>
              <option value="Animals">Hayvonlar</option>
              <option value="service">Xizmatlar</option>
              <option value="cloth">Moda va stil</option>
            </select>
          </div>
        </div>

        <div className='p-8 bg-white rounded-md'>
          <div className=' flex flex-col gap-6 w-[792px]'>
          <p className='font-semibold text-xl'>Bizga e’loningiz haqida gapirib bering</p>
          <p className='text-sm'>Birinchi surat e’loningiz asosiy rasmi bo’ladi. Suratlar tartibini ularning ustiga bosib va olib o’tish bilan o’zgartirishingiz mumkin.</p>
          <div className='flex items-center flex-wrap gap-6'>
            <input {...register('img')} className='bg-main-danger py-[62px] w-[180px] text-center placeholder:text-dark-color rounded-md font-medium outline-none' type="text" placeholder='Rasmlarni qo’shish' />
            {
              images.map(item => (
                <div key={item} className='bg-secondary-light h-[150px] w-[180px] text-center flex items-center justify-center rounded-md'>
                  <img src={camera} alt="" />
                </div>
              ))
            }
          </div>
          </div>
        </div>

        <div className='p-8 bg-white rounded-md'>
          <div className=' flex flex-col w-[792px]'>
            <label htmlFor='desc'>Tavsif</label>
            <textarea {...register('desc')} className='h-[253px] bg-secondary-light py-3 px-4 placeholder:text-gray mt-2 mb-6' id="desc" placeholder='E’lon haqida batafsil'></textarea>
            <div className='flex justify-between text-gray-600'>
              <p>Yana kamida 80 ta belgi yozing</p>
              <p>0/9000</p>
            </div>
          </div>
        </div>

        <div className='p-8 bg-white rounded-md'>
          <div className='w-[792px] flex flex-col gap-9'>
            <div className='flex gap-7'>
              <div onClick={() => setIsActive('narx')}><Button text={'Narxli'} bg={`${isActive == 'narx' ? 'dark' : 'gray'}`} padding={'8px 24px'} /></div>
              <div onClick={() => setIsActive('Bepul')}><Button text={'Bepul'} bg={`${isActive == 'Bepul' ? 'dark' : 'gray'}`} padding={'8px 24px'} /></div>
              <div onClick={() => setIsActive('Ayirboshlash')}><Button text={'Ayirboshlash'} bg={`${isActive == 'Ayirboshlash' ? 'dark' : 'gray'}`} padding={'8px 24px'} /></div>
            </div>
            <div>
              <p>Narxi</p>
              <div className='flex gap-3'>
                <input onChange={(e) => setPrice(e.target.value)} className='bg-secondary-light p-4 w-[340px]' type="text" placeholder='0' />
                <input onChange={(e) => setValyut(e.target.value)} className='bg-secondary-light p-4 w-[11 5px]' type="text" placeholder="so'm" />
              </div>
            </div>
          </div>
        </div>

        <div className='p-8 bg-white rounded-md'>
          <div className='w-[792px] flex flex-col gap-6'>
            <h3 className='text-xl font-bold'>Siz bilan bog’lanish uchun</h3>
            <div className='flex flex-col gap-2'>
              <label className='text-secondary-dark' htmlFor="loc">Joylashuv</label>
              <input {...register('location')} type="text" className='bg-secondary-light px-4 py-3' id='loc' />
            </div>
            <div className='flex flex-col gap-2'>
              <label className='text-secondary-dark' htmlFor="name">Ism</label>
              <input {...register('name')} type="text" className='bg-secondary-light px-4 py-3' id='name' />
            </div>
            <div className='flex flex-col gap-2'>
              <label className='text-secondary-dark' htmlFor="email">Email-manzil</label>
              <input {...register('email')} type="text" className='bg-secondary-light px-4 py-3' id='email' />
            </div>
            <div className='flex flex-col gap-2'>
              <label className='text-secondary-dark' htmlFor="number">Telefon raqami</label>
              <input {...register('number')} type="text" className='bg-secondary-light px-4 py-3' id='number' />
            </div>
          </div>
        </div>

        <div className='font-bold text-right'>
          <Button onclick={handleSubmit(creat)} text={"E’lon joylash"} bg={'dark'} width={'343px'} padding={'18px 0'} radius={'16'} />
        </div>
      </div>
    </div>
  )
}

export default Create
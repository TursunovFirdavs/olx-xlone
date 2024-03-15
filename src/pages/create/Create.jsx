import React from 'react'
import { useForm } from 'react-hook-form'

const Create = () => {
  const { register, handleSubmit } = useForm()

  return (
    <div className='bg-secondary-light'>
      <div className='container m-auto py-[48px] flex flex-col gap-6'>
        <h2 className='font-bold text-2xl'>E’lon berish</h2>
        <div className='p-8 bg-white rounded-md flex flex-col gap-6'>
          <h3 className='text-xl font-semibold'>Bizga e’loningiz haqida gapirib bering</h3>
          <div className='flex flex-col'>
            <label className='mb-2' htmlFor="title">Sarlavha kiriting</label>
            <input className='bg-secondary-light py-3 px-4' type="text" {...register('title')} placeholder='Masalan iphone 13 Pro Max' id='title' />
          </div>
          <div className='flex flex-col'>
            <label className='mb-2' htmlFor="category">Rukn</label>
            <select className='bg-secondary-light py-3 px-4'>
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
      </div>
    </div>
  )
}

export default Create
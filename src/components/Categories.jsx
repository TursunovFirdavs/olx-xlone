import React from 'react'
import home from '../assets/photo/home.svg'
import hobbi from '../assets/photo/hobbi.svg'
import garden from '../assets/photo/garden.svg'
import cars from '../assets/photo/car.svg'
import texno from '../assets/photo/texno.svg'
import childreen from '../assets/photo/childreen.svg'
import cloth from '../assets/photo/cloth.svg'
import service from '../assets/photo/service.svg'
import animal from '../assets/photo/animals.svg'
import { Link } from 'react-router-dom'

const Categories = () => {

  const categories = [
    {
      id: 1,
      title: "Ko’chmas mulk",
      datakey:"home",
      img: home
    },
    {
      id: 2,
      title: "Xobbi",
      datakey:"hobbi",
      img: hobbi
    },
    {
      id: 3,
      title: "Uy va bog‘",
      datakey:"garden",
      img: garden
    },
    {
      id: 4,
      title: "Transport",
      datakey:"cars",
      img: cars
    },
    {
      id: 5,
      title: "Elektr jihozlari",
      datakey:"texno",
      img: texno
    },
    {
      id: 6,
      title: "Bolalar uchun",
      datakey:"children-for",
      img: childreen
    },
    {
      id: 7,
      title: "Moda va stil",
      datakey:"cloth",
      img: cloth
    },
    {
      id: 8,
      title: "Xizmatlar",
      datakey:"service",
      img: service
    },
    {
      id: 9,
      title: "Hayvonlar",
      datakey:"animals",
      img: animal
    }
  ]

  return (
    <div>
      <div className='container m-auto pt-8 pb-[56px]'>
        <h2 className='mb-6 text-2xl font-bold'>Kategoriyalar</h2>
        <div className='flex justify-between'>
          {categories.map(item => (
            <Link key={item.id} to={`/category/${item.datakey}`} className='w-[84px]'>
              <img src={item.img} alt="" />
              <h3 className='text-center mt-3 font-medium'>{item.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Categories
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

const Categories = () => {

  const categories = [
    {
      id: 1,
      title: "Ko’chmas mulk",
      datakey:"home"
    },
    {
      id: 2,
      title: "Xobbi",
      datakey:"hobbi"
    },
    {
      id: 3,
      title: "Uy va bog‘",
      datakey:"garden"
    },
    {
      "id": 4,
      "title": "Transport",
      "datakey":"cars"
    },
    {
      "id": 5,
      "title": "Elektr jihozlari",
      "datakey":"texno"
    },
    {
      "id": 6,
      "title": "Bolalar uchun",
      "datakey":"children-for"
    },
    {
      "id": 7,
      "title": "Moda va stil",
      "datakey":"cloth"
    },
    {
      "id": 8,
      "title": "Xizmatlar",
      "datakey":"service"
    },
    {
      "id": 9,
      "title": "Hayvonlar",
      "datakey":"animals"
    }
  ]

  return (
    <div>Categories</div>
  )
}

export default Categories
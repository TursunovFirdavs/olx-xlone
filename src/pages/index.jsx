import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './home/Home'
import Login from './login/Login'
import Profile from './profile/Profile'
import ProductDetails from './product-details/Product-details'
import Create from './create/Create'

const index = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/product-details' element={<ProductDetails/>} />
        <Route path='/create' element={<Create/>} />
    </Routes>
  )
}

export default index
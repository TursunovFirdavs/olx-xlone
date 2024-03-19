import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './home/Home'
import Login from './login/Login'
import Profile from './profile/Profile'
import ProductDetails from './product-details/Product-details'
import Create from './create/Create'
import Category from './category/Category'
import Settings from './settings/Settings'
import Like from './liked/Like'

const index = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/product-details/:id' element={<ProductDetails/>} />
        <Route path='/create' element={<Create/>} />
        <Route path='/category/:category' element={<Category />} />
        <Route path='/category/:category/:id' element={<ProductDetails/>} />
        <Route path='/profile-setting/:id' element={<Settings />} />
        <Route path='/liked' element={<Like/>} />
    </Routes>
  )
}

export default index
import { useEffect, useState } from 'react'
import { Navbar } from './components'
import Footer from './components/Footer'
import Pages from './pages'

function App() {
  
  return (
    <div>
      <Navbar/>
      <Pages/>
      <Footer/>
    </div>
  )
}

export default App

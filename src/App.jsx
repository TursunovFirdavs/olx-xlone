import { useEffect, useState } from 'react'
import { Navbar } from './components'
import Footer from './components/Footer'
import Pages from './pages'

function App() {
  const[month, setMonth] = useState('')

  const day = new Date().getDate()
  const hour = new Date().getHours()
  const minute = new Date().getMinutes()
  const getMonth = new Date().getMonth()
  console.log(minute);

  useEffect(() => {
    switch(getMonth + 1){
      case 1:
        setMonth('Yanvar')
        break
      case 2:
        setMonth('Fevral')
        break
      case 3:
        setMonth('Mart')
        break
      case 4:
        setMonth('Aprel')
        break
      case 5:
        setMonth('May')
        break
      case 6:
        setMonth('Iyun')
        break
      case 7:
        setMonth('Iyul')
        break
      case 8:
        setMonth('Avgust')
        break
      case 9:
        setMonth('Sentabr')
        break
      case 10:
        setMonth('Oktabr')
        break
      case 11:
        setMonth('Noyabr')
        break
      case 12:
        setMonth('Dekabr')
        break
    }
  }, [getMonth])

  const date = `${day}-${month} ${hour}:${minute} `
  console.log(date);

  return (
    <div>
      <Navbar/>
      <Pages/>
      <Footer/>
    </div>
  )
}

export default App

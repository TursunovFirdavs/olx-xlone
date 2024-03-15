import { ToastContainer } from 'react-toastify'
import { Navbar } from './components'
import Footer from './components/Footer'
import Pages from './pages'

function App() {

  return (
    <div>
      <Navbar/>
      <Pages/>
      <Footer/>
      <ToastContainer/>
    </div>
  )
}

export default App

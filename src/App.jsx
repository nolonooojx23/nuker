import { useState } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import About from './components/About'
import Footer from './components/Footer'
import Home from './components/Home'
import Location from './components/Location'
import Navbar from './components/Navbar'
import Services from './components/Services'
import Contact from './components/Contact'
import ServicesInfo from './components/ServicesInfo'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
//!Все услуги здесь
import services from './data'
import Map from './components/Map'

function App() {
  const [showbtn, setShowbtn] = useState(false);

  window.addEventListener('scroll', () => {
    if (window.scrollY > 135) {
      setShowbtn(true)
    } else {
      setShowbtn(false)
    }
  })

  return (
    <div className="App">
      <BrowserRouter>
        <Link to='/contact' className={showbtn ? 'showbtn-contact active z-[2000] max-md:w-[35px] max-md:h-[35px]' : 'showbtn-contact z-[2000] max-md:w-[35px] max-md:h-[35px]'}><LocalPhoneIcon fontSize='small' /></Link>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<><Home /><Contact /></>} />
          <Route path="/services/:id" element={<ServicesInfo services={services} />} />
        </Routes>
        <About />
        <Map/>
        <Services services={services} />
        <Location />
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
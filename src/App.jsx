import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import About from './components/About'
import Footer from './components/Footer'
import Home from './components/Home'
import Location from './components/Location'
import Navbar from './components/Navbar'
import Services from './components/Services'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Contact from './components/Contact'
import ServicesInfo from './components/ServicesInfo'
import myImage from '../public/image/icon1.png';


function App() {
  const [showbtn, setShowbtn] = useState(false);
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 115) {
      setShowbtn(true)
    } else {
      setShowbtn(false)
    }
  })

	const services = [
		{ id: 1, name: 'распростронение листовок', description: 'Description 1', img: myImage },
		{ id: 2, name: 'расклейка объявлений', description: 'Description 2', img: myImage },
		{ id: 3, name: 'печать и дизайн листовок', description: 'Description 3', img: myImage },
		{ id: 4, name: 'услуга промоутеров с рупором', description: 'Description 4', img: myImage },
		{ id: 5, name: 'проведение промо акций, дегустаций,семплингов.', description: 'Description 5', img: myImage },
		{ id: 6, name: 'аренда и продажа промостойек', description: 'Description 6', img: myImage },
		{ id: 7, name: 'Украшение шарами в Узбекистане', description: 'Description 7', img: myImage },
		{ id: 8, name: 'опросы,маркетинговое исследование', description: 'Description 8', img: myImage },
		{ id: 9, name: 'кастинг менеджер', description: 'Description 8', img: myImage },
		{ id: 10, name: 'опросы,маркетинговое исследование', description: 'Description 8', img: myImage },
	];


  return (
    <div className="App">
      <BrowserRouter>
        <div onClick={() => {
          document.documentElement.scrollTop = 0
        }} className={showbtn ? 'showbtn active z-[200000]' : 'showbtn z-[200000]'}><ArrowUpwardIcon /></div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<><Home /><Contact /></>} />
          <Route path="/services/:id" element={<ServicesInfo services={services} />} />
        </Routes>
        <About />
        <Services />
        <Location />
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App

import { useState } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
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
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import icon1 from '../public/image/icon.png';
import icon2 from '../public/image/icon2.png';
import icon3 from '../public/image/icon3.png';
import icon4 from '../public/image/icon4.png';
import icon5 from '../public/image/icon5.png';
import icon6 from '../public/image/icon6.png';
import icon7 from '../public/image/icon7.png';
import icon8 from '../public/image/icon8.png';
import icon9 from '../public/image/icon9.png';
import icon10 from '../public/image/icon10.png';
import icon11 from '../public/image/icon11.png';
import icon12 from '../public/image/icon12.png';
import icon13 from '../public/image/icon13.png';
import icon14 from '../public/image/icon14.png';
import icon15 from '../public/image/icon15.png';



function App() {
  const [showbtn, setShowbtn] = useState(false);
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 135) {
      setShowbtn(true)
    } else {
      setShowbtn(false)
    }
  })

	const services = [
		{ id: 1, name: 'Распростронение листовок.', description: 'Description 1', img: icon1, },
		{ id: 2, name: 'Расклейка объявлений.', description: 'Description 2', img: icon2 },
		{ id: 3, name: 'Печать и дизайн листовок.', description: 'Description 3', img: icon3 },
		{ id: 4, name: 'Услуга промоутеров с рупором.', description: 'Description 4', img: icon4 },
		{ id: 5, name: 'Проведение промо-акций, дегустаций, семплингов.', description: 'Description 5', img: icon5 },
		{ id: 6, name: 'Аренда и продажа промостойек.', description: 'Description 6', img: icon6 },
		{ id: 7, name: 'Украшение шарами.', description: 'Description 7', img: icon7 },
		{ id: 8, name: 'Опросы, маркетинговое исследование.', description: 'Description 8', img: icon8 },
		{ id: 9, name: 'Кастинг менеджер.', description: 'Description 9', img: icon9 },
		{ id: 10, name: 'Организция массовок.', description: 'Description 10', img: icon10 },
    { id: 11, name: 'Услуга тайный покупатель.', description: 'Description 10', img: icon11 },
    { id: 12, name: 'Организация выставок, корпоративов.', description: 'Description 10', img: icon12 },
    { id: 13, name: 'Регулеровка и проведение праздников.', description: 'Description 10', img: icon13 },
    { id: 14, name: 'Установка наружной рекламы.', description: 'Description 10', img: icon14 },
    { id: 15, name: 'Свободные руки помощи.', description: 'Description 10', img: icon15 },
	];


  return (
    <div className="App">
      <BrowserRouter>
        {/* <div onClick={() => {
          document.documentElement.scrollTop = 0
        }} className={showbtn ? 'showbtn active z-[2000]' : 'showbtn z-[2000]'}><ArrowUpwardIcon /></div> */}
        <Link to='/contact' className={showbtn ? 'showbtn-contact active z-[2000]' : 'showbtn-contact z-[2000]'}><LocalPhoneIcon /></Link>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<><Home /><Contact phoneNumber='+998907776688' /></>} />
          <Route path="/services/:id" element={<ServicesInfo services={services} />} />
        </Routes>
        <About />
        <Services services={services} />
        <Location />
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App

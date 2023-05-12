import './App.css'
import About from './components/About'
import Footer from './components/Footer'
import Home from './components/Home'
import Location from './components/Location'
import Navbar from './components/Navbar'
import Services from './components/Services'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Services />
      <Location />
      <Footer/>
    </div>
  )
}

export default App

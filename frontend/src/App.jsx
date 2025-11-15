import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HeroSlider from './components/HeroSlider'
import TravelCards from './components/TravelCards'
import Statistics from './components/Statistics'
import Reviews from './components/Reviews'
import Services from './components/Services'
import Footer from './components/Footer'
import TripDetail from './components/TripDetail'
import './App.css'

function Home() {
  return (
    <>
      <Navbar />
      <HeroSlider />
      <div className="min-h-screen">
        <TravelCards />
        <Statistics />
        <Reviews />
      </div>
      <Services />
      <Footer />
    </>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trip/:id" element={<><Navbar /><TripDetail /><Footer /></>} />
      </Routes>
    </Router>
  )
}

export default App

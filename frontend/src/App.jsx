import Navbar from './components/Navbar'
import HeroSlider from './components/HeroSlider'
import TravelCards from './components/TravelCards'
import Statistics from './components/Statistics'
import Reviews from './components/Reviews'
import Services from './components/Services'
import Footer from './components/Footer'
import './App.css'

function App() {
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

export default App

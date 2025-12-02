import './App.css'
import HeroVideo from './components/HeroVideo'
import Navbar from './components/Navbar'
import UpcomingTrips from './components/UpcomingTrips'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Navbar />
      <HeroVideo />
      <UpcomingTrips />
    </div>
  )
}

export default App

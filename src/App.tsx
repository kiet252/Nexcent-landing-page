import './App.css'
import Navbar from './components/Navbar'
import HomeSection from './components/home-section/HomeSection'

function App() {
  return (
    <div className="app-wrapper">
      <Navbar></Navbar>

      <HomeSection></HomeSection>
    </div>
  )
}

export default App
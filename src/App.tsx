import './App.css'
import Navbar from './components/Navbar'
import HomeSection from './components/home-section/HomeSection'
import BodySection from './components/body-section/BodySection'

function App() {
  return (
    <div className="app-wrapper">

      <Navbar></Navbar>
      
      <HomeSection></HomeSection>

      <BodySection></BodySection>
    </div>
  )
}

export default App
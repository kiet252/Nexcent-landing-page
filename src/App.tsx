import './App.css'
import Navbar from './components/Navbar'
import HomeSection from './components/home-section/HomeSection'
import BodySection from './components/body-section/BodySection'
import FooterSection from './components/footer-section/FooterSection'

function App() {
  return (
    <div className="app-wrapper">

      <Navbar></Navbar>
      
      <HomeSection></HomeSection>

      <BodySection></BodySection>

      <FooterSection></FooterSection>
    </div>
  )
}

export default App
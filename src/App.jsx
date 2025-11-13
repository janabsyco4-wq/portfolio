import { BrowserRouter as Router } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ParticleBackground from './components/ParticleBackground'

function App() {
  return (
    <Router>
      <div className="app">
        <ParticleBackground />
        <Navbar />
        <Hero key="hero" />
        <About key="about" />
        <Projects key="projects" />
        <Skills key="skills" />
        <Contact key="contact" />
        <Footer key="footer" />
      </div>
    </Router>
  )
}

export default App

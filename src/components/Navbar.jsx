import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './Navbar.css'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-container">
        <motion.div 
          className="nav-logo"
          onClick={() => scrollToSection('home')}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <div className="logo-text-container">
            <span className="logo-name">Shehrooz</span>
            <span className="logo-title">Full Stack Developer</span>
          </div>
        </motion.div>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item, index) => (
            <motion.li 
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <a 
                href={`#${item.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.toLowerCase())
                }}
                className="nav-link"
              >
                {item}
              </a>
            </motion.li>
          ))}
        </ul>

        <motion.button
          className="nav-cta"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection('contact')}
        >
          Hire Me
        </motion.button>

        <div 
          className={`hamburger ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar

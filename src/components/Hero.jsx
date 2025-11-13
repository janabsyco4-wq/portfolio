import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import './Hero.css'

// Terminal Window Component
const TerminalWindow = () => {
  const [lines, setLines] = useState([])
  
  const terminalCommands = [
    { text: '$ whoami', delay: 0 },
    { text: '> Shehrooz Hafeez', delay: 500, color: '#00AAFF' },
    { text: '$ cat role.txt', delay: 1000 },
    { text: '> Full Stack Developer', delay: 1500, color: '#00AAFF' },
    { text: '$ ls skills/', delay: 2000 },
    { text: '> React.js', delay: 2500, color: '#61DAFB' },
    { text: '> Node.js', delay: 2700, color: '#68A063' },
    { text: '> Python', delay: 2900, color: '#3776AB' },
    { text: '> MongoDB', delay: 3100, color: '#47A248' },
    { text: '$ git status', delay: 3500 },
    { text: '> On branch main', delay: 4000, color: '#00AAFF' },
    { text: '> Your portfolio is up to date', delay: 4300, color: '#00FF00' },
    { text: '$ echo "Ready to build amazing things"', delay: 4800 },
    { text: '> Ready to build amazing things', delay: 5300, color: '#00AAFF' },
    { text: '$ _', delay: 6000, isBlinking: true }
  ]
  
  useEffect(() => {
    terminalCommands.forEach((cmd) => {
      setTimeout(() => {
        setLines(prev => [...prev, cmd])
      }, cmd.delay)
    })
  }, [])
  
  return (
    <div className="terminal-window">
      <div className="terminal-header">
        <div className="terminal-buttons">
          <span className="terminal-btn close"></span>
          <span className="terminal-btn minimize"></span>
          <span className="terminal-btn maximize"></span>
        </div>
        <div className="terminal-title">shehrooz@portfolio:~</div>
      </div>
      <div className="terminal-body">
        {lines.map((line, index) => (
          <motion.div
            key={index}
            className={`terminal-line ${line.isBlinking ? 'blinking-cursor' : ''}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1 }}
            style={{ color: line.color || '#FFFFFF' }}
          >
            {line.text}
          </motion.div>
        ))}
      </div>
    </div>
  )
}



const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            className="hero-label"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Full Stack Developer
          </motion.span>
          
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Hi, I'm <span className="gradient-text">Shehrooz</span>
          </motion.h1>
          
          <motion.p 
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            I build scalable websites and applications that solve real business problems. 
            From stunning landing pages to complex e-commerce platforms, I deliver clean code and exceptional results.
          </motion.p>
          
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <motion.button
              className="btn btn-primary"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 85, 255, 0.8)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
            </motion.button>
            <motion.button
              className="btn btn-outline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </motion.button>
          </motion.div>

          <motion.div 
            className="hero-stats"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {[
              { number: '50+', label: 'Projects' },
              { number: '30+', label: 'Clients' },
              { number: '5★', label: 'Rating' }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="stat-item"
                whileHover={{ scale: 1.1 }}
              >
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div 
          className="hero-terminal"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <TerminalWindow />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

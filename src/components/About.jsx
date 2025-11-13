import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import './About.css'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="about" className="about" ref={ref}>
      <div className="about-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <span className="section-label">About Me</span>
          <h2 className="section-title">Specializing in Modern, High-Performance Web Applications</h2>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-image-card glass"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05, rotateY: 5 }}
          >
            <div className="image-wrapper">
              <img src={`${import.meta.env.BASE_URL}profile.jpg`} alt="Shehrooz Hafeez" />
              <div className="image-glow"></div>
            </div>
          </motion.div>

          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p>I'm a Full-Stack Web Developer with a passion for creating exceptional digital experiences. I specialize in building modern, scalable applications using cutting-edge technologies.</p>
            <p>Whether you need a stunning landing page, a complex e-commerce platform, or custom AI integration, I bring technical expertise and creative problem-solving to every project.</p>

            <div className="tech-icons">
              {['⚛️', '📱', '🚀', '🤖', '💻', '🎨'].map((icon, index) => (
                <motion.div
                  key={index}
                  className="tech-icon glass"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {icon}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

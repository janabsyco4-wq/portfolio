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
              <img src={`${import.meta.env.BASE_URL}profile-professional.jpg`} alt="Shehrooz Hafeez" />
              <div className="image-glow"></div>
            </div>
          </motion.div>

          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p>I'm a Computer Science student at COMSATS University Islamabad and a Full-Stack Developer with 2+ years of hands-on experience building production-grade web applications. I specialize in React, Next.js, Node.js, and MongoDB, delivering live systems that serve thousands of users.</p>
            <p>My work ranges from institutional platforms with secure authentication and admin dashboards to modern e-commerce solutions and AI-powered features. I've built the CFA Pakistan Member Directory (3,000+ members), NightXlace E-Commerce Platform, and Hotelogix Hotel Management System - all deployed and serving real users.</p>
            <p>From responsive frontends to scalable backends, I turn requirements into deployed, maintainable applications using modern tech stacks including REST APIs, JWT authentication, Prisma ORM, and cloud deployment on Vercel with MongoDB Atlas. I'm passionate about writing clean, efficient code and solving complex technical challenges.</p>

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

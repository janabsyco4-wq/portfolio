import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import './Projects.css'

const projectsData = [
  {
    id: 1,
    title: 'GENIX - Gym Website',
    description: 'Premium fitness platform with real-time workout tracking, personalized training plans, and nutrition guidance for achieving peak performance',
    category: 'Web',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Socket.io'],
    link: '/saas-landing.html',
    image: `${import.meta.env.BASE_URL}project-1.jpg`,
    bgPosition: 'center top'
  },
  {
    id: 2,
    title: 'NEXUS - Travel Agency',
    description: 'Luxury travel agency platform featuring AI-powered trip planning, virtual tours, and seamless booking experience for dream destinations',
    category: 'Web',
    tags: ['React', 'TypeScript', 'PostgreSQL', 'Stripe', 'AWS'],
    link: '/divi-index.html',
    image: `${import.meta.env.BASE_URL}project-2.jpg`,
    bgPosition: 'center top'
  },
  {
    id: 3,
    title: 'SHOPAI - E-commerce Website',
    description: 'Next-generation e-commerce platform with AI product recommendations, smart search, and secure payment gateway for enhanced shopping',
    category: 'Web',
    tags: ['Next.js', 'Python', 'Redis', 'PayPal', 'Docker'],
    link: '/index.html',
    image: `${import.meta.env.BASE_URL}screenshot-3.png`,
    bgPosition: 'left center'
  }
]

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="projects" className="projects" ref={ref}>
      <div className="projects-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">Featured Projects</h2>
        </motion.div>

        <motion.div 
          className="projects-grid"
          layout
        >
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card glass"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ 
                y: -20,
                rotateY: 5,
                rotateX: 5,
                boxShadow: '0 20px 60px rgba(0, 85, 255, 0.4)'
              }}
              layout
            >
              <div 
                className="project-image"
                style={{ 
                  backgroundImage: `url(${project.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: project.bgPosition
                }}
              >
                <div className="project-overlay">
                  <motion.div
                    className="view-btn"
                    whileHover={{ scale: 1.05 }}
                    style={{ cursor: 'default' }}
                  >
                    View Details
                  </motion.div>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects

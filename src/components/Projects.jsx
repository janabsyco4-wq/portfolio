import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import './Projects.css'

const projectsData = [
  {
    id: 1,
    title: 'CFA Pakistan - Member Directory',
    description: 'Live institutional platform managing 3,000+ members with secure authentication, admin dashboard, search, filtering, and cloud deployment on Vercel with MongoDB Atlas',
    category: 'Web',
    tags: ['Next.js 15', 'MongoDB', 'Tailwind CSS', 'JWT', 'Cloudinary'],
    link: 'https://cfa-directory.vercel.app/',
    liveUrl: 'https://cfa-directory.vercel.app/',
    bgPosition: 'center top',
    isLive: true,
    showIframe: true
  },
  {
    id: 2,
    title: 'NightXlace - E-Commerce Platform',
    description: 'Modern e-commerce website with responsive design, product catalog, shopping cart, secure checkout, and seamless user experience built with React and Node.js',
    category: 'Web',
    tags: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'REST API'],
    link: 'https://night-x-lace-e-commerce.vercel.app/',
    liveUrl: 'https://night-x-lace-e-commerce.vercel.app/',
    bgPosition: 'center top',
    isLive: true,
    showIframe: true
  },
  {
    id: 3,
    title: 'Hotelogix - Hotel Management',
    description: 'Full-stack hotel booking platform with room management, JWT authentication, role-based access control, and responsive design for seamless booking experience',
    category: 'Web',
    tags: ['React', 'Node.js', 'Express', 'Prisma', 'SQLite'],
    link: 'https://hotelogix-management-system.vercel.app/',
    liveUrl: 'https://hotelogix-management-system.vercel.app/',
    bgPosition: 'center top',
    isLive: true,
    showIframe: true
  },
  {
    id: 4,
    title: 'GENIX - AI SaaS Platform',
    description: 'Revolutionary AI-powered platform combining GPT-4, DALL-E, and advanced algorithms to transform creative workflows. Features include intelligent content generation, image synthesis, and automated optimization.',
    category: 'AI/ML',
    tags: ['Next.js', 'OpenAI', 'Stripe', 'Prisma', 'Tailwind'],
    link: '#',
    image: `${import.meta.env.BASE_URL}project-1.jpg`,
    bgPosition: 'center',
    isLive: false
  },
  {
    id: 5,
    title: 'NEXUS - Social Network',
    description: 'Next-generation social networking platform with real-time messaging, content sharing, and AI-powered recommendations. Built with modern web technologies for seamless user experience.',
    category: 'Web',
    tags: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Redis'],
    link: '#',
    image: `${import.meta.env.BASE_URL}project-2.jpg`,
    bgPosition: 'center',
    isLive: false
  },
  {
    id: 6,
    title: 'SHOPAI - E-Commerce Analytics',
    description: 'Intelligent e-commerce analytics dashboard providing real-time insights, predictive modeling, and automated reporting. Helps businesses make data-driven decisions.',
    category: 'Analytics',
    tags: ['Python', 'TensorFlow', 'React', 'FastAPI', 'PostgreSQL'],
    link: '#',
    image: `${import.meta.env.BASE_URL}screenshot-3.png`,
    bgPosition: 'center top',
    isLive: false
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
              <div className="project-image">
                {project.showIframe ? (
                  <iframe 
                    src={project.liveUrl}
                    title={project.title}
                    style={{
                      width: '200%',
                      height: '200%',
                      border: 'none',
                      transform: 'scale(0.5)',
                      transformOrigin: 'top left',
                      pointerEvents: 'none'
                    }}
                  />
                ) : (
                  <div 
                    style={{ 
                      backgroundImage: `url(${project.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: project.bgPosition,
                      width: '100%',
                      height: '100%'
                    }}
                  />
                )}
                <div className="project-overlay">
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="view-btn"
                    whileHover={{ scale: 1.05 }}
                  >
                    {project.isLive ? 'View Live' : 'View Details'}
                  </motion.a>
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

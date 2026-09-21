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
    title: 'Portfolio - Interactive 3D Experience',
    description: '3D animated portfolio website featuring interactive elements, smooth transitions, and modern design. Built with React Three Fiber for immersive user experience and stunning visual effects',
    category: 'Web',
    tags: ['React', 'Three.js', 'Framer Motion', 'Vite', 'Vercel'],
    link: 'https://portolio-project.vercel.app/',
    liveUrl: 'https://portolio-project.vercel.app/',
    bgPosition: 'center top',
    isLive: true,
    showIframe: true
  },
  {
    id: 5,
    title: "Glen's Mobile Auto - Landing Page",
    description: 'Modern landing page for mobile automotive services with responsive design, call-to-action sections, and professional service showcase. Clean UI with optimized performance.',
    category: 'Web',
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive', 'Vercel'],
    link: 'https://glens-mobile-auto12.vercel.app/',
    liveUrl: 'https://glens-mobile-auto12.vercel.app/',
    bgPosition: 'center top',
    isLive: true,
    showIframe: true
  },
  {
    id: 6,
    title: 'Houston Mobile Mechanic - Landing Page',
    description: 'Professional landing page for Houston-based mobile mechanic services featuring service showcase, contact integration, and responsive design optimized for mobile and desktop.',
    category: 'Web',
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive', 'Vercel'],
    link: 'https://houston-mobile-mechanic-git-main-shehrooz-hafeezs-projects.vercel.app/',
    liveUrl: 'https://houston-mobile-mechanic-git-main-shehrooz-hafeezs-projects.vercel.app/',
    bgPosition: 'center top',
    isLive: true,
    showIframe: true
  },
  {
    id: 7,
    title: 'Etsy Automation - AI-Powered Listing Creator',
    description: 'Complete automation workflow for Etsy sellers using Google Gemini AI for SEO optimization. Automatically creates listings with Google Sheets logging and email notifications. Reduces listing creation time from 30+ minutes to under 2 minutes.',
    category: 'AI/ML',
    tags: ['Node.js', 'Google Gemini', 'Etsy API', 'Google Sheets', 'Vercel'],
    link: 'https://github.com/janabsyco4-wq/etsy-g',
    githubLink: 'https://github.com/janabsyco4-wq/etsy-g',
    bgPosition: 'center',
    isLive: false,
    showGithub: true
  },
  {
    id: 8,
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
    id: 9,
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
    id: 10,
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
                ) : project.showGithub ? (
                  <div 
                    style={{ 
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'linear-gradient(135deg, #24292e 0%, #1a1d21 100%)',
                      position: 'relative'
                    }}
                  >
                    <svg height="120" width="120" viewBox="0 0 16 16" fill="white" style={{ opacity: 0.9 }}>
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                    </svg>
                  </div>
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
                    {project.showGithub ? 'View on GitHub' : (project.isLive ? 'View Live' : 'View Details')}
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

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import './Skills.css'

const skillsData = [
  { name: 'React.js', level: 95, icon: '⚛️' },
  { name: 'Next.js', level: 92, icon: '▲' },
  { name: 'Node.js', level: 90, icon: '🟢' },
  { name: 'JavaScript', level: 93, icon: '💛' },
  { name: 'TypeScript', level: 85, icon: '💙' },
  { name: 'Python', level: 88, icon: '🐍' },
  { name: 'MongoDB', level: 87, icon: '🍃' },
  { name: 'Express.js', level: 89, icon: '🚂' },
  { name: 'Tailwind CSS', level: 94, icon: '🎨' },
  { name: 'REST APIs', level: 91, icon: '🔌' },
  { name: 'JWT Auth', level: 88, icon: '🔐' },
  { name: 'Git & GitHub', level: 90, icon: '📦' }
]

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="skills" className="skills" ref={ref}>
      <div className="skills-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <span className="section-label">Skills</span>
          <h2 className="section-title">Technical Expertise</h2>
        </motion.div>

        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="skill-card glass"
              initial={{ opacity: 0, scale: 0.5, rotateY: -180 }}
              animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.1,
                rotateY: 10,
                boxShadow: '0 20px 60px rgba(0, 85, 255, 0.4)'
              }}
            >
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.name}</h3>
              <div className="skill-progress">
                <motion.div
                  className="skill-fill"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                />
              </div>
              <span className="skill-level">{skill.level}%</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import './Contact.css'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="contact-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">Let's Work Together</h2>
        </motion.div>

        <motion.div 
          className="contact-methods-centered"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="contact-description">
            Have a project in mind? I'm always open to discussing new opportunities and creative ideas. 
            Feel free to reach out through any of these channels:
          </p>
          
          <div className="contact-methods">
            {[
              { icon: '📧', label: 'Email', value: 'shehroozking3@gmail.com', link: 'mailto:shehroozking3@gmail.com' },
              { icon: '💼', label: 'Fiverr', value: 'View Profile', link: 'https://www.fiverr.com/s/DBNNYlN' },
              { icon: '💻', label: 'GitHub', value: '@janabsyco4-wq', link: 'https://github.com/janabsyco4-wq' }
            ].map((method, index) => (
              <motion.a
                key={index}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-method glass"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -10 }}
              >
                <div className="method-icon">{method.icon}</div>
                <div>
                  <strong>{method.label}</strong>
                  <span>{method.value}</span>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact

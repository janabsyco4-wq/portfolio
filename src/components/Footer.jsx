import { motion } from 'framer-motion'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <motion.div
          className="footer-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="footer-brand">
            <motion.div 
              className="footer-logo"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <span className="logo-bracket-footer">{'<'}</span>
              <span className="logo-initials-footer">SH</span>
              <span className="logo-bracket-footer">{'>'}</span>
            </motion.div>
            <h3 className="footer-name">Shehrooz Hafeez</h3>
            <p>Computer Science Student & Full Stack Developer</p>
            <p style={{ fontSize: '0.9rem', marginTop: '0.5rem', color: '#888' }}>
              shehroozhafeezpriv@gmail.com | +92 310 4594964
            </p>
          </div>

          <div className="footer-social">
            {[
              { icon: '📧', link: 'mailto:shehroozhafeezpriv@gmail.com', label: 'Email' },
              { icon: '📱', link: 'tel:+923104594964', label: 'Phone' },
              { icon: '💻', link: 'https://github.com/janabsyco4-wq', label: 'GitHub' }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon glass"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.5 }}
                title={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        <div className="footer-bottom">
          <p>&copy; 2025 Shehrooz Hafeez. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

import { motion } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import { useInView } from 'framer-motion'
import emailjs from '@emailjs/browser'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState({ type: '', message: '' })

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init('GUdXpF8CslTIT55RX')
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus({ type: '', message: '' })

    try {
      // Send email using EmailJS with correct template variables
      const templateParams = {
        to_name: 'Shehrooz',
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        reply_to: formData.email
      }

      await emailjs.send(
        'service_027xnfi',
        'template_rn9k5yd',
        templateParams
      )
      
      setStatus({ 
        type: 'success', 
        message: 'Message sent successfully! I will get back to you soon.' 
      })
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('EmailJS Error:', error)
      const errorMessage = error?.text || error?.message || 'Unknown error'
      setStatus({ 
        type: 'error', 
        message: `Failed to send: ${errorMessage}. Please email: shehroozking3@gmail.com` 
      })
    } finally {
      setLoading(false)
    }
  }

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

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>Have a project in mind? I'm always open to discussing new opportunities and creative ideas.</p>
            
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
                  whileHover={{ scale: 1.05, x: 10 }}
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

          <motion.form
            className="contact-form glass"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                required
              />
            </div>
            {status.message && (
              <div style={{
                padding: '15px',
                borderRadius: '8px',
                marginBottom: '20px',
                background: status.type === 'success' ? '#d4edda' : '#f8d7da',
                color: status.type === 'success' ? '#155724' : '#721c24',
                border: `1px solid ${status.type === 'success' ? '#c3e6cb' : '#f5c6cb'}`
              }}>
                {status.message}
              </div>
            )}
            
            <motion.button
              type="submit"
              className="submit-btn"
              whileHover={{ scale: loading ? 1 : 1.05 }}
              whileTap={{ scale: loading ? 1 : 0.95 }}
              disabled={loading}
              style={{ opacity: loading ? 0.7 : 1, cursor: loading ? 'not-allowed' : 'pointer' }}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact

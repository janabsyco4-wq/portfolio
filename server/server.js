const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Create transporter
const transporter = nodemailer.createTransport({
  service: 'gmail', // or 'outlook', 'yahoo', etc.
  auth: {
    user: process.env.EMAIL_USER, // Your email
    pass: process.env.EMAIL_PASS  // Your app password
  }
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  // Validate input
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  // Email to you (notification)
  const mailOptionsToYou = {
    from: process.env.EMAIL_USER,
    to: 'shehroozking3@gmail.com', // Your email
    subject: `New Contact Form Message from ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; background: #f4f4f4;">
        <div style="max-width: 600px; margin: 0 auto; background: white; padding: 30px; border-radius: 10px;">
          <h2 style="color: #0055FF;">New Contact Form Submission</h2>
          <hr style="border: 1px solid #eee;">
          
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          
          <h3 style="color: #333; margin-top: 20px;">Message:</h3>
          <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; border-left: 4px solid #0055FF;">
            ${message}
          </div>
          
          <hr style="border: 1px solid #eee; margin-top: 30px;">
          <p style="color: #666; font-size: 12px;">This email was sent from your portfolio contact form.</p>
        </div>
      </div>
    `
  };

  // Auto-reply to sender
  const mailOptionsToSender = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Thank you for contacting me!',
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; background: #f4f4f4;">
        <div style="max-width: 600px; margin: 0 auto; background: white; padding: 30px; border-radius: 10px;">
          <h2 style="color: #0055FF;">Thank You, ${name}!</h2>
          <hr style="border: 1px solid #eee;">
          
          <p>I've received your message and will get back to you as soon as possible.</p>
          
          <h3 style="color: #333; margin-top: 20px;">Your Message:</h3>
          <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; border-left: 4px solid #0055FF;">
            ${message}
          </div>
          
          <hr style="border: 1px solid #eee; margin-top: 30px;">
          <p style="color: #666;">Best regards,<br><strong>Shehrooz Hafeez</strong><br>Full Stack Developer</p>
          <p style="color: #999; font-size: 12px;">Email: shehroozking3@gmail.com</p>
        </div>
      </div>
    `
  };

  try {
    // Send both emails
    await transporter.sendMail(mailOptionsToYou);
    await transporter.sendMail(mailOptionsToSender);

    res.status(200).json({ 
      success: true, 
      message: 'Email sent successfully!' 
    });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      error: 'Failed to send email',
      details: error.message 
    });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running!' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

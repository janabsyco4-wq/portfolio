const nodemailer = require('nodemailer');
require('dotenv').config();

console.log('🧪 Testing Email Configuration...\n');
console.log('📧 Email User:', process.env.EMAIL_USER);
console.log('🔑 Password Length:', process.env.EMAIL_PASS ? process.env.EMAIL_PASS.length : 0);
console.log('🔑 Password (first 4 chars):', process.env.EMAIL_PASS ? process.env.EMAIL_PASS.substring(0, 4) + '...' : 'NOT SET');
console.log('\n⏳ Creating transporter...');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

console.log('✅ Transporter created');
console.log('\n📤 Sending test email...\n');

const mailOptions = {
  from: process.env.EMAIL_USER,
  to: 'shehroozking3@gmail.com',
  subject: '✅ Test Email from Portfolio Backend',
  html: `
    <div style="font-family: Arial, sans-serif; padding: 20px; background: #f4f4f4;">
      <div style="max-width: 600px; margin: 0 auto; background: white; padding: 30px; border-radius: 10px;">
        <h2 style="color: #0055FF;">🎉 Email Configuration Test</h2>
        <hr style="border: 1px solid #eee;">
        
        <p><strong>✅ SUCCESS!</strong></p>
        <p>Your Nodemailer configuration is working correctly!</p>
        
        <h3 style="color: #333; margin-top: 20px;">Configuration Details:</h3>
        <ul>
          <li><strong>Email:</strong> ${process.env.EMAIL_USER}</li>
          <li><strong>Service:</strong> Gmail</li>
          <li><strong>Status:</strong> Connected ✓</li>
          <li><strong>Time:</strong> ${new Date().toLocaleString()}</li>
        </ul>
        
        <hr style="border: 1px solid #eee; margin-top: 30px;">
        <p style="color: #666; font-size: 12px;">This is a test email from your portfolio contact form backend.</p>
      </div>
    </div>
  `
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('❌ ERROR:', error.message);
    console.log('\n🔍 Error Details:');
    console.log('   Code:', error.code);
    console.log('   Response:', error.response);
    console.log('\n💡 Possible Solutions:');
    console.log('   1. Check if 2-Step Verification is enabled');
    console.log('   2. Generate a NEW App Password');
    console.log('   3. Make sure password has NO spaces');
    console.log('   4. Link: https://myaccount.google.com/apppasswords');
    process.exit(1);
  } else {
    console.log('✅ SUCCESS! Email sent!');
    console.log('📬 Message ID:', info.messageId);
    console.log('📧 Check your inbox: shehroozking3@gmail.com');
    console.log('\n🎉 Your email configuration is working perfectly!');
    process.exit(0);
  }
});

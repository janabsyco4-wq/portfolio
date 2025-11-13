# Portfolio Contact Form Backend

## Setup Instructions

### 1. Install Dependencies
```bash
cd server
npm install
```

### 2. Configure Email

1. Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

2. Edit `.env` file with your email credentials:
```
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

### 3. Get Gmail App Password

1. Go to https://myaccount.google.com/security
2. Enable **2-Step Verification**
3. Go to **App Passwords**
4. Select **Mail** and **Other (Custom name)**
5. Generate password
6. Copy the 16-character password to `.env`

### 4. Start Server

Development mode (auto-restart):
```bash
npm run dev
```

Production mode:
```bash
npm start
```

Server will run on http://localhost:5000

### 5. Test

Send a test request:
```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","message":"Hello!"}'
```

## Features

✅ Sends email notification to you
✅ Sends auto-reply to sender
✅ Beautiful HTML email templates
✅ Error handling
✅ CORS enabled
✅ Input validation

## Deployment

For production, deploy to:
- Heroku
- Vercel (Serverless Functions)
- Railway
- DigitalOcean

Remember to set environment variables on your hosting platform!

# 📧 EmailJS Setup Guide - Contact Form

## ✅ EmailJS Installed!

Your contact form is now ready to use EmailJS (free email service).

---

## 🚀 Quick Setup (5 minutes):

### Step 1: Create EmailJS Account

1. Go to: https://www.emailjs.com/
2. Click "Sign Up" (it's FREE)
3. Sign up with Google or Email

---

### Step 2: Add Email Service

1. Go to: https://dashboard.emailjs.com/admin
2. Click "Add New Service"
3. Choose **Gmail** (recommended)
4. Click "Connect Account"
5. Sign in with your Gmail: **shehroozking3@gmail.com**
6. Copy the **Service ID** (looks like: `service_abc123`)

---

### Step 3: Create Email Template

1. Go to: https://dashboard.emailjs.com/admin/templates
2. Click "Create New Template"
3. Use this template:

```
Subject: New Portfolio Contact from {{from_name}}

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}
```

4. Click "Save"
5. Copy the **Template ID** (looks like: `template_xyz789`)

---

### Step 4: Get Public Key

1. Go to: https://dashboard.emailjs.com/admin/account
2. Find "Public Key" section
3. Copy your **Public Key** (looks like: `abc123XYZ`)

---

### Step 5: Update Your Code

Open: `src/components/Contact.jsx`

Replace these lines (around line 17-19):

```javascript
const serviceId = 'YOUR_SERVICE_ID'  // Replace with your Service ID
const templateId = 'YOUR_TEMPLATE_ID'  // Replace with your Template ID
const publicKey = 'YOUR_PUBLIC_KEY'  // Replace with your Public Key
```

With your actual IDs:

```javascript
const serviceId = 'service_abc123'  // Your actual Service ID
const templateId = 'template_xyz789'  // Your actual Template ID
const publicKey = 'abc123XYZ'  // Your actual Public Key
```

---

### Step 6: Deploy

```bash
git add .
git commit -m "Configure EmailJS"
git push
npm run deploy
```

---

## ✅ Done!

Your contact form will now:
- ✅ Send emails directly to: shehroozking3@gmail.com
- ✅ Work on GitHub Pages (no backend needed)
- ✅ Free: 200 emails/month
- ✅ No "mailto:" popup
- ✅ Professional email delivery

---

## 🎯 Benefits:

- ✅ **No backend server needed**
- ✅ **Works with GitHub Pages**
- ✅ **Free forever** (200 emails/month)
- ✅ **Spam protection**
- ✅ **Email templates**
- ✅ **Delivery tracking**

---

## 🐛 Troubleshooting:

### If emails don't send:
1. Check Service ID, Template ID, and Public Key are correct
2. Make sure Gmail is connected in EmailJS dashboard
3. Check browser console for errors
4. Verify you're under 200 emails/month limit

### Test your setup:
1. Go to EmailJS dashboard
2. Click "Test" on your template
3. Send a test email

---

## 📝 Quick Reference:

- EmailJS Dashboard: https://dashboard.emailjs.com
- Documentation: https://www.emailjs.com/docs/
- Free Plan: 200 emails/month
- Your Email: shehroozking3@gmail.com

---

**Setup EmailJS now and your contact form will work perfectly!** 🚀

# Email Troubleshooting Guide

## Quick Fixes to Try:

### 1. Check Browser Console
1. Open your website
2. Press F12 to open Developer Tools
3. Go to Console tab
4. Submit a form and check for errors
5. Look for "Sending query email with params:" messages

### 2. Verify EmailJS Template Variables
Your templates must use these EXACT variable names:

**Query Template Variables:**
- {{to_email}}
- {{from_name}}
- {{from_email}}
- {{phone}}
- {{course}}
- {{message}}
- {{timestamp}}

**Feedback Template Variables:**
- {{to_email}}
- {{from_name}}
- {{from_email}}
- {{courseAttended}}
- {{rating}}
- {{message}}
- {{timestamp}}

### 3. Check EmailJS Dashboard
1. Go to https://dashboard.emailjs.com/
2. Check "Email History" for sent emails
3. Look for failed sends and error messages

### 4. Verify Email Service Setup
1. In EmailJS Dashboard → Email Services
2. Make sure your Gmail service is connected
3. Test the connection

### 5. Check Spam/Junk Folder
- Check tprasanna1020@gmail.com spam folder
- Add noreply@emailjs.com to safe senders

### 6. Template Configuration
Make sure your templates have:
- **To Email**: {{to_email}} (this will be tprasanna1020@gmail.com)
- **From Name**: {{from_name}}
- **Reply To**: {{from_email}}

### 7. Test with Simple Template
Create a test template with minimal content:
```
Subject: Test Email

Name: {{from_name}}
Email: {{from_email}}
Message: {{message}}
```

## Common Issues:

1. **Wrong variable names** in templates
2. **Email service not properly connected**
3. **Public key incorrect**
4. **Template IDs wrong**
5. **Gmail blocking emails** (check security settings)

## Debug Steps:
1. Submit a form
2. Check browser console for logs
3. Check EmailJS dashboard for send history
4. Check spam folder
5. Verify all IDs match

If still not working, check the browser console logs when submitting forms - they will show the exact error.
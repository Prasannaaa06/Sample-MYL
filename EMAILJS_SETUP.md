# EmailJS Setup Guide

## Step 1: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up for a free account
3. Verify your email address

## Step 2: Add Email Service
1. Go to Email Services in your EmailJS dashboard
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. Note down your **Service ID** 

## Step 3: Create Email Templates

### Query Template
1. Go to Email Templates → Create New Template
2. Template Name: "MYL Academy - New Query"
3. **To Email**: tprasanna1020@gmail.com
4. Template Content:
```
Subject: New Query from {{from_name}} - MYL Academy

Dear MYL Academy Team,

You have received a new query from your website:

📋 QUERY DETAILS:
👤 Name: {{from_name}}
📧 Email: {{from_email}}
📱 Phone: {{phone}}
🎓 Course Interest: {{course}}
💬 Query: {{message}}

⏰ Submitted on: {{timestamp}}

Please respond to the customer within 24 hours.

Best regards,
MYL Academy Website System
```
4. Note down your **Query Template ID**

### Feedback Template
1. Create another template
2. Template Name: "MYL Academy - New Feedback"
3. **To Email**: tprasanna1020@gmail.com
4. Template Content:
```
Subject: New Feedback from {{from_name}} - MYL Academy

Dear MYL Academy Team,

You have received new feedback from your website:

⭐ FEEDBACK DETAILS:
👤 Name: {{from_name}}
📧 Email: {{from_email}}
🎓 Course Attended: {{courseAttended}}
⭐ Rating: {{rating}}/5 stars
💭 Feedback: {{message}}

⏰ Submitted on: {{timestamp}}

This feedback can help improve your services.

Best regards,
MYL Academy Website System
```
4. Note down your **Feedback Template ID**

## Step 4: Get Public Key
1. Go to Account → General
2. Copy your **Public Key**

## Step 5: Update Configuration
Replace the values in `src/lib/database.js`:

```javascript
const EMAILJS_SERVICE_ID = 'your_service_id_here';
const EMAILJS_TEMPLATE_ID_QUERY = 'your_query_template_id_here';
const EMAILJS_TEMPLATE_ID_FEEDBACK = 'your_feedback_template_id_here';
const EMAILJS_PUBLIC_KEY = 'your_public_key_here';
```

**IMPORTANT**: All emails will be sent to **tprasanna1020@gmail.com**

## Step 6: Test
1. Submit a query or feedback through your website
2. Check **tprasanna1020@gmail.com** inbox
3. Verify the email is received with correct information
4. Test both Query and Feedback forms

## Free Plan Limits
- 200 emails per month
- EmailJS branding in emails
- Upgrade to paid plan for more emails and remove branding

## Troubleshooting
- Make sure all IDs are correct
- Check browser console for errors
- Verify email service is properly connected
- Test with a simple template first
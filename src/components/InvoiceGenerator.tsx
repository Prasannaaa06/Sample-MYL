import React from 'react';

// Add EmailJS script to head if not already present
if (typeof window !== 'undefined' && !document.querySelector('script[src*="emailjs"]')) {
  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
  document.head.appendChild(script);
}

interface InvoiceData {
  studentName: string;
  email: string;
  phone: string;
  courseName: string;
  amount: number;
  batch: string;
  transactionId: string;
  date: string;
}

export const generateInvoiceHTML = (data: InvoiceData): string => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Invoice - MYL Academy</title>
      <style>
        body { font-family: 'Inter', Arial, sans-serif; margin: 0; padding: 20px; background: #f5f5f5; }
        .invoice { max-width: 800px; margin: 0 auto; background: white; padding: 40px; border-radius: 10px; box-shadow: 0 4px 20px rgba(0,0,0,0.1); }
        .header { text-align: center; margin-bottom: 40px; border-bottom: 2px solid #3b82f6; padding-bottom: 20px; }
        .logo { font-size: 28px; font-weight: bold; color: #3b82f6; margin-bottom: 10px; }
        .invoice-title { font-size: 24px; color: #333; margin: 20px 0; }
        .invoice-info { display: flex; justify-content: space-between; margin-bottom: 30px; }
        .info-section { flex: 1; }
        .info-title { font-weight: bold; color: #3b82f6; margin-bottom: 10px; }
        .details-table { width: 100%; border-collapse: collapse; margin: 30px 0; }
        .details-table th, .details-table td { padding: 15px; text-align: left; border-bottom: 1px solid #eee; }
        .details-table th { background: #f8fafc; font-weight: bold; color: #3b82f6; }
        .total-section { text-align: right; margin-top: 30px; padding-top: 20px; border-top: 2px solid #3b82f6; }
        .total-amount { font-size: 24px; font-weight: bold; color: #3b82f6; }
        .footer { text-align: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid #eee; color: #666; }
        .transaction-id { background: #f0f9ff; padding: 10px; border-radius: 5px; font-family: monospace; }
      </style>
    </head>
    <body>
      <div class="invoice">
        <div class="header">
          <div class="logo">MYL ACADEMY</div>
          <div style="color: #666;">Transform Your Future with Quality Education</div>
          <div class="invoice-title">COURSE ENROLLMENT INVOICE</div>
        </div>

        <div class="invoice-info">
          <div class="info-section">
            <div class="info-title">Bill To:</div>
            <div><strong>${data.studentName}</strong></div>
            <div>${data.email}</div>
            <div>${data.phone}</div>
          </div>
          <div class="info-section" style="text-align: right;">
            <div class="info-title">Invoice Details:</div>
            <div><strong>Date:</strong> ${data.date}</div>
            <div><strong>Invoice #:</strong> MYL-${data.transactionId.slice(-8)}</div>
            <div class="transaction-id">
              <strong>Transaction ID:</strong><br>${data.transactionId}
            </div>
          </div>
        </div>

        <table class="details-table">
          <thead>
            <tr>
              <th>Course Details</th>
              <th>Batch</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>${data.courseName}</strong><br>
                <small style="color: #666;">Course Enrollment Fee</small>
              </td>
              <td>${data.batch}</td>
              <td><strong>₹${data.amount.toLocaleString()}</strong></td>
            </tr>
          </tbody>
        </table>

        <div class="total-section">
          <div style="margin-bottom: 10px;">
            <strong>Subtotal: ₹${data.amount.toLocaleString()}</strong>
          </div>
          <div style="margin-bottom: 10px;">
            <strong>Tax: ₹0</strong>
          </div>
          <div class="total-amount">
            Total Amount: ₹${data.amount.toLocaleString()}
          </div>
        </div>

        <div class="footer">
          <p><strong>Thank you for choosing MYL Academy!</strong></p>
          <p>For any queries, contact us at: <strong>+91 9884002174</strong> | <strong>BTS Saravanan</strong></p>
          <p style="margin-top: 20px; font-size: 12px; color: #999;">
            This is a computer-generated invoice. No signature required.
          </p>
        </div>
      </div>
    </body>
    </html>
  `;
};

export const sendInvoiceEmail = async (invoiceData: InvoiceData): Promise<boolean> => {
  try {
    // Using EmailJS service
    const emailData = {
      service_id: 'service_mylacademy',
      template_id: 'template_invoice',
      user_id: 'YOUR_EMAILJS_USER_ID',
      template_params: {
        to_email: invoiceData.email,
        to_name: invoiceData.studentName,
        course_name: invoiceData.courseName,
        amount: invoiceData.amount.toLocaleString(),
        batch: invoiceData.batch,
        transaction_id: invoiceData.transactionId,
        date: invoiceData.date,
        from_name: 'MYL Academy'
      }
    };

    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(emailData)
    });

    if (response.ok) {
      return true;
    } else {
      throw new Error('EmailJS failed');
    }
  } catch (error) {
    console.error('Error sending invoice:', error);
    
    // Fallback: Use Google Apps Script to send email
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbyjHbzKiAz_rI4_eZhku3rO1i_vUlfq8BUJFtpwN-D0MjCmGzMsvNtnx7eNps6mhCHxug/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          action: 'sendEmail',
          email: invoiceData.email,
          name: invoiceData.studentName,
          course: invoiceData.courseName,
          amount: invoiceData.amount,
          batch: invoiceData.batch,
          transactionId: invoiceData.transactionId,
          date: invoiceData.date
        })
      });
      
      return true;
    } catch (fallbackError) {
      console.error('Fallback email failed:', fallbackError);
      return false;
    }
  }
};
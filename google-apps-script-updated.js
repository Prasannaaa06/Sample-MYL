// Google Apps Script code to save data to Google Sheets and send emails
// 1. Go to script.google.com
// 2. Create new project
// 3. Paste this code
// 4. Deploy as web app
// 5. Copy the web app URL to googleSheets.ts

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    
    // Handle email sending
    if (data.action === 'sendEmail') {
      sendInvoiceEmail(data);
      return ContentService
        .createTextOutput(JSON.stringify({success: true, message: 'Email sent'}))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    // Handle data saving to sheet
    const sheet = SpreadsheetApp.openById('1FJ4P559VXhEhgdMh0lXLNYQeREeRVcrcqscV9t-P9r0').getActiveSheet();
    
    // Add headers if sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.getRange(1, 1, 1, 9).setValues([[
        'Timestamp', 'Name', 'Email', 'Phone', 'Course', 'Amount', 'Batch', 'Transaction ID', 'Payment Date'
      ]]);
    }
    
    // Add new row with payment data
    sheet.appendRow([
      data.timestamp,
      data.name,
      data.email,
      data.phone,
      data.course,
      data.amount,
      data.batch,
      data.transactionId,
      data.date
    ]);
    
    return ContentService
      .createTextOutput(JSON.stringify({success: true}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({success: false, error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function sendInvoiceEmail(data) {
  try {
    const subject = `Course Enrollment Invoice - ${data.course}`;
    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #3b82f6; margin-bottom: 10px;">MYL ACADEMY</h1>
          <h2 style="color: #333;">Course Enrollment Invoice</h2>
        </div>
        
        <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <h3 style="color: #3b82f6; margin-bottom: 15px;">Payment Details</h3>
          <p><strong>Student Name:</strong> ${data.name}</p>
          <p><strong>Course:</strong> ${data.course}</p>
          <p><strong>Batch:</strong> ${data.batch}</p>
          <p><strong>Amount:</strong> ₹${data.amount}</p>
          <p><strong>Transaction ID:</strong> ${data.transactionId}</p>
          <p><strong>Date:</strong> ${data.date}</p>
        </div>
        
        <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
          <p><strong>Thank you for choosing MYL Academy!</strong></p>
          <p>For any queries, contact us at: <strong>+91 9884002174</strong></p>
          <p><strong>BTS Saravanan</strong></p>
        </div>
      </div>
    `;
    
    MailApp.sendEmail({
      to: data.email,
      subject: subject,
      htmlBody: htmlBody
    });
    
    Logger.log('Email sent successfully to: ' + data.email);
  } catch (error) {
    Logger.log('Error sending email: ' + error.toString());
    throw error;
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput('Google Sheets API is working!')
    .setMimeType(ContentService.MimeType.TEXT);
}
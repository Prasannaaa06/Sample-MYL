// Google Apps Script code to save data to Google Sheets
// 1. Go to script.google.com
// 2. Create new project
// 3. Paste this code
// 4. Deploy as web app
// 5. Copy the web app URL to googleSheets.ts

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    
    // Open your Google Sheet (replace with your sheet ID)
    const sheet = SpreadsheetApp.openById('https://docs.google.com/spreadsheets/d/1FJ4P559VXhEhgdMh0lXLNYQeREeRVcrcqscV9t-P9r0/edit?usp=sharing').getActiveSheet();
    
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

function doGet(e) {
  return ContentService
    .createTextOutput('Google Sheets API is working!')
    .setMimeType(ContentService.MimeType.TEXT);
}
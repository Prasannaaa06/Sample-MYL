interface PaymentData {
  name: string;
  email: string;
  phone: string;
  course: string;
  amount: number;
  batch: string;
  transactionId: string;
  date: string;
}

export const saveToGoogleSheets = async (data: PaymentData): Promise<boolean> => {
  try {
    // Google Apps Script Web App URL
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyjHbzKiAz_rI4_eZhku3rO1i_vUlfq8BUJFtpwN-D0MjCmGzMsvNtnx7eNps6mhCHxug/exec';
    
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        phone: data.phone,
        course: data.course,
        amount: data.amount,
        batch: data.batch,
        transactionId: data.transactionId,
        date: data.date,
        timestamp: new Date().toLocaleString('en-IN')
      })
    });

    return true;
  } catch (error) {
    console.error('Error saving to Google Sheets:', error);
    // Continue even if sheets save fails
    return true;
  }
};
import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { CheckCircle, Download, Mail } from "lucide-react";
import { generateInvoiceHTML, sendInvoiceEmail } from "@/components/InvoiceGenerator";
import { saveToGoogleSheets } from "@/utils/googleSheets";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const [invoiceSent, setInvoiceSent] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  // Get payment details from URL parameters
  const transactionId = searchParams.get('txn_id') || 'TXN' + Date.now();
  const studentName = searchParams.get('name') || 'Student';
  const email = searchParams.get('email') || '';
  const phone = searchParams.get('phone') || '';
  const courseName = searchParams.get('course') || 'Course';
  const amount = parseInt(searchParams.get('amount') || '0');
  const batch = searchParams.get('batch') || '';

  const invoiceData = {
    studentName,
    email,
    phone,
    courseName,
    amount,
    batch,
    transactionId,
    date: new Date().toLocaleDateString('en-IN')
  };

  const handleDownloadInvoice = () => {
    const invoiceHTML = generateInvoiceHTML(invoiceData);
    const blob = new Blob([invoiceHTML], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `MYL-Academy-Invoice-${transactionId.slice(-8)}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleSendInvoice = async () => {
    setIsGenerating(true);
    
    // Save to Google Sheets
    const sheetsSaved = await saveToGoogleSheets(invoiceData);
    
    // Send invoice email
    const emailSent = await sendInvoiceEmail(invoiceData);
    
    if (emailSent) {
      setInvoiceSent(true);
      alert('Invoice sent to your email successfully! Payment data saved.');
    } else {
      alert('Error sending invoice. Please download it manually.');
    }
    
    setIsGenerating(false);
  };

  // Auto-save to Google Sheets on page load
  useEffect(() => {
    if (transactionId && studentName && email) {
      saveToGoogleSheets(invoiceData);
    }
  }, []);

  return (
    <Layout>
      <section className="py-20" style={{background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 25%, #60a5fa 50%, #93c5fd 75%, #dbeafe 100%)'}}>
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 text-white">
              <CheckCircle className="w-20 h-20 text-green-400 mx-auto mb-6" />
              
              <h1 className="font-inter text-3xl md:text-4xl font-bold mb-4">
                Payment Successful!
              </h1>
              
              <p className="font-inter text-lg mb-8 text-white/90">
                Thank you for enrolling in {courseName}. Your payment has been processed successfully.
              </p>

              <div className="bg-white/20 rounded-2xl p-6 mb-8 text-left">
                <h3 className="font-inter text-xl font-bold mb-4">Payment Details</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Student Name:</span>
                    <span className="font-semibold">{studentName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Course:</span>
                    <span className="font-semibold">{courseName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Batch:</span>
                    <span className="font-semibold">{batch}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Amount:</span>
                    <span className="font-semibold">₹{amount.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Transaction ID:</span>
                    <span className="font-semibold font-mono text-sm">{transactionId}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <Button
                  onClick={handleDownloadInvoice}
                  className="font-inter bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Invoice
                </Button>
                
                <Button
                  onClick={handleSendInvoice}
                  disabled={isGenerating || invoiceSent}
                  className="font-inter bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  {isGenerating ? 'Sending...' : invoiceSent ? 'Invoice Sent' : 'Email Invoice'}
                </Button>
              </div>

              <div className="text-center">
                <p className="text-white/80 mb-4">
                  We will contact you at {phone} with course details soon.
                </p>
                <Button asChild variant="outline" className="border-white/40 text-white hover:bg-white/10">
                  <Link to="/">
                    Back to Home
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PaymentSuccess;
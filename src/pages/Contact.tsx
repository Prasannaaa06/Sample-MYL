import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { Mail, Phone, MapPin } from "lucide-react";
import { saveQuery, saveFeedback } from "@/lib/database";
import { useState } from "react";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleQuerySubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.target);
    const queryData = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      courseInterest: formData.get('course'),
      query: formData.get('message')
    };
    
    const result = await saveQuery(queryData);
    
    if (result.success) {
      setSubmitMessage('Query submitted successfully!');
      e.target.reset();
    } else {
      setSubmitMessage('Error submitting query.');
    }
    
    setIsSubmitting(false);
    setTimeout(() => setSubmitMessage(''), 5000);
  };

  const handleFeedbackSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.target);
    const feedbackData = {
      name: formData.get('name'),
      email: formData.get('email'),
      courseAttended: formData.get('courseAttended'),
      rating: formData.get('rating'),
      feedback: formData.get('message')
    };
    
    const result = await saveFeedback(feedbackData);
    
    if (result.success) {
      setSubmitMessage('Feedback submitted successfully!');
      e.target.reset();
    } else {
      setSubmitMessage('Error submitting feedback.');
    }
    
    setIsSubmitting(false);
    setTimeout(() => setSubmitMessage(''), 5000);
  };
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have questions about our courses or need help choosing the right program for you? 
              We're here to help guide you on your learning journey.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-8 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile-First Layout: Form First, then Contact Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Query and Feedback Forms - Priority on Mobile */}
            <div className="order-1 lg:order-2 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-6 lg:p-8 shadow-xl border-2 border-blue-200">
              {/* Mobile Branding Header */}
              <div className="text-center mb-6 lg:hidden">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-3 p-3">
                  <img src="/myl-logo.svg" alt="MYL Academy" className="w-12 h-12 object-contain" />
                </div>
                <h2 className="text-xl font-bold text-gray-800">Connect With Us</h2>
                <p className="text-sm text-gray-600 mt-1">Start Your Learning Journey Today</p>
              </div>

              <div className="flex justify-center mb-6">
                <div className="flex bg-white rounded-lg p-1 shadow-md">
                  <button 
                    className="px-4 lg:px-6 py-2 rounded-md text-sm font-medium transition-colors bg-primary text-white"
                    id="queryTab"
                    onClick={() => {
                      document.getElementById('queryForm').classList.remove('hidden');
                      document.getElementById('feedbackForm').classList.add('hidden');
                      document.getElementById('queryTab').classList.add('bg-primary', 'text-white');
                      document.getElementById('queryTab').classList.remove('text-gray-600');
                      document.getElementById('feedbackTab').classList.remove('bg-primary', 'text-white');
                      document.getElementById('feedbackTab').classList.add('text-gray-600');
                    }}
                  >
                    Query Form
                  </button>
                  <button 
                    className="px-4 lg:px-6 py-2 rounded-md text-sm font-medium transition-colors text-gray-600"
                    id="feedbackTab"
                    onClick={() => {
                      document.getElementById('feedbackForm').classList.remove('hidden');
                      document.getElementById('queryForm').classList.add('hidden');
                      document.getElementById('feedbackTab').classList.add('bg-primary', 'text-white');
                      document.getElementById('feedbackTab').classList.remove('text-gray-600');
                      document.getElementById('queryTab').classList.remove('bg-primary', 'text-white');
                      document.getElementById('queryTab').classList.add('text-gray-600');
                    }}
                  >
                    Feedback Form
                  </button>
                </div>
              </div>

              {/* Query Form */}
              <div id="queryForm">
                <div className="text-center mb-6">
                  <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-2">
                    Query Form
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Have questions about our courses? Submit your query and we'll get back to you with detailed information.
                  </p>
                </div>

                <form className="space-y-4 lg:space-y-6" onSubmit={handleQuerySubmit}>
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Your Name</label>
                      <input 
                        type="text" 
                        name="name"
                        required
                        placeholder="Enter Your Name" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white"
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                      <input 
                        type="email" 
                        name="email"
                        required
                        placeholder="Enter Email Address" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                      <input 
                        type="tel" 
                        name="phone"
                        required
                        placeholder="Enter Phone Number" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white"
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Course of Interest</label>
                      <select 
                        name="course"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white"
                        disabled={isSubmitting}
                      >
                        <option value="">Select Course</option>
                        <option>Python Basics</option>
                        <option>GCP Essentials</option>
                        <option>AWS Essentials</option>
                        <option>Linux RHEL</option>
                        <option>Ansible Automation</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Your Query</label>
                    <textarea 
                      rows={4}
                      name="message"
                      required
                      placeholder="Enter your query about courses, schedules, fees, etc." 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white resize-none"
                      disabled={isSubmitting}
                    ></textarea>
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-orange-400 hover:bg-orange-500 text-white font-semibold py-4"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Query'}
                  </Button>
                </form>
              </div>

              {/* Feedback Form */}
              <div id="feedbackForm" className="hidden">
                <div className="text-center mb-6">
                  <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-2">
                    Feedback Form
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Share your experience with MYL Academy. Your feedback helps us improve our services.
                  </p>
                </div>

                <form className="space-y-4 lg:space-y-6" onSubmit={handleFeedbackSubmit}>
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Your Name</label>
                      <input 
                        type="text" 
                        name="name"
                        required
                        placeholder="Enter Your Name" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white"
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                      <input 
                        type="email" 
                        name="email"
                        required
                        placeholder="Enter Email Address" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Course Attended</label>
                      <select 
                        name="courseAttended"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white"
                        disabled={isSubmitting}
                      >
                        <option value="">Select Course</option>
                        <option>Python Basics</option>
                        <option>GCP Essentials</option>
                        <option>AWS Essentials</option>
                        <option>Linux RHEL</option>
                        <option>Ansible Automation</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Overall Rating</label>
                      <select 
                        name="rating"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white"
                        disabled={isSubmitting}
                      >
                        <option value="">Select Rating</option>
                        <option value="5">⭐⭐⭐⭐⭐ Excellent</option>
                        <option value="4">⭐⭐⭐⭐ Very Good</option>
                        <option value="3">⭐⭐⭐ Good</option>
                        <option value="2">⭐⭐ Fair</option>
                        <option value="1">⭐ Poor</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Your Feedback</label>
                    <textarea 
                      rows={4}
                      name="message"
                      required
                      placeholder="Share your experience, suggestions for improvement, or any comments..." 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white resize-none"
                      disabled={isSubmitting}
                    ></textarea>
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
                  </Button>
                </form>
              </div>
              
              {submitMessage && (
                <div className={`mt-4 p-4 rounded-lg text-center ${
                  submitMessage.includes('successfully') 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {submitMessage}
                </div>
              )}
            </div>

            {/* Contact Information - Secondary on Mobile */}
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold text-foreground mb-8">
                Let's Start a Conversation
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Whether you're looking to advance your career, switch industries, or learn new skills, 
                our team is ready to help you find the perfect course that matches your goals and schedule.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Email Us</h3>
                    <p className="text-muted-foreground">Charli_ind@yahoo.com</p>
                    <p className="text-sm text-muted-foreground">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Call Us</h3>
                    <p className="text-muted-foreground">+91 9884002174 - BTS Saravanan</p>
                    <p className="text-sm text-muted-foreground">Monday - Friday, 9AM - 7PM </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Visit Us</h3>
                    <p className="text-muted-foreground">MYL Academy</p>
                    <p className="text-muted-foreground">Coimbatore</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-card rounded-xl shadow-card">
                <h3 className="text-lg font-semibold text-foreground mb-3">Office Hours ( Currently unavilable )</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Quick answers to common questions about our courses and enrollment process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-card rounded-xl p-6 shadow-card">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Do I need prior experience to enroll?
              </h3>
              <p className="text-muted-foreground">
                No prior experience is required for most of our beginner courses. We provide 
                comprehensive training starting from the basics.
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-card">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                What is the class schedule like?
              </h3>
              <p className="text-muted-foreground">
                We offer flexible scheduling options including evening and weekend classes 
                to accommodate working professionals.
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-card">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Do you provide job placement assistance?
              </h3>
              <p className="text-muted-foreground">
                Yes! We offer career services including resume review, interview preparation, 
                and connections with our partner companies.
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-card">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                What is the cost of courses?
              </h3>
              <p className="text-muted-foreground">
                Course fees vary by program. Contact us for detailed pricing information 
                and available payment plans or scholarships.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
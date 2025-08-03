import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

const Contact = () => {
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
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
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

            {/* Contact Form Replacement */}
            <div className="bg-card rounded-xl p-8 shadow-card">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Send Us an Enquiry
                </h3>
                <p className="text-muted-foreground mb-6">
                  Ready to take the next step? Click the button below to send us your questions, 
                  course inquiries, or schedule a consultation with our education specialists.
                </p>
                <Button 
                  size="lg" 
                  className="w-full"
                  onClick={() => window.open('https://forms.gle/xwNyUuvy7KREG3m59', '_blank')}
                >
                  Send Enquiry
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  * You'll be redirected to our enquiry form where you can provide details about your 
                  learning goals and we'll get back to you with personalized recommendations.
                </p>
              </div>

              <div className="border-t border-border pt-6">
                <h4 className="font-semibold text-foreground mb-4">What to include in your enquiry:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Your career goals and interests</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Current skill level and experience</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Preferred course format and schedule</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Any specific questions about our programs</span>
                  </li>
                </ul>
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
import { Link } from "react-router-dom";
import { GraduationCap, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 border-t border-border mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/6ed9742b-22b8-4549-b904-b2885769067e.png" 
                alt="MYL Academy Logo" 
                className="h-8 w-8"
              />
              <span className="text-xl font-bold text-foreground">MYL ACADEMY</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Empowering students with quality education and practical skills for a successful future. 
              Join our community of learners and unlock your potential.
            </p>
            <div className="flex flex-col space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>Charli_ind@yahoo.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+91 9884002174 - BTS Saravanan</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>MYL Academy, Coimbatore</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-muted-foreground hover:text-primary transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Our Courses</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/course/web-development" className="text-muted-foreground hover:text-primary transition-colors">
                  Python Basics
                </Link>
              </li>
              <li>
                <Link to="/course/data-science" className="text-muted-foreground hover:text-primary transition-colors">
                  GCP Essential
                </Link>
              </li>
              <li>
                <Link to="/course/digital-marketing" className="text-muted-foreground hover:text-primary transition-colors">
                  AWS Essentials
                </Link>
              </li>
              <li>
                <Link to="/course/graphic-design" className="text-muted-foreground hover:text-primary transition-colors">
                  Linux RHEL
                </Link>
              </li>
              <li>
                <Link to="/course/mobile-development" className="text-muted-foreground hover:text-primary transition-colors">
                  Ansible
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} MYL ACADEMY. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link to="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, GraduationCap } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Courses", path: "/courses" },
    { name: "Internships", path: "/internships" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-soft">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="flex space-x-1">
              <div className="w-3 h-3 md:w-4 md:h-4 bg-blue-600 rounded-sm transform group-hover:rotate-12 transition-transform duration-300"></div>
              <div className="w-3 h-3 md:w-4 md:h-4 bg-yellow-400 rounded-sm transform group-hover:-rotate-12 transition-transform duration-300"></div>
              <div className="w-3 h-3 md:w-4 md:h-4 bg-green-500 rounded-sm transform group-hover:rotate-12 transition-transform duration-300"></div>
              <div className="w-3 h-3 md:w-4 md:h-4 bg-purple-600 rounded-sm transform group-hover:-rotate-12 transition-transform duration-300"></div>
            </div>
            <span className="font-inter text-lg md:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
              MYL ACADEMY
            </span>
          </Link>

          {/* Centered Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary font-inter ${
                  isActive(item.path) ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Spacer for mobile */}
          <div className="md:hidden"></div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden transition-transform duration-200 hover:scale-110"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className={`transition-transform duration-300 ${
              isMenuOpen ? 'rotate-90' : 'rotate-0'
            }`}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </div>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg mt-2 shadow-lg border border-blue-200 backdrop-blur-sm">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 transform hover:scale-105 ${
                  isActive(item.path)
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-gray-700 hover:text-blue-600 hover:bg-white/70"
                }`}
                style={{
                  animationDelay: `${index * 50}ms`,
                  animation: isMenuOpen ? 'slideInLeft 0.3s ease-out forwards' : 'none'
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        
        <style jsx>{`
          @keyframes slideInLeft {
            from {
              opacity: 0;
              transform: translateX(-20px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}</style>
      </div>
    </header>
  );
};

export default Header;
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import CourseCard from "@/components/ui/CourseCard";
import { ArrowRight, BookOpen, Award, Users, Star } from "lucide-react";
import { useState, useEffect } from "react";

const courses = [
  {
    id: "web-development",
    title: "Python Basics",
    description: "Learn the fundamentals of Python programming, covering variables, loops, conditionals, functions, and basic data structures. Perfect for beginners.",
    duration: "12 weeks",
    students: 99,
    rating: 4.8,
  },
  {
    id: "data-science",
    title: "GCP Essentials",
    description: "Learn the core services of Google Cloud Platform including Compute Engine, Cloud Storage, App Engine, and networking. Get hands-on experience with cloud infrastructure, deployment, and scaling.",
    duration: "16 weeks",
    students: 100,
    rating: 4.7,
  },
  {
    id: "digital-marketing",
    title: "AWS Essentials",
    description: "Understand the basics of Amazon Web Services including EC2, S3, IAM, VPC, and Lambda. This course provides practical knowledge of cloud infrastructure, deployment, and scaling in AWS environments.",
    duration: "8 weeks",
    students: 80,
    rating: 4.6,
  },
  {
    id: "graphic-design",
    title: "Linux RHEL",
    description: "Master essential Linux commands, user and file management, permissions, networking, and system services with a focus on Red Hat Enterprise Linux. Ideal for IT beginners and aspiring system admins.",
    duration: "10 weeks",
    students: 60,
    rating: 4.9,
  },
  {
    id: "mobile-development",
    title: "Ansible Automation",
    description: "Learn how to automate IT infrastructure using Ansible. Understand playbooks, roles, inventory files, and real-world automation tasks for system provisioning and configuration management.",
    duration: "14 weeks",
    students: 45,
    rating: 4.7,
  },
];

const Index = () => {
  const coursesData = [
    { id: "Py", name: "Python", image: "/src/assets/python-course.jpg" },
    { id: "data-science", name: "GCP", image: "/src/assets/gcp-course.jpg" },
    { id: "digital-marketing", name: "AWS", image: "/src/assets/aws-course.jpg" },
    { id: "graphic-design", name: "Linux", image: "/src/assets/linux-course.jpg" },
    { id: "mobile-development", name: "Ansible", image: "/src/assets/ansible-course.jpg" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative text-white py-20 md:py-32 overflow-hidden" style={{background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 30%, #1e40af 70%, #1e3a8a 100%)'}}>
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 md:bottom-6 md:right-6 md:left-auto md:transform-none z-10">
          <a href="tel:+919884002174" className="flex items-center gap-2 md:gap-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 md:px-5 md:py-3 hover:bg-white/30 transition-all duration-300 group w-64 md:w-auto justify-center md:justify-start">
            <span className="text-xs md:text-sm font-semibold">Enquiry</span>
            <div className="w-6 h-6 md:w-8 md:h-8 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
              <svg className="w-3 h-3 md:w-4 md:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
            </div>
            <span className="text-xs md:text-sm font-semibold group-hover:text-white/90">+91 9884002174</span>
            <span className="text-xs md:text-sm font-semibold group-hover:text-white/90 hidden md:inline">- BTS Saravanan</span>
          </a>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 lg:gap-20">
            <div className="flex-shrink-0 w-full sm:w-1/4 lg:w-1/3 flex flex-col items-center justify-center sm:items-start sm:-mt-8 lg:-mt-12">
              <img 
                src="/lovable-uploads/6ed9742b-22b8-4549-b904-b2885769067e.png" 
                alt="MYL Academy Peacock Logo" 
                className="w-32 h-32 sm:w-32 sm:h-32 lg:w-80 lg:h-80 xl:w-96 xl:h-96 object-contain transform hover:scale-105 transition-transform duration-300 mb-4 mx-auto sm:mx-0"
                style={{filter: 'drop-shadow(8px 8px 16px rgba(0,0,0,0.4)) drop-shadow(-4px -4px 8px rgba(255,255,255,0.2)) drop-shadow(0 0 20px rgba(59,130,246,0.3))', transform: 'perspective(1000px) rotateX(5deg) rotateY(-5deg)'}}
              />
              <h2 className="font-inter text-2xl md:text-3xl lg:text-4xl font-black text-white mb-4 tracking-wide text-center sm:text-left">
                <span className="bg-gradient-to-r from-yellow-300 via-white to-yellow-300 bg-clip-text text-transparent">MYL</span>
                <span className="text-white mx-2">ACADEMY</span>
              </h2>
            </div>
            <div className="flex-1 sm:w-3/4 lg:w-2/3 text-center sm:text-left lg:pl-8 w-full">
              <h1 className="font-inter text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-black mb-4 md:mb-8 leading-tight px-2 tracking-tight text-center sm:text-left">
                Transform Your Future<br className="sm:hidden" /> with <span className="text-yellow-300 font-extrabold">Quality Education</span>
              </h1>
              <p className="hidden sm:block font-inter text-base sm:text-lg md:text-xl lg:text-2xl mb-6 md:mb-10 text-white/95 max-w-3xl mx-auto lg:mx-0 px-2 leading-relaxed font-medium">
                Join hundreds of students who have advanced their careers with our comprehensive, 
                industry-focused courses taught by expert instructors.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-center lg:justify-start px-4 sm:px-2 mb-8">
                <Button asChild size="lg" className="font-inter text-base md:text-lg px-8 md:px-10 py-3 md:py-4 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <Link to="/courses">
                    Explore Courses <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="font-inter text-base md:text-lg px-8 md:px-10 py-3 md:py-4 border-2 border-white/40 text-white hover:bg-white/10 hover:border-white/60 font-semibold rounded-full backdrop-blur-sm transition-all duration-300">
                  <Link to="/about">
                    Learn More
                  </Link>
                </Button>
              </div>
              
            </div>
          </div>
          
          {/* Animated Course Showcase - Full Width */}
          <div className="mt-12 pt-8 border-t border-white/20 w-full">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h3 className="text-lg font-semibold text-white/90 mb-6 text-center">Courses We Offer:</h3>
              
              {/* Sliding Course Cards */}
              <div className="relative w-full overflow-x-auto sm:overflow-hidden scrollbar-hide" style={{maskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)'}}>
                <style jsx>{`
                  @keyframes smoothSlide {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-20%); }
                  }
                  .smooth-slide {
                    animation: smoothSlide 15s linear infinite;
                  }
                  .smooth-slide:hover {
                    animation-play-state: paused;
                  }
                  .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                  }
                  .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                  }
                  @media (max-width: 640px) {
                    .smooth-slide {
                      animation: smoothSlide 20s linear infinite;
                    }
                  }
                `}</style>
                <div className="flex smooth-slide">
                  {[...coursesData, ...coursesData, ...coursesData, ...coursesData, ...coursesData].map((course, index) => (
                    <Link 
                      key={`${course.id}-${index}`} 
                      to={`/register/${course.id}`} 
                      className="group flex-shrink-0 w-2/3 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-2 sm:px-3"
                    >
                      <div className="bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg md:rounded-xl p-3 md:p-4 hover:bg-white/20 transition-all duration-700 transform hover:scale-105 shadow-lg hover:shadow-2xl hover:shadow-blue-400/50 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                        <img 
                          src={course.image} 
                          alt={course.name} 
                          className="w-full h-12 sm:h-16 md:h-20 object-cover rounded-md md:rounded-lg mb-2 md:mb-3 transition-all duration-500 group-hover:brightness-110 group-hover:contrast-110" 
                        />
                        <h4 className="text-white font-semibold text-xs sm:text-sm md:text-base text-center transition-all duration-300 group-hover:text-yellow-200 relative z-10">
                          {course.name}
                        </h4>
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">100+</div>
              <div className="text-muted-foreground">Students Enrolled</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">95%</div>
              <div className="text-muted-foreground">Completion Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">4.8★</div>
              <div className="text-muted-foreground">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">80+</div>
              <div className="text-muted-foreground">Success Stories</div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Popular Courses
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose from our expertly designed courses that blend theory with hands-on practice, 
              ensuring you gain real-world skills that employers value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {courses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/courses">
                View All Courses <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              🎆 What Our Students Say
            </h2>
            <p className="text-lg text-gray-600">Real success stories from our amazing students</p>
          </div>
          
          <div className="relative overflow-hidden">
            <style jsx>{`
              @keyframes testimonialSlide {
                0% { transform: translateX(0); }
                100% { transform: translateX(-33.33%); }
              }
              .testimonial-slide {
                animation: testimonialSlide 10s linear infinite;
              }
              .testimonial-slide:hover {
                animation-play-state: paused;
              }
            `}</style>
            <div className="flex testimonial-slide" style={{maskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)'}}>
              <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-3">
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                      A
                    </div>
                    <div className="ml-3">
                      <h4 className="font-semibold text-gray-800">Arjun Kumar</h4>
                      <p className="text-sm text-gray-500">Python Developer</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">"MYL Academy transformed my career! The Python course was excellent and I got placed in a top tech company."</p>
                  <div className="flex text-yellow-400 mt-3">
                    ★★★★★
                  </div>
                </div>
              </div>
              
              <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-3">
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold">
                      P
                    </div>
                    <div className="ml-3">
                      <h4 className="font-semibold text-gray-800">Priya Sharma</h4>
                      <p className="text-sm text-gray-500">Cloud Engineer</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">"The AWS course gave me hands-on experience. Now I'm working as a Cloud Engineer with 40% salary hike!"</p>
                  <div className="flex text-yellow-400 mt-3">
                    ★★★★★
                  </div>
                </div>
              </div>
              
              <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-3">
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold">
                      R
                    </div>
                    <div className="ml-3">
                      <h4 className="font-semibold text-gray-800">Rahul Patel</h4>
                      <p className="text-sm text-gray-500">DevOps Engineer</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">"Linux and Ansible courses were game-changers. The practical approach helped me land my dream DevOps role!"</p>
                  <div className="flex text-yellow-400 mt-3">
                    ★★★★★
                  </div>
                </div>
              </div>
              
              {/* Duplicate testimonials for seamless loop */}
              <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-3">
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                      A
                    </div>
                    <div className="ml-3">
                      <h4 className="font-semibold text-gray-800">Arjun Kumar</h4>
                      <p className="text-sm text-gray-500">Python Developer</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">"MYL Academy transformed my career! The Python course was excellent and I got placed in a top tech company."</p>
                  <div className="flex text-yellow-400 mt-3">
                    ★★★★★
                  </div>
                </div>
              </div>
              
              <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-3">
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold">
                      P
                    </div>
                    <div className="ml-3">
                      <h4 className="font-semibold text-gray-800">Priya Sharma</h4>
                      <p className="text-sm text-gray-500">Cloud Engineer</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">"The AWS course gave me hands-on experience. Now I'm working as a Cloud Engineer with 40% salary hike!"</p>
                  <div className="flex text-yellow-400 mt-3">
                    ★★★★★
                  </div>
                </div>
              </div>
              
              <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-3">
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold">
                      R
                    </div>
                    <div className="ml-3">
                      <h4 className="font-semibold text-gray-800">Rahul Patel</h4>
                      <p className="text-sm text-gray-500">DevOps Engineer</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">"Linux and Ansible courses were game-changers. The practical approach helped me land my dream DevOps role!"</p>
                  <div className="flex text-yellow-400 mt-3">
                    ★★★★★
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose MYL ACADEMY?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We provide more than just education - we offer a complete learning experience 
              designed to help you succeed in your career goals at MYL ACADEMY.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl p-8 shadow-card text-center hover:shadow-hover transition-all duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Expert Instructors</h3>
              <p className="text-muted-foreground">
                Learn from industry professionals with years of real-world experience and proven track records.
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 shadow-card text-center hover:shadow-hover transition-all duration-300">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Certified Programs</h3>
              <p className="text-muted-foreground">
                Earn certificates that validate your skills and boost your career prospects.
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 shadow-card text-center hover:shadow-hover transition-all duration-300">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Community Support</h3>
              <p className="text-muted-foreground">
                Join a vibrant community of learners and get support from peers and mentors throughout your journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 shadow-2xl text-center max-w-4xl mx-auto text-white">
            <h2 className="font-inter text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Learning Journey?
            </h2>
            <p className="font-inter text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Join thousands of successful students and take the first step towards your dream career today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="font-inter bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded-full px-8 py-4">
                <Link to="/courses">
                  Browse Courses
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="font-inter border-2 border-white/40 text-white hover:bg-white/10 font-semibold rounded-full px-8 py-4">
                <Link to="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-inter text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="font-inter text-lg text-gray-600 mb-8">
              Have questions? We're here to help you start your learning journey.
            </p>
            <a 
              href="https://wa.me/919884002174" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-inter font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              WhatsApp: +91 9884002174
              <span className="text-sm opacity-90">- BTS Saravanan</span>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;

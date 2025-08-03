import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import CourseCard from "@/components/ui/CourseCard";
import { ArrowRight, BookOpen, Award, Users, Star } from "lucide-react";

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
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Transform Your Future with
              <span className="block text-secondary">Quality Education</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
              Join hundreds of students who have advanced their careers with our comprehensive, 
              industry-focused courses taught by expert instructors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="accent" className="text-lg px-8">
                <Link to="/courses">
                  Explore Courses <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary">
                <Link to="/about">
                  Learn More
                </Link>
              </Button>
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
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-card text-center max-w-4xl mx-auto hero-gradient text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Learning Journey at MYL ACADEMY?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Join thousands of successful students and take the first step towards your dream career today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="accent">
                <Link to="/courses">
                  Browse Courses
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary">
                <Link to="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;

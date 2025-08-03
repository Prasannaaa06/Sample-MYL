import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { Clock, Users, Star, Calendar, Award, BookOpen, CheckCircle, User } from "lucide-react";

type Course = {
  title: string;
  description: string;
  duration: string;
  students: number | string;
  rating: number;
  level: string;
  price: string;
  syllabus: string[];
  skills: string[];
  schedule: string;
  nextStart: string;
};

const coursesData: Record<string, Course> = {
  "web-development": {
    title: "Python Basics",
    description: "Learn the fundamentals of Python programming, covering variables, loops, conditionals, functions, and basic data structures. Perfect for beginners.",
    duration: "4 weeks",
    students: 99,
    rating: 4.8,
    level: "Beginner to Advance",
    price: "₹8,000",
    /*mentor: {
      name: "",
      title: "",
      experience: "",
      company: "",
      bio: ""
    },*/
    syllabus: [
      "Introduction to Python",
      "Setting Up Environment",
  "Writing Your First Python Program",
  "Understanding Python Syntax and Comments",
  "Variables, Data Types, and Type Conversion",
  "Operators: Arithmetic, Comparison, Logical",
  "Working with Strings and String Methods",
  "Conditional Statements: if, elif, else",
  "Looping with for and while",
  "Using break, continue, and pass",
  "Defining and Using Functions",
  "Function Arguments, Return Values, Scope",
  "Lists, Tuples, Dictionaries, and Sets",
  "File Handling: Read, Write, Append",
  "Exception Handling: try, except, finally",
  "Common Exceptions and raise Statement",
  "OOP Basics: Classes, Objects, Constructors",
  "Inheritance and Method Definitions",
  "Using Built-in Modules: math, random, datetime",
  "Installing Packages using pip",
  "Mini Projects: Calculator, To-Do App, File Organizer"
],
    skills: [
  "Python Programming Fundamentals",
  "Data Types & Control Flow",
  "Functions & File Handling",
  "Basic OOP Concepts",
  "Exception Handling",
  "Mini Projects"
],
    schedule: "Sunday and Sturday 3hrs",
    nextStart: ""
  },
  "data-science": {
    title: "GCP Essentials",
    description: "Learn the core services of Google Cloud Platform including Compute Engine, Cloud Storage, App Engine, and networking. Get hands-on experience with cloud infrastructure, deployment, and scaling.",
    duration: "16 weeks",
    students: 100,
    rating: 4.7,
    level: "Intermediate",
    price: "₹8,000",
    /*mentor: {
      name: "Dr. Michael Chen",
      title: "Data Science Lead",
      experience: "10+ years",
      company: "Analytics Pro",
      bio: "Dr. Chen holds a PhD in Statistics and has worked extensively in machine learning and data analytics. He has published numerous papers and consulted for Fortune 500 companies on data-driven decision making."
    },*/
    syllabus: [
     "Cloud Computing Fundamentals & GCP Overview",
      "Job Roles & Responsibilities of a GCP Cloud Engineer",
      "Setting Up Free Tier Account & Exploring GCP Console",
      "Introduction to Google Compute Engine (GCE)",
      "Creating and Managing Virtual Machines in GCP",
      "SSH & RDP Access to GCE Instances",
      "Provisioning Web Server and Hosting a Test Website",
      "Advanced GCE Concepts: Scalability, High Availability",
      "Managed Instance Groups (MIGs) and Autoscaling",
      "HTTP(S), TCP/UDP Load Balancing in GCP",
      "IAM (Identity & Access Management) in GCP",
      "Users, Groups, Roles, Policies, and MFA",
      "gcloud CLI for IAM Management",
      "Cloud Storage: Buckets, Objects, Persistent Disks",
      "Machine Images and Backup Strategies",
      "Networking in GCP: VPC, Subnets, Firewall Rules, Routes",
      "Cloud DNS Configuration",
      "Cloud Monitoring and Logging for Applications",
      "GCP Billing and Cost Estimation (Pricing Calculator)",
      "Cloud Security Tools: KMS, Armor, Pub/Sub",
      "Best Practices for Security and Cost Optimization",
      "Recap of All GCP Services",
      "Real-world Use Cases & Final Project",
      "Preparing for GCP Job Roles and Certification"
    ],
    skills: [
  "Virtual Machine Setup (GCE)",
  "IAM & Role Management",
  "Cloud Storage & Networking",
  "Load Balancing & Autoscaling",
  "Monitoring & Billing",
  "GCP Security Tools"
],
    schedule: "Sunday and Sturday 3hrs",
    nextStart: ""
  },
  "digital-marketing": {
    title: "AWS Essentials",
    description: "Understand the basics of Amazon Web Services including EC2, S3, IAM, VPC, and Lambda. This course provides practical knowledge of cloud infrastructure, deployment, and scaling in AWS environments.",
    duration: "8 weeks",
    students: "80",
    rating: 4.6,
    level: "Beginner",
    price: "₹8,000",
    /*mentor: {
      name: "Emily Rodriguez",
      title: "Digital Marketing Director",
      experience: "7+ years",
      company: "Growth Marketing Agency",
      bio: "Emily has helped dozens of companies scale their online presence and increase revenue through strategic digital marketing campaigns. She specializes in data-driven marketing and ROI optimization."
    },*/
    syllabus: [
  "Introduction to Cloud Computing and AWS Fundamentals",
  "AWS Network Services – VPC, Route Tables, NACL, Transit Gateway, VPC Endpoints",
  "AWS Computing Services – EC2, RDS, ECS, EKS",
  "AWS Serverless Services – Elastic Beanstalk, Lambda",
  "AWS Endpoint Services – Load Balancer, API Gateway, CloudFront",
  "AWS Storage Services – S3, EBS, EFS",
  "Advanced AWS Application Architectures",
  "AWS Observability Tools and Monitoring",
  "Real-world Production Use Cases",
  "Introduction to DevOps (12 hours, 3 days)",
  "Site Reliability Engineering (SRE) Principles",
  "Overview of Key DevOps Tools",
  "Understanding CI/CD Pipelines",
  "Blue-Green Deployment Strategy",
  "Product Quality and Testing Concepts",
  "Production Deployment Use Cases"
],

    skills: [
  "EC2, S3 & RDS Usage",
  "VPC & Network Setup",
  "Serverless Functions (Lambda)",
  "Load Balancer & API Gateway",
  "CI/CD Deployment Flow",
  "Observability & Monitoring"
],
    schedule: "Sunday and Sturday 3hrs",
    nextStart: "February 10, 2024"
  },
  "graphic-design": {
    title: "Linux RHEL",
    description: "Master essential Linux commands, user and file management, permissions, networking, and system services with a focus on Red Hat Enterprise Linux. Ideal for IT beginners and aspiring system admins.",
    duration: "10 weeks",
    students: 60,
    rating: 4.9,
    level: "Beginner to Intermediate",
    price: "₹8,000",
    /*mentor: {
      name: "Alex Thompson",
      title: "Creative Director",
      experience: "12+ years",
      company: "Visual Design Studio",
      bio: "Alex is an award-winning graphic designer who has worked with major brands to create compelling visual identities. He combines artistic creativity with strategic thinking to deliver impactful design solutions."
    },*/
    syllabus: [
      "Getting Started with Red Hat Enterprise Linux",
      "Understanding and Installing RHEL",
      "Accessing and Using the Command Line (Bash)",
      "Managing Files and Linux Directory Structure",
      "Working with Links and Manual Pages",
      "Creating, Viewing & Editing Text Files",
      "Redirecting Output and Switching Shells",
      "Managing Local Users and Groups",
      "Superuser Access and User Passwords",
      "File Permissions, ACL, and Umask",
      "Monitoring and Managing Processes",
      "Controlling Services and Daemons",
      "Configuring and Securing SSH",
      "Log File Management & Backup with rsync",
      "Network Configuration and DNS Setup",
      "Software Installation and Repository Management",
      "Filesystem, Mounting, and Partitioning",
      "Using Find Command and Boot Process",
      "Intro to Running Linux Containers"
    ],
    skills: [
  "Linux Command Line Basics",
  "User & Group Management",
  "File Permissions & ACL",
  "System Services & Daemons",
  "SSH Configuration",
  "Backup & Networking"
],
    schedule: "Sunday and Sturday 3hrs",
    nextStart: "February 20, 2024"
  },
  "mobile-development": {
    title: "Ansible Automation",
    description: "Learn how to automate IT infrastructure using Ansible. Understand playbooks, roles, inventory files, and real-world automation tasks for system provisioning and configuration management.",
    duration: "8 weeks",
    students: "45",
    rating: 4.7,
    level: "Basic to Advanced",
    price: "₹8,000",
    /*mentor: {
      name: "David Kim",
      title: "Mobile App Architect",
      experience: "9+ years",
      company: "Mobile Solutions Corp",
      bio: "David has developed mobile applications for millions of users across various industries. He's an expert in cross-platform development and has published several apps that have reached the top charts in app stores."
    },*/
    syllabus: [
  "Introduction to Configuration Management & Ansible",
  "Installing and Setting Up Ansible",
  "Creating and Using Inventory Files",
  "Writing Basic YAML Playbooks",
  "Using Ansible Modules and Ad-Hoc Commands",
  "Working with Variables and Conditionals",
  "Creating Roles and Organizing Playbooks",
  "Looping, Handlers, and Notifications",
  "Securing Secrets with Ansible Vault",
  "Deploying Real-world Apps Using Playbooks"
],
    skills: [
  "Infrastructure Automation with Ansible",
  "Writing Playbooks & Tasks",
  "Inventory & Role Management",
  "Configuration Management",
  "Deploying Applications",
  "Real-time Use Cases"
],
    schedule: "Sunday and Sturday 3hrs",
    nextStart: ""
  }
};

const CourseDetail = () => {
  const { courseId } = useParams();
  const course = courseId ? coursesData[courseId as keyof typeof coursesData] : null;

  if (!course) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Course Not Found</h1>
          <p className="text-muted-foreground mb-8">The course you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/courses">Back to Courses</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <Link to="/courses" className="text-primary hover:text-primary-hover transition-colors">
                ← Back to Courses
              </Link>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {course.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
              {course.description}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">{course.duration}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">{course.students} students</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
                <span className="text-sm font-medium">{course.rating} rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">{course.level}</span>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-card">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">{course.price}</div>
                  <div className="text-muted-foreground">{course.nextStart}</div>
                </div>
                <Button 
                  size="lg" 
                  className="mt-4 md:mt-0"
                  onClick={() => window.open('https://forms.gle/j3KraGJDFjCKKTxr6', '_blank')}
                >
                  Enroll Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Details */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Course Syllabus */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center">
                  <BookOpen className="h-8 w-8 text-primary mr-3" />
                  Course Curriculum
                </h2>
                <div className="bg-card rounded-xl p-8 shadow-card">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {course.syllabus.map((item, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <span className="text-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Skills You'll Learn */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Skills You'll Learn
                </h2>
                <div className="flex flex-wrap gap-3">
                  {course.skills.map((skill, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div> {/* <-- This closes the*/}
              

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Course Info */}
              <div className="bg-card rounded-xl p-6 shadow-card">
                <h3 className="text-xl font-bold text-foreground mb-4">Course Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Calendar className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <div className="font-medium text-foreground">Schedule</div>
                      <div className="text-sm text-muted-foreground">{course.schedule}</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <div className="font-medium text-foreground">Duration</div>
                      <div className="text-sm text-muted-foreground">{course.duration}</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Award className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <div className="font-medium text-foreground">Level</div>
                      <div className="text-sm text-muted-foreground">{course.level}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enrollment CTA */}
              <div className="bg-card rounded-xl p-6 shadow-card hero-gradient text-white">
                <h3 className="text-xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="text-white/90 mb-6">
                  Join hundreds of students who have transformed their careers with this course.
                </p>
                <Button 
                  size="lg" 
                  variant="accent" 
                  className="w-full"
                  onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdytBZUV0mkzN96Lx5tPSgkQnSfH8YnVNwuE1qHpq6UAVx2pQ/viewform', '_blank')}
                >
                  Enroll Now - {course.price}
                </Button>
                <p className="text-sm text-white/80 mt-4 text-center">
                  30-day money-back guarantee
                </p>
              </div>

              {/* Support */}
              <div className="bg-card rounded-xl p-6 shadow-card">
                <h3 className="text-xl font-bold text-foreground mb-4">Need Help?</h3>
                <p className="text-muted-foreground mb-4">
                  Have questions about this course? Our admissions team is here to help.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CourseDetail;
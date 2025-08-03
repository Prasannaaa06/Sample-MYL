import Layout from "@/components/layout/Layout";
import CourseCard from "@/components/ui/CourseCard";

const courses = [
  {
    id: "web-development",
    title: "Python Basics",
    description: "Master modern web development with HTML, CSS, JavaScript, React, and Node.js. Build responsive, dynamic websites and web applications from scratch.",
    duration: "12 weeks",
    students: 99,
    rating: 4.8,
  },
  {
    id: "data-science",
    title: "GCP Essentials",
    description: "Learn the core services of Google Cloud Platform including Compute Engine, Cloud Storage, App Engine, and networking. Get hands-on experience with cloud infrastructure, deployment, and scaling.",
    duration: "12 weeks",
    students: 100,
    rating: 4.7,
  },
  {
    id: "digital-marketing",
    title: "AWS Essentials",
    description: "Understand the basics of Amazon Web Services including EC2, S3, IAM, VPC, and Lambda. This course provides practical knowledge of cloud infrastructure, deployment, and scaling in AWS environments.",
    duration: "12 weeks",
    students: 80,
    rating: 4.6,
  },
  {
    id: "graphic-design",
    title: "Linux RHEL",
    description: "Master essential Linux commands, user and file management, permissions, networking, and system services with a focus on Red Hat Enterprise Linux. Ideal for IT beginners and aspiring system admins.",
    duration: "12 weeks",
    students: 60,
    rating: 4.9,
  },
  {
    id: "mobile-development",
    title: "Ansible Automation",
    description: "Learn how to automate IT infrastructure using Ansible. Understand playbooks, roles, inventory files, and real-world automation tasks for system provisioning and configuration management.",
    duration: "12 weeks",
    students: 45,
    rating: 4.7,
  },
  
];

const Courses = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Courses
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive, industry-focused courses designed to give you the practical skills 
              and knowledge needed to excel in your chosen field.
            </p>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              What Makes Our Courses Special?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Project-Based Learning</h3>
                <p className="text-muted-foreground">
                  Build real projects that you can showcase in your portfolio and use to demonstrate your skills to employers.
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-4">👨‍🏫</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Expert Instructors</h3>
                <p className="text-muted-foreground">
                  Learn from industry professionals with years of experience who bring real-world insights to the classroom.
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Career Support</h3>
                <p className="text-muted-foreground">
                  Get job placement assistance, resume reviews, and interview preparation to help you land your dream job.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Courses;
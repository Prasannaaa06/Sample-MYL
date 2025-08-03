import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Target, Heart, Lightbulb, Users, Award, BookOpen } from "lucide-react";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About MYL ACADEMY
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're passionate about transforming lives through quality education, 
              practical skills development, and personalized learning experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                At MYL ACADEMY, we believe that everyone deserves access to high-quality education 
                that empowers them to achieve their career goals. Our mission is to bridge the gap 
                between traditional education and industry demands by providing practical, 
                hands-on learning experiences.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                We're committed to fostering a supportive learning environment where students 
                can grow, explore, and develop the skills they need to succeed in today's 
                rapidly evolving digital landscape.
              </p>
              <Button asChild size="lg">
                <Link to="/courses">
                  Explore Our Courses
                </Link>
              </Button>
            </div>
            
            <div className="bg-card rounded-xl p-8 shadow-card">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Goal-Oriented</h3>
                  <p className="text-sm text-muted-foreground">Focused on achieving real career outcomes</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Heart className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Passionate</h3>
                  <p className="text-sm text-muted-foreground">Dedicated to student success and growth</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Lightbulb className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Innovative</h3>
                  <p className="text-sm text-muted-foreground">Using cutting-edge teaching methods</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Community</h3>
                  <p className="text-sm text-muted-foreground">Building lasting connections and support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Approach */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Teaching Philosophy
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We believe in learning by doing. Our approach combines theoretical knowledge 
              with practical application to ensure students gain real-world skills.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl p-8 shadow-card hover:shadow-hover transition-all duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Hands-On Learning</h3>
              <p className="text-muted-foreground">
                Every course includes practical projects and real-world scenarios that mirror 
                what you'll encounter in your professional career.
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 shadow-card hover:shadow-hover transition-all duration-300">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Personalized Support</h3>
              <p className="text-muted-foreground">
                Our instructors provide individual attention and mentorship to help each 
                student overcome challenges and achieve their goals.
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 shadow-card hover:shadow-hover transition-all duration-300">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Industry Relevance</h3>
              <p className="text-muted-foreground">
                Our curriculum is constantly updated to reflect current industry trends 
                and demands, ensuring graduates are job-ready.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stats */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              These numbers reflect our commitment to excellence and the success of our students.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">10,000+</div>
              <div className="text-muted-foreground">Students Graduated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">95%</div>
              <div className="text-muted-foreground">Job Placement Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">500+</div>
              <div className="text-muted-foreground">Partner Companies</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">8</div>
              <div className="text-muted-foreground">Years of Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-card text-center max-w-4xl mx-auto hero-gradient text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Future with MYL ACADEMY?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Join our community of learners and start your journey towards a successful career today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="accent">
                <Link to="/courses">
                  View Courses
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary">
                <Link to="/contact">
                  Get in Touch
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
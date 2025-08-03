import Layout from "@/components/layout/Layout";
import InternshipCard from "@/components/ui/InternshipCard";
import { Button } from "@/components/ui/button";
import { GraduationCap, Briefcase } from "lucide-react";

const Internships = () => {
  // Sample internship data - you can easily add more internships here
  const internships = [
    
    /*{
      name: "Data Science & Analytics Internship",
      description: "Learn data analysis, machine learning, and statistical modeling with real-world projects.",
      duration: "4 months",
      charges: "$900",
      skillsEarned: ["Python", "Pandas", "NumPy", "Matplotlib", "SQL", "Machine Learning", "Statistics"],
      requirements: [
      "Basic mathematics and statistics knowledge",
      "Familiarity with Python or willingness to learn",
      "Bachelor's degree in progress or completed",
      "Strong analytical thinking skills"
      ]
    },*/
   /* {
      name: "Digital Marketing Internship",
      description: "Master modern digital marketing strategies, SEO, social media, and campaign management.",
      duration: "3 months",
      charges: "$600",
      skillsEarned: ["SEO", "Social Media Marketing", "Google Ads", "Content Marketing", "Analytics", "Email Marketing"],
      requirements: [
        "Interest in marketing and social media",
        "Good communication skills",
        "Basic computer literacy",
        "Creative mindset and willingness to learn"
      ]
    }*/
  ];

  const handleApply = (internshipName: string) => {
    // You can implement application logic here
    alert(`Application process for ${internshipName} will be implemented`);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-white/10 rounded-full">
              <Briefcase className="h-12 w-12" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Launch Your Career
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join our intensive internship programs and gain real-world experience 
            while building the skills employers demand.
          </p>
          {/*
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Explore Programs
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary">
              Contact Us
            </Button>
          </div>
          */}
          
        </div>
      </section>

      {/* What We Provide Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Comming soon
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
             {/*} Our internship programs are designed to bridge the gap between education and industry.*/}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">Expert Mentorship</h3>
              <p className="text-muted-foreground text-sm">Dedicated industry professionals guiding your journey</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="p-3 bg-secondary/10 rounded-full w-fit mx-auto">
                <Briefcase className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-semibold text-lg">Real Projects</h3>
              <p className="text-muted-foreground text-sm">Work on actual client projects and build your portfolio</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="p-3 bg-accent/10 rounded-full w-fit mx-auto">
                <GraduationCap className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-semibold text-lg">Industry Certification</h3>
              <p className="text-muted-foreground text-sm">Earn certificates recognized by top employers</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto">
                <Briefcase className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">Career support</h3>
              <p className="text-muted-foreground text-sm">Career support assistance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Internships Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {/* Available Internships */}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {/*Choose from our carefully crafted internship programs designed to accelerate your career.*/}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {internships.map((internship, index) => (
              <InternshipCard
                key={index}
                name={internship.name}
                description={internship.description}
                duration={internship.duration}
                charges={internship.charges}
                skillsEarned={internship.skillsEarned}
                requirements={internship.requirements}
                onApply={() => handleApply(internship.name)}
              />
            ))}
          </div> 
        </div>
      </section>

      {/* CTA Section 
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Take the first step towards your dream career. Apply for an internship today 
            and transform your potential into expertise.
          </p>
          <Button size="lg" className="text-lg px-8">
            Apply Now
          </Button>
        </div>
      </section> */}
    </Layout>
  );
};

export default Internships;
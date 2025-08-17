import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { ArrowLeft, CheckCircle, Clock, Users, Star } from "lucide-react";

const courses = {
  "Py": {
    title: "Python Basics",
    price: 4999,
    duration: "12 weeks",
    students: 99,
    rating: 4.8,
    image: "/src/assets/python-course.jpg",
    description: "Master Python programming from basics to advanced concepts"
  },
  "web-development": {
    title: "Python Basics",
    price: 4999,
    duration: "12 weeks",
    students: 99,
    rating: 4.8,
    image: "/src/assets/python-course.jpg",
    description: "Master Python programming from basics to advanced concepts"
  },
  "data-science": {
    title: "GCP Essentials", 
    price: 6999,
    duration: "16 weeks",
    students: 100,
    rating: 4.7,
    image: "/src/assets/gcp-course.jpg",
    description: "Learn Google Cloud Platform services and deployment"
  },
  "digital-marketing": {
    title: "AWS Essentials",
    price: 7999,
    duration: "8 weeks", 
    students: 80,
    rating: 4.6,
    image: "/src/assets/aws-course.jpg",
    description: "Master Amazon Web Services cloud infrastructure"
  },
  "graphic-design": {
    title: "Linux RHEL",
    price: 5999,
    duration: "10 weeks",
    students: 60, 
    rating: 4.9,
    image: "/src/assets/linux-course.jpg",
    description: "Complete Linux system administration course"
  },
  "mobile-development": {
    title: "Ansible Automation",
    price: 6499,
    duration: "14 weeks",
    students: 45,
    rating: 4.7,
    image: "/src/assets/ansible-course.jpg",
    description: "Automate IT infrastructure with Ansible"
  }
};

const CourseRegistration = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    batch: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  const course = courses[courseId as keyof typeof courses];

  if (!course) {
    return <div>Course not found</div>;
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handlePayment = async () => {
    if (!formData.name || !formData.email || !formData.phone || !formData.batch) {
      alert("Please fill all required fields");
      return;
    }

    setIsLoading(true);
    
    // Store payment details in localStorage for success page
    const paymentDetails = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      course: course.title,
      amount: course.price,
      batch: formData.batch
    };
    localStorage.setItem('paymentDetails', JSON.stringify(paymentDetails));
    
    // Open Razorpay payment
    window.open('https://razorpay.me/@prasannathirusenthuran', '_blank');
    
    setIsLoading(false);
    
    // Show payment completion button
    setTimeout(() => {
      const completed = confirm(`Payment portal opened in new tab!\n\nCourse: ${course.title}\nAmount: ₹${course.price.toLocaleString()}\nBatch: ${formData.batch}\n\nAfter completing payment in the other tab, click OK to get your invoice.`);
      
      if (completed) {
        // Generate transaction ID and redirect to success page
        const txnId = 'TXN' + Date.now() + Math.random().toString(36).substr(2, 5);
        const successUrl = `/payment-success?txn_id=${txnId}&name=${encodeURIComponent(formData.name)}&email=${encodeURIComponent(formData.email)}&phone=${formData.phone}&course=${encodeURIComponent(course.title)}&amount=${course.price}&batch=${encodeURIComponent(formData.batch)}`;
        navigate(successUrl);
      }
    }, 2000);
  };

  return (
    <Layout>
      <section className="py-8 md:py-20" style={{background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 25%, #60a5fa 50%, #93c5fd 75%, #dbeafe 100%)'}}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Button 
              onClick={() => navigate(-1)}
              variant="outline" 
              className="mb-4 md:mb-6 text-white border-white/40 hover:bg-white/10 text-sm"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl md:rounded-3xl p-4 md:p-8 border border-white/20">
              <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8">
                {/* Course Info */}
                <div className="text-white order-1 md:order-1">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-32 md:h-48 object-cover rounded-xl md:rounded-2xl mb-4 md:mb-6"
                  />
                  <h1 className="font-inter text-xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
                    {course.title}
                  </h1>
                  <p className="font-inter text-sm md:text-lg mb-4 md:mb-6 text-white/90 leading-relaxed">
                    {course.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-6">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 md:h-5 md:w-5 text-cyan-300 flex-shrink-0" />
                      <span className="font-inter text-xs md:text-base">{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 md:h-5 md:w-5 text-cyan-300 flex-shrink-0" />
                      <span className="font-inter text-xs md:text-base">{course.students} students</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4 md:h-5 md:w-5 text-orange-400 fill-current flex-shrink-0" />
                      <span className="font-inter text-xs md:text-base">{course.rating} rating</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-400 flex-shrink-0" />
                      <span className="font-inter text-xs md:text-base">Certificate</span>
                    </div>
                  </div>

                  <div className="text-2xl md:text-4xl font-bold text-white mb-1 md:mb-2">
                    ₹{course.price.toLocaleString()}
                  </div>
                  <p className="text-white/70 text-sm md:text-base">One-time payment</p>
                </div>

                {/* Registration Form */}
                <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 order-2 md:order-2">
                  <h2 className="font-inter text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">
                    Register Now
                  </h2>
                  
                  <form className="space-y-3 md:space-y-4">
                    <div>
                      <label className="block font-inter text-sm font-medium text-gray-700 mb-1 md:mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-lg md:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent font-inter text-sm md:text-base"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>

                    <div>
                      <label className="block font-inter text-sm font-medium text-gray-700 mb-1 md:mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-lg md:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent font-inter text-sm md:text-base"
                        placeholder="Enter your email"
                        required
                      />
                    </div>

                    <div>
                      <label className="block font-inter text-sm font-medium text-gray-700 mb-1 md:mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-lg md:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent font-inter text-sm md:text-base"
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>

                    <div>
                      <label className="block font-inter text-sm font-medium text-gray-700 mb-1 md:mb-2">
                        Preferred Batch Month *
                      </label>
                      <select
                        name="batch"
                        value={formData.batch}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-lg md:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent font-inter text-sm md:text-base"
                        required
                      >
                        <option value="">Select batch month</option>
                        <option value="January 2025">January 2025</option>
                        <option value="February 2025">February 2025</option>
                        <option value="March 2025">March 2025</option>
                        <option value="April 2025">April 2025</option>
                        <option value="May 2025">May 2025</option>
                        <option value="June 2025">June 2025</option>
                      </select>
                    </div>



                    <Button
                      type="button"
                      onClick={handlePayment}
                      disabled={isLoading}
                      className="w-full font-inter text-sm md:text-lg px-4 py-3 md:px-8 md:py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg md:rounded-xl shadow-lg hover:shadow-xl mt-4 md:mt-6 min-h-[48px]"
                    >
                      {isLoading ? "Processing..." : "Pay"}
                    </Button>
                    
                    <Button
                      type="button"
                      onClick={() => {
                        if (!formData.name || !formData.email || !formData.phone || !formData.batch) {
                          alert("Please fill all required fields");
                          return;
                        }
                        const txnId = 'TEST' + Date.now();
                        const successUrl = `/payment-success?txn_id=${txnId}&name=${encodeURIComponent(formData.name)}&email=${encodeURIComponent(formData.email)}&phone=${formData.phone}&course=${encodeURIComponent(course.title)}&amount=${course.price}&batch=${encodeURIComponent(formData.batch)}`;
                        navigate(successUrl);
                      }}
                      className="w-full font-inter text-sm md:text-lg px-4 py-3 md:px-8 md:py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg md:rounded-xl shadow-lg hover:shadow-xl mt-2 min-h-[48px]"
                    >
                      Test Mode (Skip Payment)
                    </Button>
                  </form>

                  <div className="mt-4 md:mt-6 text-center">
                    <p className="text-xs md:text-sm text-gray-600 font-inter">
                      Secure payment powered by Razorpay
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CourseRegistration;
import Layout from "@/components/layout/Layout";

const TermsOfService = () => {
  return (
    <Layout>
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Terms of Service</h1>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-gray-600 mb-6"><strong>Effective Date:</strong> January 1, 2025</p>
            
            <div className="space-y-6">
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">1. Acceptance of Terms</h2>
                <p className="text-gray-700">By accessing or using MYL Academy's website, mobile application, or related services, you agree to comply with these Terms of Service. If you do not agree, you must discontinue use immediately.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">2. Eligibility</h2>
                <p className="text-gray-700">Users must be at least 13 years old to access the platform. For minors, parental or guardian consent is required.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">3. Services Provided</h2>
                <p className="text-gray-700">MYL Academy offers online courses, educational resources, and related digital services. The Academy reserves the right to modify, update, or discontinue any service without prior notice.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">4. User Accounts</h2>
                <ul className="text-gray-700 list-disc pl-6 space-y-2">
                  <li>Users must provide accurate, complete, and current information during registration.</li>
                  <li>You are responsible for maintaining confidentiality of login credentials.</li>
                  <li>Unauthorized access or misuse of accounts may result in suspension or termination.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">5. Payment and Refund Policy</h2>
                <ul className="text-gray-700 list-disc pl-6 space-y-2">
                  <li>Fees for courses or services must be paid in accordance with published pricing.</li>
                  <li>Refunds are subject to MYL Academy's refund policy, available at the time of purchase.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">6. Intellectual Property</h2>
                <p className="text-gray-700">All course materials, content, logos, and branding are owned by MYL Academy or its licensors. Users may not reproduce, distribute, or exploit materials without prior written consent.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">7. Prohibited Conduct</h2>
                <p className="text-gray-700 mb-2">Users agree not to:</p>
                <ul className="text-gray-700 list-disc pl-6 space-y-2">
                  <li>Use the platform for unlawful or harmful activities.</li>
                  <li>Share offensive, defamatory, or infringing content.</li>
                  <li>Attempt to bypass security features or gain unauthorized access.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">8. Limitation of Liability</h2>
                <p className="text-gray-700">MYL Academy is not liable for indirect, incidental, or consequential damages arising from use of the platform, including but not limited to data loss, interruption, or unauthorized access.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">9. Termination</h2>
                <p className="text-gray-700">MYL Academy may suspend or terminate user accounts at its discretion, particularly for violations of these Terms.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">10. Governing Law</h2>
                <p className="text-gray-700">These Terms are governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Tamil Nadu, India.</p>
              </section>

              <section className="border-t pt-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">Contact Us</h2>
                <p className="text-gray-700">For inquiries or concerns regarding these terms, please contact:</p>
                <div className="mt-2 text-gray-700">
                  <p><strong>Phone:</strong> +91 9884002174</p>
                  <p><strong>Contact Person:</strong> BTS Saravanan</p>
                  <p><strong>Email:</strong> info@mylacademy.com</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TermsOfService;
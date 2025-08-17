import Layout from "@/components/layout/Layout";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Privacy Policy</h1>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-gray-600 mb-6"><strong>Effective Date:</strong> January 1, 2025</p>
            
            <div className="space-y-6">
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">1. Information We Collect</h2>
                <ul className="text-gray-700 list-disc pl-6 space-y-2">
                  <li><strong>Personal Information:</strong> Name, email address, phone number, payment details, and account credentials.</li>
                  <li><strong>Non-Personal Information:</strong> Browser type, device information, IP address, and usage statistics.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">2. How We Use Your Information</h2>
                <ul className="text-gray-700 list-disc pl-6 space-y-2">
                  <li>To provide and improve our services.</li>
                  <li>To process payments and manage subscriptions.</li>
                  <li>To communicate with users about courses, updates, and promotions.</li>
                  <li>To comply with legal obligations and prevent fraud.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">3. Data Sharing and Disclosure</h2>
                <p className="text-gray-700 mb-2">We do not sell personal data. Information may be shared with:</p>
                <ul className="text-gray-700 list-disc pl-6 space-y-2">
                  <li>Service providers assisting with hosting, payment processing, and analytics.</li>
                  <li>Legal authorities when required by law.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">4. Data Security</h2>
                <p className="text-gray-700">We implement appropriate technical and organizational measures to safeguard personal data against unauthorized access, alteration, or disclosure.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">5. Cookies and Tracking</h2>
                <p className="text-gray-700">Our website may use cookies and similar technologies to enhance user experience, track performance, and personalize content. Users may disable cookies through browser settings.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">6. User Rights</h2>
                <p className="text-gray-700 mb-2">Depending on jurisdiction, users may have rights to:</p>
                <ul className="text-gray-700 list-disc pl-6 space-y-2">
                  <li>Access, correct, or delete their personal information.</li>
                  <li>Opt out of promotional communications.</li>
                  <li>Request data portability (where applicable).</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">7. Data Retention</h2>
                <p className="text-gray-700">Personal information will be retained only for as long as necessary to fulfill the purposes outlined in this Privacy Policy or as required by law.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">8. Children's Privacy</h2>
                <p className="text-gray-700">We do not knowingly collect information from children under 13 without parental consent.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">9. Updates to This Policy</h2>
                <p className="text-gray-700">MYL Academy may update this Privacy Policy periodically. Users will be notified of material changes via email or platform notifications.</p>
              </section>

              <section className="border-t pt-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">10. Contact Us</h2>
                <p className="text-gray-700">For inquiries or concerns regarding this privacy policy, please contact:</p>
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

export default PrivacyPolicy;
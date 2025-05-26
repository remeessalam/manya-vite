import React from "react";
import { Info, Phone, Mail, MapPin } from "lucide-react";

import { companyDetails } from "../constant";

export default function TermsAndConditions() {
  return (
    <div className="overflow-x-hidden max-w-screen">
      <div className="bg-gray-50 min-h-screen">
        {/* Header */}
        {/* <header className="bg-primary text-white shadow-md">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl md:text-3xl font-bold">Manya.AI</h1>
          </div>
        </div>
      </header> */}

        {/* Main Content */}
        <main className="container mx-auto px-4 pb-8 pt-[8rem] md:pb-12 md:pt-[8rem]">
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <div className="mb-6 md:mb-10 flex items-center">
              <Info className="h-6 w-6 md:h-8 md:w-8 text-primary mr-3" />
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                Terms and Conditions
              </h1>
            </div>

            {/* Content sections */}
            <div className="space-y-6">
              <section>
                <h2 className="text-xl font-bold text-gray-800 mb-3">
                  1. Acceptance of Terms
                </h2>
                <p className="text-gray-600">
                  By accessing or using the Manya.AI platform, you agree to
                  comply with and be bound by these Terms and Conditions. If you
                  do not agree to these Terms, please do not use the Service.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-800 mb-3">
                  2. Description of Service
                </h2>
                <p className="text-gray-600">
                  Manya.AI provides [Website development, App development, AI
                  services, UI/UX Design, Cloud Computing, Cloud Migration]. The
                  Service is intended for [target audience, e.g., businesses,
                  sales professionals, etc.].
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-800 mb-3">
                  3. User Responsibilities
                </h2>
                <div className="text-gray-600">
                  <p className="mb-2">
                    <strong>Account Registration</strong>: Users may be required
                    to create an account to access certain features. You agree
                    to provide accurate and complete information during
                    registration and to update it as necessary.
                  </p>
                  <p>
                    <strong>Prohibited Activities</strong>: You agree not to
                    engage in activities that may harm, disrupt, or interfere
                    with the Service, including but not limited to unauthorized
                    access, data scraping, or transmitting harmful code.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-800 mb-3">
                  4. Privacy and Data Collection
                </h2>
                <p className="text-gray-600">
                  Your use of the Service is also governed by our Privacy
                  Policy, which outlines how we collect, use, and protect your
                  personal information. By using the Service, you consent to the
                  practices described in the Privacy Policy.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-800 mb-3">
                  5. Intellectual Property
                </h2>
                <div className="text-gray-600">
                  <p className="mb-2">
                    <strong>Ownership</strong>: All content, features, and
                    functionality of the Service are owned by Manya.AI or its
                    licensors and are protected by intellectual property laws.
                  </p>
                  <p>
                    <strong>License</strong>: Manya.AI grants you a limited,
                    non-exclusive, non-transferable license to access and use
                    the Service for its intended purpose.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-800 mb-3">
                  6. Payment and Billing
                </h2>
                <p className="text-gray-600">
                  If the Service includes paid features, you agree to pay all
                  applicable fees as specified during the registration process
                  or in your account settings. Payments are due in advance and
                  are non-refundable.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-800 mb-3">
                  7. Termination
                </h2>
                <p className="text-gray-600">
                  Manya.AI reserves the right to suspend or terminate your
                  access to the Service at its sole discretion, without notice,
                  for conduct that violates these Terms or is harmful to other
                  users or the Service.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-800 mb-3">
                  8. Limitation of Liability
                </h2>
                <p className="text-gray-600">
                  To the fullest extent permitted by law, Manya.AI shall not be
                  liable for any indirect, incidental, special, consequential,
                  or punitive damages arising out of or in connection with your
                  use of the Service.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-800 mb-3">
                  9. Governing Law
                </h2>
                <p className="text-gray-600">
                  These Terms shall be governed by and construed in accordance
                  with the laws of [jurisdiction, e.g., India], without regard
                  to its conflict of law principles.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-800 mb-3">
                  10. Changes to Terms
                </h2>
                <p className="text-gray-600">
                  Manya.AI reserves the right to modify these Terms at any time.
                  Any changes will be effective upon posting on this page. Your
                  continued use of the Service constitutes acceptance of the
                  updated Terms.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-800 mb-3">
                  11. Contact Information
                </h2>
                <div className="text-gray-600">
                  <p className="mb-3">
                    For questions or concerns regarding these Terms, please
                    contact us at:
                  </p>
                  <div className="flex flex-col space-y-2 ml-1">
                    <div className="flex items-center">
                      <Mail size={18} className="mr-2 text-primary" />
                      <span>
                        <strong>Email</strong>: home@manya.ai
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Phone size={18} className="mr-2 text-primary" />
                      <span>
                        <strong>Phone</strong>: {companyDetails.phone}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <MapPin size={18} className="mr-2 text-primary" />
                      <span>
                        <strong>Address</strong>: {companyDetails.address}
                      </span>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-800 mb-3">
                  12. Personal information collected by Manya.ai
                </h2>
                <p className="text-gray-600">
                  We may collect personal information such as your First Name,
                  Last Name, e-mail address, Country, and Phone Number. When you
                  provide information that enables us to respond to your request
                  for products or services, we will, wherever permissible by
                  relevant laws, collect and use for the purposes described in
                  this Privacy Statement.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-800 mb-3">
                  13. Use of your Personal Information
                </h2>
                <div className="text-gray-600">
                  <p className="mb-2">
                    We use your Personal Information for the following purposes:
                  </p>
                  <ul className="list-disc ml-5 space-y-1">
                    <li>
                      To provide better usability, troubleshooting and site
                      maintenance;
                    </li>
                    <li>To create your user ID;</li>
                    <li>To identify you once you register on our website;</li>
                    <li>
                      To contact you and respond to your questions or requests;
                      and
                    </li>
                    <li>
                      To provide access to desirable content based on your
                      preferences.
                    </li>
                    <li>
                      To process job application and alumni related requests,
                      more details about which are available on corresponding
                      portals of this website.
                    </li>
                  </ul>
                </div>
              </section>
            </div>
          </div>
        </main>

        {/* Footer */}
        {/* <footer className="bg-gray-800 text-white py-6 mt-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-lg font-semibold">Manya.AI</p>
              <p className="text-sm text-gray-400">
                © {new Date().getFullYear()} Manya.AI. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-4">
              <div className="flex items-center">
                <Mail size={16} className="mr-2 text-primary" />
                <span className="text-sm">home@manya.ai</span>
              </div>
              <div className="flex items-center">
                <Phone size={16} className="mr-2 text-primary" />
                <span className="text-sm"></span>
              </div>
            </div>
          </div>
        </div>
      </footer> */}
      </div>
    </div>
  );
}

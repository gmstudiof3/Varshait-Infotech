import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import VideoBackground from "@/components/video-background"

export default function TermsOfService() {
  return (
    <main className="min-h-screen relative">
      <VideoBackground />
      <div className="relative z-10">
        <Navbar />
        <div className="pt-20 pb-16 bg-white/90 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-brand-deep-blue mb-4">Terms of Service</h1>
              <p className="text-xl text-gray-600">Last updated: January 2024</p>
            </div>

            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-brand-deep-blue mb-4">Acceptance of Terms</h2>
                <p className="text-gray-700 mb-4">
                  By accessing and using Varshait Infotech's services, you accept and agree to be bound by the terms and
                  provision of this agreement.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-brand-deep-blue mb-4">Services</h2>
                <p className="text-gray-700 mb-4">
                  Varshait Infotech provides web development, AI integration, e-commerce solutions, and related
                  technology services. We reserve the right to modify or discontinue services at any time.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-brand-deep-blue mb-4">User Responsibilities</h2>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the confidentiality of your account credentials</li>
                  <li>Use our services in compliance with applicable laws</li>
                  <li>Respect intellectual property rights</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-brand-deep-blue mb-4">Payment Terms</h2>
                <p className="text-gray-700 mb-4">
                  Payment terms will be specified in individual project agreements. Late payments may result in service
                  suspension and additional fees.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-brand-deep-blue mb-4">Limitation of Liability</h2>
                <p className="text-gray-700 mb-4">
                  Varshait Infotech shall not be liable for any indirect, incidental, special, or consequential damages
                  arising from the use of our services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-brand-deep-blue mb-4">Contact Information</h2>
                <p className="text-gray-700">
                  For questions about these Terms of Service, contact us at{" "}
                  <a href="mailto:hello@varshaitinfotech.com" className="text-brand-bright-blue hover:underline">
                    hello@varshaitinfotech.com
                  </a>
                </p>
              </section>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </main>
  )
}

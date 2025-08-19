import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import VideoBackground from "@/components/video-background"

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen relative">
      <VideoBackground />
      <div className="relative z-10">
        <Navbar />
        <div className="pt-20 pb-16 bg-white/90 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-brand-deep-blue mb-4">Privacy Policy</h1>
              <p className="text-xl text-gray-600">Last updated: January 2024</p>
            </div>

            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-brand-deep-blue mb-4">Information We Collect</h2>
                <p className="text-gray-700 mb-4">
                  At Varshait Infotech, we collect information you provide directly to us, such as when you create an
                  account, contact us, or use our services. This may include your name, email address, phone number, and
                  project details.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-brand-deep-blue mb-4">How We Use Your Information</h2>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>To provide, maintain, and improve our services</li>
                  <li>To communicate with you about your projects and our services</li>
                  <li>To send you technical notices and support messages</li>
                  <li>To respond to your comments and questions</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-brand-deep-blue mb-4">Information Sharing</h2>
                <p className="text-gray-700 mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your
                  consent, except as described in this policy or as required by law.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-brand-deep-blue mb-4">Data Security</h2>
                <p className="text-gray-700 mb-4">
                  We implement appropriate security measures to protect your personal information against unauthorized
                  access, alteration, disclosure, or destruction.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-brand-deep-blue mb-4">Contact Us</h2>
                <p className="text-gray-700">
                  If you have any questions about this Privacy Policy, please contact us at{" "}
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

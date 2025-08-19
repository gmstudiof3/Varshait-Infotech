import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ThreeBackground from "@/components/three-background"

export default function CookiePolicy() {
  return (
    <main className="min-h-screen relative">
      <ThreeBackground />
      <div className="relative z-10">
        <Navbar />
        <div className="pt-20 pb-16 bg-white/90 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-brand-deep-blue mb-4">Cookie Policy</h1>
              <p className="text-xl text-gray-600">Last updated: January 2024</p>
            </div>

            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-brand-deep-blue mb-4">What Are Cookies</h2>
                <p className="text-gray-700 mb-4">
                  Cookies are small text files that are stored on your computer or mobile device when you visit our
                  website. They help us provide you with a better experience by remembering your preferences and
                  improving site functionality.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-brand-deep-blue mb-4">How We Use Cookies</h2>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>
                    <strong>Essential Cookies:</strong> Required for basic website functionality
                  </li>
                  <li>
                    <strong>Analytics Cookies:</strong> Help us understand how visitors use our site
                  </li>
                  <li>
                    <strong>Functional Cookies:</strong> Remember your preferences and settings
                  </li>
                  <li>
                    <strong>Marketing Cookies:</strong> Used to deliver relevant advertisements
                  </li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-brand-deep-blue mb-4">Third-Party Cookies</h2>
                <p className="text-gray-700 mb-4">
                  We may use third-party services like Google Analytics to analyze website traffic and improve our
                  services. These services may set their own cookies on your device.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-brand-deep-blue mb-4">Managing Cookies</h2>
                <p className="text-gray-700 mb-4">
                  You can control and manage cookies through your browser settings. However, disabling certain cookies
                  may affect the functionality of our website.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-brand-deep-blue mb-4">Updates to This Policy</h2>
                <p className="text-gray-700 mb-4">
                  We may update this Cookie Policy from time to time. Any changes will be posted on this page with an
                  updated revision date.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-brand-deep-blue mb-4">Contact Us</h2>
                <p className="text-gray-700">
                  If you have questions about our use of cookies, please contact us at{" "}
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

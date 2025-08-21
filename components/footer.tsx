"use client"
import { Facebook, Twitter, Linkedin, Instagram, Mail } from "lucide-react"
import { useWebsiteData } from "@/lib/data-manager"

export default function Footer() {
  const data = useWebsiteData()
  const contact = data.contact
  const services = data.services

  const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Us" },
    { href: "#services", label: "Services" },
    { href: "#work", label: "Our Work" },
    { href: "/blog", label: "Blog" },
    { href: "#contact", label: "Contact" },
  ]

  const socialLinks = [
    { icon: Facebook, href: contact.socialLinks.facebook || "#", label: "Facebook" },
    { icon: Twitter, href: contact.socialLinks.twitter || "#", label: "Twitter" },
    { icon: Linkedin, href: contact.socialLinks.linkedin || "#", label: "LinkedIn" },
    { icon: Instagram, href: contact.socialLinks.instagram || "#", label: "Instagram" },
  ]

  return (
    <footer className="brand-deep-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4">Varshait Infotech</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Driving business growth with smart, customizable technology solutions. 
              Your vision, our expertise — together we create impact.
            </p>
            <div className="flex items-center gap-2 text-gray-300">
              <Mail className="h-4 w-4" />
              <span>{contact.email}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-brand-bright-blue transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Expertise</h4>
            <ul className="space-y-2">
              {services.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <span className="text-gray-300">{service.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex gap-4 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-gray-700 hover:brand-bright-blue rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
            <p className="text-gray-300 text-sm">
              Follow us for updates on our latest projects, insights, and innovations.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-300 text-sm">
              © {new Date().getFullYear()} Varshait Infotech. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="/privacy" className="text-gray-300 hover:text-brand-bright-blue transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-300 hover:text-brand-bright-blue transition-colors">
                Terms of Service
              </a>
              <a href="/cookies" className="text-gray-300 hover:text-brand-bright-blue transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

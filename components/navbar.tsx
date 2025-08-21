"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import Image from "next/image"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, external?: boolean) => {
    if (external) {
      setIsMobileMenuOpen(false)
      return
    }
    e.preventDefault()
    const targetId = href.replace("#", "")
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" })
    }
    setIsMobileMenuOpen(false)
  }

  const navLinks = [
    { href: "#services", label: "Services", hasDropdown: true },
    { href: "#industries", label: "Industries", hasDropdown: true },
    { href: "#about", label: "About Us", hasDropdown: true },
    { href: "#work", label: "Our Work", hasDropdown: true },
    { href: "#contact", label: "Contact Us" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#0A0B45]/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" onClick={(e) => handleNavClick(e, "#home")}>
              <Image
                src="/Carshait-logo.png"
                alt="Varshait Infotech Logo"
                width={160}
                height={50}
                priority
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href, link.external)}
                  className="text-white hover:text-[#06B6D4] transition-colors duration-200 px-3 py-2 text-sm font-medium flex items-center gap-1"
                >
                  {link.label}
                  {link.hasDropdown && <ChevronDown size={14} />}
                </a>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              className="bg-[#06B6D4] hover:bg-cyan-600 text-white font-semibold px-6 py-2 rounded-full transition-all duration-200 shadow-lg"
              onClick={() => window.open("https://calendly.com/macgw86/30min", "_blank")}
            >
              Get a Free Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-[#06B6D4] transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#0A0B45]">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white hover:text-[#06B6D4] block px-3 py-2 text-base font-medium transition-colors"
                  onClick={(e) => handleNavClick(e, link.href, link.external)}
                >
                  {link.label}
                </a>
              ))}
              <Button
                className="bg-[#06B6D4] hover:bg-cyan-600 text-white font-semibold w-full mt-4"
                onClick={() => window.open("https://calendly.com/macgw86/30min", "_blank")}
              >
                Get a Free Quote
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

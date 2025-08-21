"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useWebsiteData } from "@/lib/data-manager"

export default function HeroSection() {
  const data = useWebsiteData()
  const heroData = data.hero

  const scrollToWork = () => {
    const workSection = document.getElementById("work")
    if (workSection) {
      workSection.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  const handlePrimaryButton = () => {
    if (heroData.primaryButtonLink.startsWith("http")) {
      window.open(heroData.primaryButtonLink, "_blank")
    } else {
      const element = document.querySelector(heroData.primaryButtonLink)
      if (element) element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-20 text-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight text-white">
          <span className="block mb-4">We Build Technology</span>
          <span className="block text-[#06B6D4]">That Grows Your Business</span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
          With over <span className="font-semibold text-white">10+ years of expertise</span> and{" "}
          <span className="font-semibold text-white">200+ successful projects</span>, Varshait Infotech helps companies
          scale faster through modern web, mobile, and AI-powered solutions.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-10">
          <Button
            size="lg"
            className="bg-[#06B6D4] hover:bg-cyan-600 text-white font-semibold px-8 py-4 rounded-full shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-3 min-w-[220px]"
            onClick={handlePrimaryButton}
          >
            Schedule a Free Call
            <ArrowRight className="h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white/20 font-semibold px-8 py-4 rounded-full transition-all duration-300 min-w-[220px]"
            onClick={scrollToWork}
          >
            View Our Work
          </Button>
        </div>
      </div>
    </section>
  )
}

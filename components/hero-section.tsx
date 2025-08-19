"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp } from "lucide-react"
import { useWebsiteData } from "@/lib/data-manager"

export default function HeroSection() {
  const data = useWebsiteData()
  const heroData = data.hero

  const scrollToWork = () => {
    const workSection = document.getElementById("work")
    if (workSection) {
      workSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  const handlePrimaryButton = () => {
    if (heroData.primaryButtonLink.startsWith("http")) {
      window.open(heroData.primaryButtonLink, "_blank")
    } else {
      // Handle internal links
      const element = document.querySelector(heroData.primaryButtonLink)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  const handleSecondaryButton = () => {
    if (heroData.secondaryButtonLink.startsWith("http")) {
      window.open(heroData.secondaryButtonLink, "_blank")
    } else if (heroData.secondaryButtonLink.startsWith("#")) {
      const element = document.querySelector(heroData.secondaryButtonLink)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      scrollToWork()
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 drop-shadow-lg">
              <span>{heroData.title.replace(heroData.subtitle, "")}</span>
              <span className="text-brand-bright-blue drop-shadow-lg">{heroData.subtitle}</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100 leading-relaxed drop-shadow">{heroData.description}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-brand-bright-blue hover:bg-blue-600 text-white font-semibold px-8 py-4 text-lg shadow-xl"
                onClick={handlePrimaryButton}
              >
                {heroData.primaryButtonText}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-brand-deep-blue px-8 py-4 text-lg bg-white/10 backdrop-blur-sm shadow-xl hover:border-white"
                onClick={handleSecondaryButton}
              >
                {heroData.secondaryButtonText}
              </Button>
            </div>
          </div>

          {/* Image/Illustration */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 shadow-2xl">
              <img
                src="/business-growth-dashboard.png"
                alt="Business Growth and Technology Integration"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <TrendingUp className="h-8 w-8 text-green-500" />
                <div>
                  <p className="text-sm text-gray-600">Growth Rate</p>
                  <p className="text-2xl font-bold text-brand-deep-blue">+300%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="space-y-12">
          {/* Main Heading */}
          <div className="space-y-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white tracking-tight">
              <div className="mb-2 sm:mb-4">Transforming Web Design</div>
              <div className="mb-2 sm:mb-4">With The</div>
              <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent font-extrabold">
                Power Of AI
              </div>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-normal px-4">
              Partner with the best web design company in India and embrace the possibilities of tomorrow—today. Let's
              build something remarkable together.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-8">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-100 font-semibold px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-full shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center gap-2 sm:gap-3 min-w-[200px]"
              onClick={handlePrimaryButton}
            >
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              Schedule a call
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

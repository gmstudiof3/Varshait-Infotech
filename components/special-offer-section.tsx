"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Gift, ArrowRight } from "lucide-react"
import { useWebsiteData } from "@/lib/data-manager"

export default function SpecialOfferSection() {
  const data = useWebsiteData()
  const offer = data.specialOffer

  // Don't render if offer is not active
  if (!offer.active) {
    return null
  }

  const handleOfferClick = () => {
    if (offer.buttonLink.startsWith("http")) {
      window.open(offer.buttonLink, "_blank")
    } else {
      // Handle internal links
      const element = document.querySelector(offer.buttonLink)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <section className="py-20 bg-gradient-to-br from-brand-deep-blue to-blue-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-brand-bright-blue rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Card className="bg-white/10 backdrop-blur-sm border-white/20 shadow-2xl">
          <CardContent className="p-8 md:p-12 text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-brand-bright-blue rounded-full flex items-center justify-center">
                <Gift className="h-10 w-10 text-white" />
              </div>
            </div>

            {/* Updated Title */}
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              {offer.title || "Exclusive Offer"} — {offer.discount || "Free Consultation"}
            </h2>

            {/* Updated Description */}
            <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              {offer.description ||
                "Kickstart your digital transformation journey with a free strategy call and personalized solutions tailored for your business growth."}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-white text-brand-deep-blue hover:bg-gray-100 font-bold px-8 py-4 text-lg shadow-xl transition-all duration-300 hover:scale-105"
                onClick={handleOfferClick}
              >
                {offer.buttonText || "Claim Your Free Strategy Call"}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <div className="text-white/80 text-sm">
                ⏰ Valid until {new Date(offer.validUntil).toLocaleDateString()} • Limited spots available • Expert advice guaranteed
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-white/90">
              <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-brand-bright-blue rounded-full"></div>
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-brand-bright-blue rounded-full"></div>
                <span>Tailored Strategy</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-brand-bright-blue rounded-full"></div>
                <span>Actionable Roadmap</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

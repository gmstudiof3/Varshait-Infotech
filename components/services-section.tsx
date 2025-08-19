"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, Bot, ShoppingCart, TrendingUp, Video } from "lucide-react"
import { useWebsiteData } from "@/lib/data-manager"

export default function ServicesSection() {
  const data = useWebsiteData()
  const services = data.services

  // Icon mapping for dynamic services
  const iconMap: { [key: string]: any } = {
    "🌐": Globe,
    "📱": Bot,
    "🤖": Bot,
    "🎬": Video,
    "🛒": ShoppingCart,
    "📈": TrendingUp,
  }

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-deep-blue mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your business growth and digital transformation
            journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Globe
            return (
              <Card
                key={service.id}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg"
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 brand-bright-blue rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-brand-deep-blue group-hover:text-brand-bright-blue transition-colors">
                    {service.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-500 flex items-center justify-center gap-2">
                        <div className="w-1.5 h-1.5 bg-brand-bright-blue rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

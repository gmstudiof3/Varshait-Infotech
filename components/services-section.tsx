"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, Bot, ShoppingCart, TrendingUp, Video, Smartphone } from "lucide-react"
import { useWebsiteData } from "@/lib/data-manager"

export default function ServicesSection() {
  const data = useWebsiteData()
  const services = [
    {
      id: 1,
      icon: "🌐",
      name: "Web Development",
      description: "Custom websites and apps designed to attract customers and grow your business.",
      features: ["SEO Optimized", "Fast Loading", "Responsive Design", "Secure Hosting"],
    },
    {
      id: 2,
      icon: "📱",
      name: "Mobile App Development",
      description: "iOS and Android apps built for seamless performance and user experience.",
      features: ["Cross-Platform", "Native Performance", "App Store Ready", "User-Friendly"],
    },
    {
      id: 3,
      icon: "🤖",
      name: "AI Integration",
      description: "Smart AI-powered tools that save time, cut costs, and scale your business.",
      features: ["Chatbots & Automation", "Predictive Analytics", "Machine Learning", "Computer Vision"],
    },
    {
      id: 4,
      icon: "🎬",
      name: "Video Editing",
      description: "Professional editing and motion graphics to boost your brand storytelling.",
      features: ["Cinematic Editing", "Motion Graphics", "Color Grading", "Audio Enhancement"],
    },
    {
      id: 5,
      icon: "📈",
      name: "Digital Growth",
      description: "Data-driven strategies to get more traffic, leads, and conversions.",
      features: ["SEO Strategy", "Paid Ads", "Social Media Growth", "Conversion Optimization"],
    },
  ]

  // Icon mapping for dynamic services
  const iconMap: { [key: string]: any } = {
    "🌐": Globe,
    "📱": Smartphone,
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
            Smart, customizable solutions to help your business attract customers, increase sales, and grow faster.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {services.map((service) => {
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

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Utensils, ShoppingBag, Home, Shirt, Stethoscope, GraduationCap, Car, Briefcase } from "lucide-react"

export default function IndustriesSection() {
  const industries = [
    { icon: Utensils, name: "Restaurants", description: "Food & Beverage" },
    { icon: ShoppingBag, name: "E-Commerce", description: "Online Retail" },
    { icon: Home, name: "Real Estate", description: "Property Management" },
    { icon: Shirt, name: "Fashion Brands", description: "Apparel & Accessories" },
    { icon: Stethoscope, name: "Healthcare", description: "Medical Services" },
    { icon: GraduationCap, name: "Education", description: "Learning Platforms" },
    { icon: Car, name: "Automotive", description: "Vehicle Services" },
    { icon: Briefcase, name: "Professional Services", description: "Consulting & Legal" },
  ]

  return (
    <section id="industries" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-deep-blue mb-4">Industries We Serve</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our expertise spans across diverse industries, delivering tailored solutions that address unique challenges
            and drive sector-specific growth.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-brand-bright-blue/20"
            >
              <CardContent className="p-6 text-center">
                <div className="mx-auto w-16 h-16 bg-gray-100 group-hover:brand-bright-blue rounded-full flex items-center justify-center mb-4 transition-all duration-300">
                  <industry.icon className="h-8 w-8 text-brand-deep-blue group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-bold text-brand-deep-blue mb-2 group-hover:text-brand-bright-blue transition-colors">
                  {industry.name}
                </h3>
                <p className="text-sm text-gray-600">{industry.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Don't see your industry? We adapt our solutions to fit any business model.
          </p>
          <Button className="brand-bright-blue hover:bg-blue-600 text-white font-semibold px-8 py-3">
            Discuss Your Industry
          </Button>
        </div>
      </div>
    </section>
  )
}

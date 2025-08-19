"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ThreeBackground from "@/components/three-background"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Calendar, Users, TrendingUp, CheckCircle } from "lucide-react"

export default function InventailorProject() {
  return (
    <main className="min-h-screen relative">
      <ThreeBackground />
      <div className="relative z-10">
        <Navbar />
        <div className="pt-20 pb-16">
          {/* Hero Section */}
          <section className="py-16 bg-white/90 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <Button
                variant="outline"
                className="mb-8 border-brand-deep-blue text-brand-deep-blue hover:bg-brand-deep-blue hover:text-white bg-transparent"
                onClick={() => window.history.back()}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Our Work
              </Button>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-brand-bright-blue/10 rounded-full px-4 py-2 flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-brand-bright-blue" />
                      <span className="text-brand-deep-blue font-medium">2024</span>
                    </div>
                    <div className="bg-green-100 rounded-full px-4 py-2">
                      <span className="text-green-800 font-medium">Completed</span>
                    </div>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold text-brand-deep-blue mb-6">Inventailor</h1>
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    AI-powered inventory management system that revolutionized supply chain operations for retail
                    businesses, delivering unprecedented efficiency and cost savings.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {["React", "Node.js", "AI/ML", "PostgreSQL"].map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-brand-bright-blue/10 text-brand-deep-blue rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="relative">
                  <img
                    src="/ai-inventory-dashboard.png"
                    alt="Inventailor Dashboard"
                    className="w-full h-auto rounded-lg shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Results Section */}
          <section className="py-16 bg-gradient-to-br from-brand-deep-blue to-blue-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-3 gap-8 text-center text-white">
                <div>
                  <TrendingUp className="h-12 w-12 mx-auto mb-4 text-brand-bright-blue" />
                  <h3 className="text-3xl font-bold mb-2">40%</h3>
                  <p className="text-gray-200">Reduction in inventory costs</p>
                </div>
                <div>
                  <Users className="h-12 w-12 mx-auto mb-4 text-brand-bright-blue" />
                  <h3 className="text-3xl font-bold mb-2">500+</h3>
                  <p className="text-gray-200">Active users daily</p>
                </div>
                <div>
                  <CheckCircle className="h-12 w-12 mx-auto mb-4 text-brand-bright-blue" />
                  <h3 className="text-3xl font-bold mb-2">99.9%</h3>
                  <p className="text-gray-200">System uptime</p>
                </div>
              </div>
            </div>
          </section>

          {/* Project Details */}
          <section className="py-16 bg-white/90 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-3xl font-bold text-brand-deep-blue mb-6">The Challenge</h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Our client was struggling with inefficient inventory management, leading to overstocking, stockouts,
                    and significant financial losses. They needed a smart solution that could predict demand, optimize
                    stock levels, and provide real-time insights.
                  </p>
                  <h2 className="text-3xl font-bold text-brand-deep-blue mb-6">Our Solution</h2>
                  <p className="text-gray-600 leading-relaxed">
                    We developed Inventailor, an AI-powered inventory management system that uses machine learning
                    algorithms to predict demand patterns, optimize stock levels, and provide actionable insights
                    through an intuitive dashboard.
                  </p>
                </div>
                <div>
                  <Card className="shadow-xl border-0">
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold text-brand-deep-blue mb-6">Key Features</h3>
                      <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                          <span className="text-gray-600">AI-powered demand forecasting</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                          <span className="text-gray-600">Real-time inventory tracking</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                          <span className="text-gray-600">Automated reorder notifications</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                          <span className="text-gray-600">Advanced analytics dashboard</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                          <span className="text-gray-600">Multi-location support</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </main>
  )
}

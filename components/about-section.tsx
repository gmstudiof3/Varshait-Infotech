"use client"
import { useWebsiteData } from "@/lib/data-manager"
import { Award, Target, Users, Calendar, CheckCircle, Star, Trophy } from "lucide-react"

export default function AboutSection() {
  const data = useWebsiteData()
  const aboutData = data.about

  return (
    <section id="about" className="py-20 bg-white/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-xl">
              <img
                src={aboutData.image || "/placeholder.svg"}
                alt="Varshait Infotech Team"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="absolute -top-6 -left-6 bg-brand-deep-blue/95 backdrop-blur-sm rounded-lg p-6 text-white shadow-xl">
              <Award className="h-8 w-8 mb-2" />
              <p className="text-sm">Trusted by</p>
              <p className="text-2xl font-bold">50+ Clients</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-deep-blue drop-shadow-lg mb-6">
              {aboutData.title}
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">{aboutData.description}</p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-3">
                <Target className="h-6 w-6 text-brand-bright-blue mt-1" />
                <div>
                  <h3 className="font-semibold text-brand-deep-blue mb-2">Our Mission</h3>
                  <p className="text-gray-600">Empowering businesses with AI-driven solutions and custom technology.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="h-6 w-6 text-brand-bright-blue mt-1" />
                <div>
                  <h3 className="font-semibold text-brand-deep-blue mb-2">Our Values</h3>
                  <p className="text-gray-600">Innovation, reliability, and client success drive everything we do.</p>
                </div>
              </div>
            </div>

            <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 shadow-xl">
              <h3 className="text-xl font-bold text-brand-deep-blue mb-6">Our Journey & Achievements</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  {aboutData.stats.slice(0, 2).map((stat, index) => (
                    <div key={index} className="flex items-center gap-3">
                      {index === 0 ? (
                        <Calendar className="h-5 w-5 text-brand-bright-blue" />
                      ) : (
                        <Users className="h-5 w-5 text-brand-bright-blue" />
                      )}
                      <div>
                        <p className="text-sm text-gray-600">{stat.label}</p>
                        <p className="font-bold text-brand-deep-blue text-lg">{stat.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="space-y-4">
                  {aboutData.stats.slice(2, 4).map((stat, index) => (
                    <div key={index} className="flex items-center gap-3">
                      {index === 0 ? (
                        <CheckCircle className="h-5 w-5 text-brand-bright-blue" />
                      ) : (
                        <Star className="h-5 w-5 text-brand-bright-blue" />
                      )}
                      <div>
                        <p className="text-sm text-gray-600">{stat.label}</p>
                        <p className="font-bold text-brand-deep-blue text-lg">{stat.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {aboutData.stats[4] && (
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-3">
                    <Trophy className="h-5 w-5 text-brand-bright-blue" />
                    <div>
                      <p className="text-sm text-gray-600">{aboutData.stats[4].label}</p>
                      <p className="font-bold text-green-600 text-lg">{aboutData.stats[4].value}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

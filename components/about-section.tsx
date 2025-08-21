"use client"

import { useWebsiteData } from "@/lib/data-manager"
import { Target, Users, Calendar, CheckCircle, Star, Trophy } from "lucide-react"

export default function AboutSection() {
  const data = useWebsiteData()
  const aboutData = data.about

  return (
    <section id="about" className="py-20 bg-white/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-1 gap-12 items-center">
          {/* Content only (removed image) */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-deep-blue drop-shadow-lg mb-6">
              About Varshait Infotech
            </h2>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Varshait Infotech was born out of real struggles and ambitions. After years of working jobs and
              experiencing the challenges businesses face, we decided to build something better — solutions that truly
              empower companies to grow. With over <span className="font-semibold">10+ years of combined experience</span>,
              our expert team has helped businesses transform ideas into powerful digital realities.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-3">
                <Target className="h-6 w-6 text-brand-bright-blue mt-1" />
                <div>
                  <h3 className="font-semibold text-brand-deep-blue mb-2">Our Mission</h3>
                  <p className="text-gray-600">
                    To help businesses scale faster with AI-driven, customizable digital solutions that deliver real
                    results.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="h-6 w-6 text-brand-bright-blue mt-1" />
                <div>
                  <h3 className="font-semibold text-brand-deep-blue mb-2">Our Values</h3>
                  <p className="text-gray-600">
                    Innovation, honesty, and client success are at the heart of everything we do.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 shadow-xl">
              <h3 className="text-xl font-bold text-brand-deep-blue mb-6">Our Journey & Achievements</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-brand-bright-blue" />
                    <div>
                      <p className="text-sm text-gray-600">Years in Business</p>
                      <p className="font-bold text-brand-deep-blue text-lg">8+</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-brand-bright-blue" />
                    <div>
                      <p className="text-sm text-gray-600">Team Members</p>
                      <p className="font-bold text-brand-deep-blue text-lg">25+</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-brand-bright-blue" />
                    <div>
                      <p className="text-sm text-gray-600">Projects Completed</p>
                      <p className="font-bold text-brand-deep-blue text-lg">200+</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="h-5 w-5 text-brand-bright-blue" />
                    <div>
                      <p className="text-sm text-gray-600">Satisfied Customers</p>
                      <p className="font-bold text-brand-deep-blue text-lg">150+</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-200">
                <div className="flex items-center gap-3">
                  <Trophy className="h-5 w-5 text-brand-bright-blue" />
                  <div>
                    <p className="text-sm text-gray-600">Overall Success Rate</p>
                    <p className="font-bold text-green-600 text-lg">98%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

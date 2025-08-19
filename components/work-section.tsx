"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Calendar } from "lucide-react"
import Link from "next/link"
import { useWebsiteData } from "@/lib/data-manager"

export default function WorkSection() {
  const data = useWebsiteData()
  const projects = data.projects

  return (
    <section id="work" className="py-20 bg-white/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-deep-blue drop-shadow-lg mb-4">Our Work</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Discover how we've helped businesses transform their operations and achieve remarkable growth through
            innovative technology solutions.
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="overflow-hidden shadow-xl border-0 hover:shadow-2xl transition-all duration-300 bg-white/95 backdrop-blur-sm"
            >
              <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                <div className={`relative ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div className="w-full h-80 lg:h-80 overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-brand-bright-blue" />
                    <span className="text-sm font-medium text-brand-deep-blue">{project.category}</span>
                  </div>
                </div>
                <div className="p-6 lg:p-8 flex flex-col justify-center min-h-80">
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-2xl lg:text-3xl font-bold text-brand-deep-blue mb-3">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-base lg:text-lg text-gray-600 leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-0 space-y-4">
                    <div>
                      <h4 className="font-semibold text-brand-deep-blue mb-2 text-sm">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-brand-bright-blue/10 text-brand-deep-blue rounded-full text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="bg-green-50 border-l-4 border-green-400 p-3 rounded">
                      <p className="text-green-800 font-semibold text-sm">Category: {project.category}</p>
                    </div>
                    <Link href={project.link}>
                      <Button className="brand-bright-blue hover:bg-blue-600 text-white w-full sm:w-auto">
                        View Project
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

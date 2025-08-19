"use client"

import type React from "react"

import { useState, useEffect } from "react"
import AuthGuard from "@/components/admin/auth-guard"
import AdminLayout from "@/components/admin/admin-layout"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Plus, Trash2, Save, Upload, Star } from "lucide-react"
import { dataManager, useWebsiteData } from "@/lib/data-manager"
import type { Service, Project, HeroData, AboutData, SpecialOffer, ContactInfo } from "@/lib/data-manager"

export default function ContentManagement() {
  const websiteData = useWebsiteData()
  const [activeTab, setActiveTab] = useState("hero")
  const [saving, setSaving] = useState(false)

  const [heroData, setHeroData] = useState<HeroData>(websiteData.hero)
  const [aboutData, setAboutData] = useState<AboutData>(websiteData.about)
  const [services, setServices] = useState<Service[]>(websiteData.services)
  const [projects, setProjects] = useState<Project[]>(websiteData.projects)
  const [offerData, setOfferData] = useState<SpecialOffer>(websiteData.specialOffer)
  const [contactData, setContactData] = useState<ContactInfo>(websiteData.contact)

  useEffect(() => {
    setHeroData(websiteData.hero)
    setAboutData(websiteData.about)
    setServices(websiteData.services)
    setProjects(websiteData.projects)
    setOfferData(websiteData.specialOffer)
    setContactData(websiteData.contact)
  }, [websiteData])

  const handleSave = async (section: string) => {
    setSaving(true)
    try {
      switch (section) {
        case "Hero":
          dataManager.updateHeroData(heroData)
          break
        case "About":
          dataManager.updateAboutData(aboutData)
          break
        case "Services":
          // Update all services
          const currentServices = dataManager.getServices()
          // Remove deleted services
          currentServices.forEach((service) => {
            if (!services.find((s) => s.id === service.id)) {
              dataManager.deleteService(service.id)
            }
          })
          // Update existing and add new services
          services.forEach((service) => {
            const existing = currentServices.find((s) => s.id === service.id)
            if (existing) {
              dataManager.updateService(service.id, service)
            } else {
              dataManager.addService(service)
            }
          })
          break
        case "Projects":
          // Update all projects
          const currentProjects = dataManager.getProjects()
          // Remove deleted projects
          currentProjects.forEach((project) => {
            if (!projects.find((p) => p.id === project.id)) {
              dataManager.deleteProject(project.id)
            }
          })
          // Update existing and add new projects
          projects.forEach((project) => {
            const existing = currentProjects.find((p) => p.id === project.id)
            if (existing) {
              dataManager.updateProject(project.id, project)
            } else {
              dataManager.addProject(project)
            }
          })
          break
        case "Special Offers":
          dataManager.updateSpecialOffer(offerData)
          break
        case "Contact Information":
          dataManager.updateContactInfo(contactData)
          break
      }
      alert(`${section} section updated successfully!`)
    } catch (error) {
      console.error("Error saving data:", error)
      alert(`Error saving ${section} section. Please try again.`)
    } finally {
      setSaving(false)
    }
  }

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const result = e.target?.result as string
        setHeroData({ ...heroData, backgroundImage: result })
      }
      reader.readAsDataURL(file)
    }
  }

  const addService = () => {
    const newService: Service = {
      id: Date.now().toString(),
      name: "New Service",
      description: "Service description",
      icon: "⚡",
      features: ["Feature 1", "Feature 2"],
    }
    setServices([...services, newService])
  }

  const removeService = (id: string) => {
    setServices(services.filter((service) => service.id !== id))
  }

  const addProject = () => {
    const newProject: Project = {
      id: Date.now().toString(),
      title: "New Project",
      description: "Project description",
      image: "/placeholder.svg?height=300&width=400",
      featured: false,
      technologies: ["Technology 1"],
      link: "/projects/new-project",
      category: "Web Development",
    }
    setProjects([...projects, newProject])
  }

  const removeProject = (id: string) => {
    setProjects(projects.filter((project) => project.id !== id))
  }

  const toggleProjectFeatured = (id: string) => {
    setProjects(projects.map((project) => (project.id === id ? { ...project, featured: !project.featured } : project)))
  }

  return (
    <AuthGuard>
      <AdminLayout>
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Content Management</h1>
            <p className="text-gray-600 mt-2">Edit and manage all website content sections.</p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-6">
              <TabsTrigger value="hero">Hero</TabsTrigger>
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="services">Services</TabsTrigger>
              <TabsTrigger value="projects">Projects</TabsTrigger>
              <TabsTrigger value="offers">Offers</TabsTrigger>
              <TabsTrigger value="contact">Contact</TabsTrigger>
            </TabsList>

            {/* Hero Section */}
            <TabsContent value="hero">
              <Card>
                <CardHeader>
                  <CardTitle>Hero Section</CardTitle>
                  <CardDescription>Edit the main hero section content</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="hero-title">Main Title</Label>
                        <Input
                          id="hero-title"
                          value={heroData.title}
                          onChange={(e) => setHeroData({ ...heroData, title: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="hero-subtitle">Subtitle</Label>
                        <Input
                          id="hero-subtitle"
                          value={heroData.subtitle}
                          onChange={(e) => setHeroData({ ...heroData, subtitle: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="hero-description">Description</Label>
                        <Textarea
                          id="hero-description"
                          value={heroData.description}
                          onChange={(e) => setHeroData({ ...heroData, description: e.target.value })}
                          rows={3}
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="primary-btn-text">Primary Button Text</Label>
                          <Input
                            id="primary-btn-text"
                            value={heroData.primaryButtonText}
                            onChange={(e) => setHeroData({ ...heroData, primaryButtonText: e.target.value })}
                          />
                        </div>
                        <div>
                          <Label htmlFor="primary-btn-link">Primary Button Link</Label>
                          <Input
                            id="primary-btn-link"
                            value={heroData.primaryButtonLink}
                            onChange={(e) => setHeroData({ ...heroData, primaryButtonLink: e.target.value })}
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="secondary-btn-text">Secondary Button Text</Label>
                          <Input
                            id="secondary-btn-text"
                            value={heroData.secondaryButtonText}
                            onChange={(e) => setHeroData({ ...heroData, secondaryButtonText: e.target.value })}
                          />
                        </div>
                        <div>
                          <Label htmlFor="secondary-btn-link">Secondary Button Link</Label>
                          <Input
                            id="secondary-btn-link"
                            value={heroData.secondaryButtonLink}
                            onChange={(e) => setHeroData({ ...heroData, secondaryButtonLink: e.target.value })}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="hero-bg">Background Image URL</Label>
                        <Input
                          id="hero-bg"
                          value={heroData.backgroundImage || ""}
                          onChange={(e) => setHeroData({ ...heroData, backgroundImage: e.target.value })}
                        />
                      </div>
                      <div>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageUpload}
                          style={{ display: "none" }}
                          id="hero-image-upload"
                        />
                        <Button
                          variant="outline"
                          className="w-full bg-transparent"
                          onClick={() => document.getElementById("hero-image-upload")?.click()}
                        >
                          <Upload className="w-4 h-4 mr-2" />
                          Upload New Image
                        </Button>
                      </div>
                      {heroData.backgroundImage && (
                        <div className="mt-2">
                          <Label>Current Background Image</Label>
                          <div className="mt-1 border rounded-lg overflow-hidden">
                            <img
                              src={heroData.backgroundImage || "/placeholder.svg"}
                              alt="Hero background preview"
                              className="w-full h-32 object-cover"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <Button onClick={() => handleSave("Hero")} disabled={saving} className="w-full">
                    <Save className="w-4 h-4 mr-2" />
                    {saving ? "Saving..." : "Save Hero Section"}
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* About Section */}
            <TabsContent value="about">
              <Card>
                <CardHeader>
                  <CardTitle>About Section</CardTitle>
                  <CardDescription>Edit about section content and statistics</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="about-title">Title</Label>
                        <Input
                          id="about-title"
                          value={aboutData.title}
                          onChange={(e) => setAboutData({ ...aboutData, title: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="about-description">Description</Label>
                        <Textarea
                          id="about-description"
                          value={aboutData.description}
                          onChange={(e) => setAboutData({ ...aboutData, description: e.target.value })}
                          rows={4}
                        />
                      </div>
                      <div>
                        <Label htmlFor="about-image">Image URL</Label>
                        <Input
                          id="about-image"
                          value={aboutData.image}
                          onChange={(e) => setAboutData({ ...aboutData, image: e.target.value })}
                        />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <Label>Statistics</Label>
                      {aboutData.stats.map((stat, index) => (
                        <div key={index} className="grid grid-cols-2 gap-2">
                          <Input
                            value={stat.label}
                            onChange={(e) => {
                              const newStats = [...aboutData.stats]
                              newStats[index] = { ...stat, label: e.target.value }
                              setAboutData({ ...aboutData, stats: newStats })
                            }}
                            placeholder="Stat label"
                          />
                          <Input
                            value={stat.value}
                            onChange={(e) => {
                              const newStats = [...aboutData.stats]
                              newStats[index] = { ...stat, value: e.target.value }
                              setAboutData({ ...aboutData, stats: newStats })
                            }}
                            placeholder="Stat value"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  <Button onClick={() => handleSave("About")} disabled={saving} className="w-full">
                    <Save className="w-4 h-4 mr-2" />
                    {saving ? "Saving..." : "Save About Section"}
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Services Section */}
            <TabsContent value="services">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Services Management</CardTitle>
                    <CardDescription>Add, edit, or remove services</CardDescription>
                  </div>
                  <Button onClick={addService}>
                    <Plus className="w-4 h-4 mr-2" />
                    Add Service
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {services.map((service) => (
                      <Card key={service.id} className="relative">
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <span className="text-2xl">{service.icon}</span>
                              <CardTitle className="text-lg">{service.name}</CardTitle>
                            </div>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => removeService(service.id)}
                              className="text-red-600 hover:text-red-700"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <Input
                            value={service.name}
                            onChange={(e) => {
                              setServices(
                                services.map((s) => (s.id === service.id ? { ...s, name: e.target.value } : s)),
                              )
                            }}
                            placeholder="Service name"
                          />
                          <Textarea
                            value={service.description}
                            onChange={(e) => {
                              setServices(
                                services.map((s) => (s.id === service.id ? { ...s, description: e.target.value } : s)),
                              )
                            }}
                            placeholder="Service description"
                            rows={2}
                          />
                          <div>
                            <Label>Features (comma-separated)</Label>
                            <Input
                              value={service.features.join(", ")}
                              onChange={(e) => {
                                const features = e.target.value
                                  .split(",")
                                  .map((f) => f.trim())
                                  .filter((f) => f)
                                setServices(services.map((s) => (s.id === service.id ? { ...s, features } : s)))
                              }}
                              placeholder="Feature 1, Feature 2, Feature 3"
                            />
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {service.features.map((feature, index) => (
                              <Badge key={index} variant="secondary">
                                {feature}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  <Button onClick={() => handleSave("Services")} disabled={saving} className="w-full mt-4">
                    <Save className="w-4 h-4 mr-2" />
                    {saving ? "Saving..." : "Save Services"}
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Projects Section */}
            <TabsContent value="projects">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Projects Management</CardTitle>
                    <CardDescription>Manage portfolio projects and mark as featured</CardDescription>
                  </div>
                  <Button onClick={addProject}>
                    <Plus className="w-4 h-4 mr-2" />
                    Add Project
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {projects.map((project) => (
                      <Card key={project.id} className="relative">
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <CardTitle className="text-lg">{project.title}</CardTitle>
                              {project.featured && (
                                <Badge className="bg-yellow-100 text-yellow-800">
                                  <Star className="w-3 h-3 mr-1" />
                                  Featured
                                </Badge>
                              )}
                            </div>
                            <div className="flex items-center space-x-2">
                              <Button variant="outline" size="sm" onClick={() => toggleProjectFeatured(project.id)}>
                                <Star className={`w-4 h-4 ${project.featured ? "fill-current text-yellow-500" : ""}`} />
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => removeProject(project.id)}
                                className="text-red-600 hover:text-red-700"
                              >
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-3">
                            <Input
                              value={project.title}
                              onChange={(e) => {
                                setProjects(
                                  projects.map((p) => (p.id === project.id ? { ...p, title: e.target.value } : p)),
                                )
                              }}
                              placeholder="Project title"
                            />
                            <Textarea
                              value={project.description}
                              onChange={(e) => {
                                setProjects(
                                  projects.map((p) =>
                                    p.id === project.id ? { ...p, description: e.target.value } : p,
                                  ),
                                )
                              }}
                              placeholder="Project description"
                              rows={2}
                            />
                            <Input
                              value={project.image}
                              onChange={(e) => {
                                setProjects(
                                  projects.map((p) => (p.id === project.id ? { ...p, image: e.target.value } : p)),
                                )
                              }}
                              placeholder="Image URL"
                            />
                            <Input
                              value={project.category}
                              onChange={(e) => {
                                setProjects(
                                  projects.map((p) => (p.id === project.id ? { ...p, category: e.target.value } : p)),
                                )
                              }}
                              placeholder="Project category"
                            />
                          </div>
                          <div className="space-y-3">
                            <Input
                              value={project.link}
                              onChange={(e) => {
                                setProjects(
                                  projects.map((p) => (p.id === project.id ? { ...p, link: e.target.value } : p)),
                                )
                              }}
                              placeholder="Project link/URL"
                            />
                            <div>
                              <Label>Technologies (comma-separated)</Label>
                              <Input
                                value={project.technologies.join(", ")}
                                onChange={(e) => {
                                  const technologies = e.target.value
                                    .split(",")
                                    .map((t) => t.trim())
                                    .filter((t) => t)
                                  setProjects(projects.map((p) => (p.id === project.id ? { ...p, technologies } : p)))
                                }}
                                placeholder="React, Node.js, MongoDB"
                              />
                            </div>
                            <div className="flex flex-wrap gap-1">
                              {project.technologies.map((tech, index) => (
                                <Badge key={index} variant="outline">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  <Button onClick={() => handleSave("Projects")} disabled={saving} className="w-full mt-4">
                    <Save className="w-4 h-4 mr-2" />
                    {saving ? "Saving..." : "Save Projects"}
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Special Offers Section */}
            <TabsContent value="offers">
              <Card>
                <CardHeader>
                  <CardTitle>Special Offers</CardTitle>
                  <CardDescription>Manage promotional offers and campaigns</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="offer-title">Offer Title</Label>
                        <Input
                          id="offer-title"
                          value={offerData.title}
                          onChange={(e) => setOfferData({ ...offerData, title: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="offer-description">Description</Label>
                        <Textarea
                          id="offer-description"
                          value={offerData.description}
                          onChange={(e) => setOfferData({ ...offerData, description: e.target.value })}
                          rows={3}
                        />
                      </div>
                      <div>
                        <Label htmlFor="offer-discount">Discount</Label>
                        <Input
                          id="offer-discount"
                          value={offerData.discount}
                          onChange={(e) => setOfferData({ ...offerData, discount: e.target.value })}
                          placeholder="30%"
                        />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="offer-btn-text">Button Text</Label>
                        <Input
                          id="offer-btn-text"
                          value={offerData.buttonText}
                          onChange={(e) => setOfferData({ ...offerData, buttonText: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="offer-btn-link">Button Link</Label>
                        <Input
                          id="offer-btn-link"
                          value={offerData.buttonLink}
                          onChange={(e) => setOfferData({ ...offerData, buttonLink: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="offer-valid-until">Valid Until</Label>
                        <Input
                          id="offer-valid-until"
                          type="date"
                          value={offerData.validUntil}
                          onChange={(e) => setOfferData({ ...offerData, validUntil: e.target.value })}
                        />
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="offer-active"
                          checked={offerData.active}
                          onChange={(e) => setOfferData({ ...offerData, active: e.target.checked })}
                        />
                        <Label htmlFor="offer-active">Active (show on website)</Label>
                      </div>
                    </div>
                  </div>
                  <Button onClick={() => handleSave("Special Offers")} disabled={saving} className="w-full">
                    <Save className="w-4 h-4 mr-2" />
                    {saving ? "Saving..." : "Save Special Offers"}
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Contact Section */}
            <TabsContent value="contact">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                  <CardDescription>Update contact details and service areas</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="contact-email">Email</Label>
                        <Input
                          id="contact-email"
                          value={contactData.email}
                          onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="contact-phone">Phone</Label>
                        <Input
                          id="contact-phone"
                          value={contactData.phone}
                          onChange={(e) => setContactData({ ...contactData, phone: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="contact-address">Address</Label>
                        <Input
                          id="contact-address"
                          value={contactData.address}
                          onChange={(e) => setContactData({ ...contactData, address: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="contact-city">City</Label>
                        <Input
                          id="contact-city"
                          value={contactData.city}
                          onChange={(e) => setContactData({ ...contactData, city: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="contact-country">Country</Label>
                        <Input
                          id="contact-country"
                          value={contactData.country}
                          onChange={(e) => setContactData({ ...contactData, country: e.target.value })}
                        />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <Label>Service Areas</Label>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {contactData.serviceAreas.map((area, index) => (
                            <Badge
                              key={index}
                              variant="secondary"
                              className="cursor-pointer"
                              onClick={() => {
                                setContactData({
                                  ...contactData,
                                  serviceAreas: contactData.serviceAreas.filter((_, i) => i !== index),
                                })
                              }}
                            >
                              {area} ×
                            </Badge>
                          ))}
                        </div>
                        <Input
                          placeholder="Add service area and press Enter"
                          className="mt-2"
                          onKeyPress={(e) => {
                            if (e.key === "Enter") {
                              const value = (e.target as HTMLInputElement).value.trim()
                              if (value && !contactData.serviceAreas.includes(value)) {
                                setContactData({
                                  ...contactData,
                                  serviceAreas: [...contactData.serviceAreas, value],
                                })
                                ;(e.target as HTMLInputElement).value = ""
                              }
                            }
                          }}
                        />
                      </div>
                      <div>
                        <Label htmlFor="linkedin">LinkedIn URL</Label>
                        <Input
                          id="linkedin"
                          value={contactData.socialLinks.linkedin || ""}
                          onChange={(e) =>
                            setContactData({
                              ...contactData,
                              socialLinks: { ...contactData.socialLinks, linkedin: e.target.value },
                            })
                          }
                        />
                      </div>
                      <div>
                        <Label htmlFor="twitter">Twitter URL</Label>
                        <Input
                          id="twitter"
                          value={contactData.socialLinks.twitter || ""}
                          onChange={(e) =>
                            setContactData({
                              ...contactData,
                              socialLinks: { ...contactData.socialLinks, twitter: e.target.value },
                            })
                          }
                        />
                      </div>
                      <div>
                        <Label htmlFor="facebook">Facebook URL</Label>
                        <Input
                          id="facebook"
                          value={contactData.socialLinks.facebook || ""}
                          onChange={(e) =>
                            setContactData({
                              ...contactData,
                              socialLinks: { ...contactData.socialLinks, facebook: e.target.value },
                            })
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <Button onClick={() => handleSave("Contact Information")} disabled={saving} className="w-full">
                    <Save className="w-4 h-4 mr-2" />
                    {saving ? "Saving..." : "Save Contact Information"}
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </AdminLayout>
    </AuthGuard>
  )
}

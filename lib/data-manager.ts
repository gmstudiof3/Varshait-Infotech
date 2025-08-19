"use client"

// Data types for all website content
export interface HeroData {
  title: string
  subtitle: string
  description: string
  primaryButtonText: string
  primaryButtonLink: string
  secondaryButtonText: string
  secondaryButtonLink: string
  backgroundImage?: string
}

export interface AboutData {
  title: string
  description: string
  image: string
  stats: {
    label: string
    value: string
  }[]
}

export interface Service {
  id: string
  name: string
  description: string
  icon: string
  features: string[]
}

export interface Project {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  featured: boolean
  link: string
  category: string
}

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  image: string
  author: string
  date: string
  slug: string
  tags: string[]
  published: boolean
  seo: {
    title: string
    description: string
    keywords: string
  }
}

export interface SpecialOffer {
  id: string
  title: string
  description: string
  discount: string
  validUntil: string
  buttonText: string
  buttonLink: string
  active: boolean
}

export interface ContactInfo {
  email: string
  phone: string
  address: string
  city: string
  country: string
  serviceAreas: string[]
  socialLinks: {
    linkedin?: string
    twitter?: string
    facebook?: string
    instagram?: string
  }
}

export interface WebsiteData {
  hero: HeroData
  about: AboutData
  services: Service[]
  projects: Project[]
  blog: BlogPost[]
  specialOffer: SpecialOffer
  contact: ContactInfo
  seo: {
    [key: string]: {
      title: string
      description: string
      keywords: string
    }
  }
}

// Default data structure
const defaultData: WebsiteData = {
  hero: {
    title: "Transform Your Business with Cutting-Edge Technology",
    subtitle: "Varshait Infotech",
    description:
      "We specialize in creating innovative digital solutions that drive growth and success. From web development to AI integration, we're your trusted technology partner.",
    primaryButtonText: "Book a Call",
    primaryButtonLink: "https://calendly.com/macgw86/30min",
    secondaryButtonText: "Our Work",
    secondaryButtonLink: "#work",
  },
  about: {
    title: "About Varshait Infotech",
    description:
      "We are a leading technology company specializing in innovative digital solutions. Our team of experts delivers cutting-edge web development, mobile applications, and AI-powered solutions that transform businesses and drive growth.",
    image: "/business-team-tech-office.png",
    stats: [
      { label: "Years in Business", value: "8+" },
      { label: "Team Members", value: "25+" },
      { label: "Projects Completed", value: "200+" },
      { label: "Satisfied Customers", value: "150+" },
      { label: "Success Rate", value: "98%" },
    ],
  },
  services: [
    {
      id: "web-development",
      name: "Web Development",
      description: "Custom websites and web applications built with modern technologies",
      icon: "🌐",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Secure"],
    },
    {
      id: "mobile-development",
      name: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android",
      icon: "📱",
      features: ["Native Performance", "Cross-Platform", "User-Friendly", "App Store Ready"],
    },
    {
      id: "ai-integration",
      name: "AI Integration",
      description: "Intelligent solutions powered by artificial intelligence and machine learning",
      icon: "🤖",
      features: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics"],
    },
    {
      id: "video-editing",
      name: "Video Editing",
      description: "Professional video editing and post-production services",
      icon: "🎬",
      features: ["Professional Editing", "Motion Graphics", "Color Correction", "Audio Enhancement"],
    },
  ],
  projects: [
    {
      id: "inventailor",
      title: "Inventailor - AI Inventory Management",
      description:
        "Revolutionary AI-powered inventory management system that transforms how businesses track and manage their stock.",
      image: "/ai-inventory-dashboard.png",
      technologies: ["React", "Node.js", "AI/ML", "MongoDB"],
      featured: true,
      link: "/projects/inventailor",
      category: "AI Solutions",
    },
    {
      id: "bespoke-cashmere",
      title: "Bespoke Cashmere - Luxury E-commerce",
      description:
        "Premium e-commerce platform for luxury cashmere products with sophisticated design and seamless user experience.",
      image: "/luxury-cashmere-ecommerce.png",
      technologies: ["Next.js", "Stripe", "Tailwind CSS", "PostgreSQL"],
      featured: true,
      link: "/projects/bespoke-cashmere",
      category: "E-commerce",
    },
    {
      id: "mile-high-tikka",
      title: "Mile High Tikka - Restaurant App",
      description:
        "Modern restaurant delivery application with real-time order tracking and seamless payment integration.",
      image: "/restaurant-delivery-app.png",
      technologies: ["React Native", "Firebase", "Payment Gateway", "Maps API"],
      featured: false,
      link: "/projects/mile-high-tikka",
      category: "Mobile App",
    },
  ],
  blog: [
    {
      id: "ai-business-transformation",
      title: "How AI is Transforming Modern Businesses",
      excerpt:
        "Discover the revolutionary impact of artificial intelligence on business operations and customer experiences.",
      content:
        "Artificial Intelligence is no longer a futuristic concept—it's a present reality that's reshaping industries across the globe...",
      image: "/ai-business-transformation.png",
      author: "Varshait Team",
      date: "2024-01-15",
      slug: "ai-business-transformation",
      tags: ["AI", "Business", "Technology"],
      published: true,
      seo: {
        title: "How AI is Transforming Modern Businesses | Varshait Infotech",
        description:
          "Learn how artificial intelligence is revolutionizing business operations and driving growth in 2024.",
        keywords: "AI, artificial intelligence, business transformation, technology",
      },
    },
    {
      id: "web-development-trends",
      title: "Top Web Development Trends for 2024",
      excerpt:
        "Stay ahead of the curve with the latest web development trends and technologies shaping the digital landscape.",
      content:
        "The web development landscape is constantly evolving, with new frameworks, tools, and methodologies emerging regularly...",
      image: "/web-dev-trends-2024.png",
      author: "Varshait Team",
      date: "2024-01-10",
      slug: "web-development-trends-2024",
      tags: ["Web Development", "Trends", "Technology"],
      published: true,
      seo: {
        title: "Top Web Development Trends for 2024 | Varshait Infotech",
        description: "Discover the latest web development trends and technologies that will dominate 2024.",
        keywords: "web development, trends 2024, frontend, backend, technology",
      },
    },
    {
      id: "mobile-app-success",
      title: "Building Successful Mobile Applications",
      excerpt:
        "Essential strategies and best practices for creating mobile apps that users love and businesses profit from.",
      content: "Creating a successful mobile application requires more than just good coding skills...",
      image: "/mobile-app-development-success.png",
      author: "Varshait Team",
      date: "2024-01-05",
      slug: "mobile-app-success-strategies",
      tags: ["Mobile Development", "App Strategy", "UX Design"],
      published: true,
      seo: {
        title: "Building Successful Mobile Applications | Varshait Infotech",
        description: "Learn the essential strategies for creating mobile apps that drive business success.",
        keywords: "mobile app development, app strategy, mobile UX, app success",
      },
    },
  ],
  specialOffer: {
    id: "new-year-2024",
    title: "New Year Special Offer",
    description: "Start your digital transformation journey with our exclusive package deal",
    discount: "30%",
    validUntil: "2024-03-31",
    buttonText: "Claim Offer",
    buttonLink: "https://calendly.com/macgw86/30min",
    active: true,
  },
  contact: {
    email: "info@varshaitinfotech.com",
    phone: "+91 98765 43210",
    address: "123 Tech Park, Ahmedabad",
    city: "Ahmedabad, Gujarat",
    country: "India",
    serviceAreas: ["India", "Denmark", "China", "Dubai"],
    socialLinks: {
      linkedin: "https://linkedin.com/company/varshait-infotech",
      twitter: "https://twitter.com/varshaitinfo",
      facebook: "https://facebook.com/varshaitinfotech",
      instagram: "https://instagram.com/varshaitinfotech",
    },
  },
  seo: {
    home: {
      title: "Varshait Infotech - Transform Your Business with Technology",
      description:
        "Leading technology company specializing in web development, mobile apps, and AI solutions. Transform your business with our innovative digital solutions.",
      keywords: "web development, mobile apps, AI solutions, technology company, digital transformation",
    },
    about: {
      title: "About Us - Varshait Infotech",
      description:
        "Learn about Varshait Infotech, a leading technology company with 8+ years of experience in delivering innovative digital solutions.",
      keywords: "about varshait infotech, technology company, web development team, mobile app developers",
    },
    services: {
      title: "Our Services - Web Development, Mobile Apps & AI Solutions",
      description:
        "Comprehensive technology services including web development, mobile applications, AI integration, and video editing solutions.",
      keywords: "web development services, mobile app development, AI integration, video editing, technology services",
    },
    blog: {
      title: "Tech Blog - Latest Insights & Trends | Varshait Infotech",
      description:
        "Stay updated with the latest technology trends, development insights, and industry news from Varshait Infotech experts.",
      keywords: "technology blog, web development blog, mobile app insights, AI trends, tech news",
    },
  },
}

// Data management class
class DataManager {
  private static instance: DataManager
  private data: WebsiteData

  private constructor() {
    this.data = this.loadData()
    this.initializeData()
  }

  public static getInstance(): DataManager {
    if (!DataManager.instance) {
      DataManager.instance = new DataManager()
    }
    return DataManager.instance
  }

  private loadData(): WebsiteData {
    if (typeof window === "undefined") return defaultData

    try {
      const stored = localStorage.getItem("varshait-website-data")
      if (stored) {
        const parsedData = JSON.parse(stored)
        // Merge with default data to ensure all properties exist
        return { ...defaultData, ...parsedData }
      }
    } catch (error) {
      console.error("Error loading data:", error)
    }
    return defaultData
  }

  private saveData(): void {
    if (typeof window === "undefined") return

    try {
      localStorage.setItem("varshait-website-data", JSON.stringify(this.data))
      // Trigger custom event for components to update
      window.dispatchEvent(new CustomEvent("websiteDataUpdated", { detail: this.data }))
    } catch (error) {
      console.error("Error saving data:", error)
    }
  }

  private initializeData(): void {
    if (typeof window === "undefined") return

    const stored = localStorage.getItem("varshait-website-data")
    if (!stored) {
      this.saveData()
      console.log("[v0] Initialized website data with defaults")
    } else {
      this.data = this.loadData()
      console.log("[v0] Loaded existing website data")
    }
  }

  // Hero data methods
  getHeroData(): HeroData {
    return this.data.hero
  }

  updateHeroData(heroData: Partial<HeroData>): void {
    this.data.hero = { ...this.data.hero, ...heroData }
    this.saveData()
  }

  // About data methods
  getAboutData(): AboutData {
    return this.data.about
  }

  updateAboutData(aboutData: Partial<AboutData>): void {
    this.data.about = { ...this.data.about, ...aboutData }
    this.saveData()
  }

  // Services methods
  getServices(): Service[] {
    return this.data.services
  }

  addService(service: Omit<Service, "id">): void {
    const newService = { ...service, id: Date.now().toString() }
    this.data.services.push(newService)
    this.saveData()
  }

  updateService(id: string, service: Partial<Service>): void {
    const index = this.data.services.findIndex((s) => s.id === id)
    if (index !== -1) {
      this.data.services[index] = { ...this.data.services[index], ...service }
      this.saveData()
    }
  }

  deleteService(id: string): void {
    this.data.services = this.data.services.filter((s) => s.id !== id)
    this.saveData()
  }

  // Projects methods
  getProjects(): Project[] {
    return this.data.projects
  }

  getFeaturedProjects(): Project[] {
    return this.data.projects.filter((p) => p.featured)
  }

  addProject(project: Omit<Project, "id">): void {
    const newProject = { ...project, id: Date.now().toString() }
    this.data.projects.push(newProject)
    this.saveData()
  }

  updateProject(id: string, project: Partial<Project>): void {
    const index = this.data.projects.findIndex((p) => p.id === id)
    if (index !== -1) {
      this.data.projects[index] = { ...this.data.projects[index], ...project }
      this.saveData()
    }
  }

  deleteProject(id: string): void {
    this.data.projects = this.data.projects.filter((p) => p.id !== id)
    this.saveData()
  }

  // Blog methods
  getBlogPosts(published = true): BlogPost[] {
    return this.data.blog.filter((post) => (published ? post.published : true))
  }

  getBlogPost(slug: string): BlogPost | undefined {
    return this.data.blog.find((post) => post.slug === slug)
  }

  addBlogPost(post: Omit<BlogPost, "id">): void {
    const newPost = { ...post, id: Date.now().toString() }
    this.data.blog.push(newPost)
    this.saveData()
  }

  updateBlogPost(id: string, post: Partial<BlogPost>): void {
    const index = this.data.blog.findIndex((p) => p.id === id)
    if (index !== -1) {
      this.data.blog[index] = { ...this.data.blog[index], ...post }
      this.saveData()
    }
  }

  deleteBlogPost(id: string): void {
    this.data.blog = this.data.blog.filter((p) => p.id !== id)
    this.saveData()
  }

  // Special offer methods
  getSpecialOffer(): SpecialOffer {
    return this.data.specialOffer
  }

  updateSpecialOffer(offer: Partial<SpecialOffer>): void {
    this.data.specialOffer = { ...this.data.specialOffer, ...offer }
    this.saveData()
  }

  // Contact methods
  getContactInfo(): ContactInfo {
    return this.data.contact
  }

  updateContactInfo(contact: Partial<ContactInfo>): void {
    this.data.contact = { ...this.data.contact, ...contact }
    this.saveData()
  }

  // SEO methods
  getSEOData(page: string) {
    return this.data.seo[page] || this.data.seo.home
  }

  updateSEOData(page: string, seo: { title: string; description: string; keywords: string }): void {
    this.data.seo[page] = seo
    this.saveData()
  }

  // Get all data
  getAllData(): WebsiteData {
    return this.data
  }

  // Reset to default
  resetToDefault(): void {
    this.data = { ...defaultData }
    this.saveData()
  }
}

// Export singleton instance
export const dataManager = DataManager.getInstance()

// React hook for using data with automatic updates
export function useWebsiteData() {
  const [data, setData] = React.useState<WebsiteData>(dataManager.getAllData())

  React.useEffect(() => {
    const handleDataUpdate = (event: CustomEvent) => {
      setData(event.detail)
    }

    window.addEventListener("websiteDataUpdated", handleDataUpdate as EventListener)
    return () => {
      window.removeEventListener("websiteDataUpdated", handleDataUpdate as EventListener)
    }
  }, [])

  return data
}

// Import React for the hook
import React from "react"

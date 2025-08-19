"use client"

import { useState } from "react"
import AuthGuard from "@/components/admin/auth-guard"
import AdminLayout from "@/components/admin/admin-layout"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Save, Globe, Settings, Link, Eye } from "lucide-react"

export default function PageSEOManagement() {
  const [activeTab, setActiveTab] = useState("legal")
  const [saving, setSaving] = useState(false)

  // Legal Pages Content
  const [legalPages, setLegalPages] = useState({
    privacy: {
      title: "Privacy Policy",
      content: `# Privacy Policy

Last updated: January 15, 2024

## Information We Collect

At Varshait Infotech, we collect information you provide directly to us, such as when you:
- Fill out our contact forms
- Subscribe to our newsletter
- Request consultations
- Use our services

## How We Use Your Information

We use the information we collect to:
- Provide and improve our services
- Communicate with you about our services
- Send you marketing communications (with your consent)
- Comply with legal obligations

## Information Sharing

We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.

## Data Security

We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.

## Contact Us

If you have questions about this Privacy Policy, please contact us at:
- Email: privacy@varshaitinfotech.com
- Phone: +91 98765 43210
- Address: 123 Tech Park, Ahmedabad, Gujarat 380001, India`,
    },
    terms: {
      title: "Terms of Service",
      content: `# Terms of Service

Last updated: January 15, 2024

## Acceptance of Terms

By accessing and using Varshait Infotech's services, you accept and agree to be bound by the terms and provision of this agreement.

## Services

Varshait Infotech provides web development, mobile app development, digital marketing, and video editing services.

## User Responsibilities

You agree to:
- Provide accurate information
- Use our services lawfully
- Respect intellectual property rights
- Pay for services as agreed

## Intellectual Property

All content, features, and functionality of our services are owned by Varshait Infotech and are protected by copyright, trademark, and other laws.

## Limitation of Liability

Varshait Infotech shall not be liable for any indirect, incidental, special, consequential, or punitive damages.

## Contact Information

For questions about these Terms, contact us at:
- Email: legal@varshaitinfotech.com
- Phone: +91 98765 43210`,
    },
    cookies: {
      title: "Cookie Policy",
      content: `# Cookie Policy

Last updated: January 15, 2024

## What Are Cookies

Cookies are small text files that are placed on your computer or mobile device when you visit our website.

## How We Use Cookies

We use cookies to:
- Remember your preferences
- Analyze website traffic
- Improve user experience
- Provide personalized content

## Types of Cookies We Use

### Essential Cookies
Required for the website to function properly.

### Analytics Cookies
Help us understand how visitors interact with our website.

### Marketing Cookies
Used to deliver relevant advertisements.

## Managing Cookies

You can control cookies through your browser settings. However, disabling cookies may affect website functionality.

## Contact Us

For questions about our Cookie Policy:
- Email: cookies@varshaitinfotech.com
- Phone: +91 98765 43210`,
    },
  })

  // SEO Settings for all pages
  const [seoSettings, setSeoSettings] = useState({
    home: {
      title: "Varshait Infotech - Leading Technology Solutions & Web Development",
      description:
        "Transform your business with Varshait Infotech's expert web development, mobile apps, digital marketing, and video editing services. Serving India, Denmark, China, and Dubai.",
      keywords: [
        "web development",
        "mobile app development",
        "digital marketing",
        "video editing",
        "technology solutions",
        "Ahmedabad",
        "Gujarat",
        "India",
      ],
      ogImage: "/og-home.jpg",
    },
    about: {
      title: "About Varshait Infotech - 8+ Years of Technology Excellence",
      description:
        "Learn about Varshait Infotech's journey, our expert team of 25+ professionals, and our commitment to delivering innovative technology solutions worldwide.",
      keywords: ["about varshait", "technology company", "web development team", "digital transformation"],
      ogImage: "/og-about.jpg",
    },
    services: {
      title: "Our Services - Web Development, Mobile Apps & Digital Marketing",
      description:
        "Comprehensive technology services including custom web development, mobile app development, digital marketing strategies, and professional video editing.",
      keywords: [
        "web development services",
        "mobile app development",
        "digital marketing services",
        "video editing services",
        "custom software",
      ],
      ogImage: "/og-services.jpg",
    },
    portfolio: {
      title: "Our Work - Successful Projects & Case Studies | Varshait Infotech",
      description:
        "Explore our portfolio of successful web development, mobile app, and digital marketing projects. See how we've helped businesses achieve their goals.",
      keywords: ["portfolio", "case studies", "web development projects", "mobile apps", "success stories"],
      ogImage: "/og-portfolio.jpg",
    },
    blog: {
      title: "Technology Blog - Insights & Trends | Varshait Infotech",
      description:
        "Stay updated with the latest technology trends, web development insights, and digital marketing strategies from our expert team.",
      keywords: ["technology blog", "web development blog", "digital marketing insights", "tech trends"],
      ogImage: "/og-blog.jpg",
    },
    contact: {
      title: "Contact Varshait Infotech - Get Your Free Consultation",
      description:
        "Ready to transform your business? Contact Varshait Infotech for a free consultation. Serving clients in India, Denmark, China, and Dubai.",
      keywords: ["contact", "free consultation", "web development quote", "technology consultation"],
      ogImage: "/og-contact.jpg",
    },
  })

  // Integration Settings
  const [integrationSettings, setIntegrationSettings] = useState({
    calendly: "https://calendly.com/macgw86/30min",
    socialMedia: {
      linkedin: "https://linkedin.com/company/varshait-infotech",
      twitter: "https://twitter.com/varshaitinfo",
      facebook: "https://facebook.com/varshaitinfotech",
      instagram: "https://instagram.com/varshaitinfotech",
    },
    analytics: {
      googleAnalytics: "G-XXXXXXXXXX",
      facebookPixel: "123456789",
      linkedinInsight: "987654321",
    },
  })

  const handleSave = async (section: string) => {
    setSaving(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setSaving(false)
    alert(`${section} updated successfully!`)
  }

  const addKeyword = (page: string, keyword: string) => {
    if (!keyword || seoSettings[page as keyof typeof seoSettings].keywords.includes(keyword)) return
    setSeoSettings({
      ...seoSettings,
      [page]: {
        ...seoSettings[page as keyof typeof seoSettings],
        keywords: [...seoSettings[page as keyof typeof seoSettings].keywords, keyword],
      },
    })
  }

  const removeKeyword = (page: string, keywordToRemove: string) => {
    setSeoSettings({
      ...seoSettings,
      [page]: {
        ...seoSettings[page as keyof typeof seoSettings],
        keywords: seoSettings[page as keyof typeof seoSettings].keywords.filter(
          (keyword) => keyword !== keywordToRemove,
        ),
      },
    })
  }

  return (
    <AuthGuard>
      <AdminLayout>
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Page & SEO Management</h1>
            <p className="text-gray-600 mt-2">Manage legal pages, SEO settings, and integrations.</p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="legal">Legal Pages</TabsTrigger>
              <TabsTrigger value="seo">SEO Settings</TabsTrigger>
              <TabsTrigger value="integrations">Integrations</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>

            {/* Legal Pages */}
            <TabsContent value="legal">
              <div className="space-y-6">
                {Object.entries(legalPages).map(([key, page]) => (
                  <Card key={key}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle>{page.title}</CardTitle>
                          <CardDescription>Edit the {page.title.toLowerCase()} content</CardDescription>
                        </div>
                        <Button variant="outline" size="sm" onClick={() => window.open(`/${key}`, "_blank")}>
                          <Eye className="w-4 h-4 mr-2" />
                          Preview
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <Label htmlFor={`${key}-title`}>Page Title</Label>
                        <Input
                          id={`${key}-title`}
                          value={page.title}
                          onChange={(e) =>
                            setLegalPages({
                              ...legalPages,
                              [key]: { ...page, title: e.target.value },
                            })
                          }
                        />
                      </div>
                      <div>
                        <Label htmlFor={`${key}-content`}>Content (Markdown)</Label>
                        <Textarea
                          id={`${key}-content`}
                          value={page.content}
                          onChange={(e) =>
                            setLegalPages({
                              ...legalPages,
                              [key]: { ...page, content: e.target.value },
                            })
                          }
                          rows={15}
                          className="font-mono text-sm"
                        />
                      </div>
                      <Button onClick={() => handleSave(page.title)} disabled={saving}>
                        <Save className="w-4 h-4 mr-2" />
                        {saving ? "Saving..." : `Save ${page.title}`}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* SEO Settings */}
            <TabsContent value="seo">
              <div className="space-y-6">
                {Object.entries(seoSettings).map(([page, settings]) => (
                  <Card key={page}>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Globe className="w-5 h-5 mr-2" />
                        {page.charAt(0).toUpperCase() + page.slice(1)} Page SEO
                      </CardTitle>
                      <CardDescription>Optimize SEO settings for the {page} page</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-4">
                          <div>
                            <Label htmlFor={`${page}-title`}>Meta Title</Label>
                            <Input
                              id={`${page}-title`}
                              value={settings.title}
                              onChange={(e) =>
                                setSeoSettings({
                                  ...seoSettings,
                                  [page]: { ...settings, title: e.target.value },
                                })
                              }
                              placeholder="SEO optimized title"
                            />
                            <p className="text-xs text-gray-500 mt-1">Length: {settings.title.length}/60 characters</p>
                          </div>
                          <div>
                            <Label htmlFor={`${page}-description`}>Meta Description</Label>
                            <Textarea
                              id={`${page}-description`}
                              value={settings.description}
                              onChange={(e) =>
                                setSeoSettings({
                                  ...seoSettings,
                                  [page]: { ...settings, description: e.target.value },
                                })
                              }
                              placeholder="Brief description for search engines"
                              rows={3}
                            />
                            <p className="text-xs text-gray-500 mt-1">
                              Length: {settings.description.length}/160 characters
                            </p>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <div>
                            <Label htmlFor={`${page}-og-image`}>Open Graph Image</Label>
                            <Input
                              id={`${page}-og-image`}
                              value={settings.ogImage}
                              onChange={(e) =>
                                setSeoSettings({
                                  ...seoSettings,
                                  [page]: { ...settings, ogImage: e.target.value },
                                })
                              }
                              placeholder="/og-image.jpg"
                            />
                          </div>
                          <div>
                            <Label>SEO Keywords</Label>
                            <div className="flex flex-wrap gap-2 mt-2">
                              {settings.keywords.map((keyword, index) => (
                                <Badge
                                  key={index}
                                  variant="secondary"
                                  className="cursor-pointer"
                                  onClick={() => removeKeyword(page, keyword)}
                                >
                                  {keyword} ×
                                </Badge>
                              ))}
                            </div>
                            <Input
                              placeholder="Add keyword and press Enter"
                              className="mt-2"
                              onKeyPress={(e) => {
                                if (e.key === "Enter") {
                                  const value = (e.target as HTMLInputElement).value.trim()
                                  if (value) {
                                    addKeyword(page, value)
                                    ;(e.target as HTMLInputElement).value = ""
                                  }
                                }
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                <Button onClick={() => handleSave("SEO Settings")} disabled={saving} className="w-full">
                  <Save className="w-4 h-4 mr-2" />
                  {saving ? "Saving..." : "Save All SEO Settings"}
                </Button>
              </div>
            </TabsContent>

            {/* Integrations */}
            <TabsContent value="integrations">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Link className="w-5 h-5 mr-2" />
                      Calendly Integration
                    </CardTitle>
                    <CardDescription>Manage booking link for "Book a Call" buttons</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div>
                      <Label htmlFor="calendly-link">Calendly Booking URL</Label>
                      <Input
                        id="calendly-link"
                        value={integrationSettings.calendly}
                        onChange={(e) =>
                          setIntegrationSettings({
                            ...integrationSettings,
                            calendly: e.target.value,
                          })
                        }
                        placeholder="https://calendly.com/your-username/meeting"
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        This URL will be used for all "Book a Call" buttons across the website
                      </p>
                    </div>
                    <Button onClick={() => handleSave("Calendly Integration")} disabled={saving} className="mt-4">
                      <Save className="w-4 h-4 mr-2" />
                      {saving ? "Saving..." : "Save Calendly Settings"}
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Social Media Links</CardTitle>
                    <CardDescription>Update social media profile URLs</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="linkedin">LinkedIn</Label>
                        <Input
                          id="linkedin"
                          value={integrationSettings.socialMedia.linkedin}
                          onChange={(e) =>
                            setIntegrationSettings({
                              ...integrationSettings,
                              socialMedia: {
                                ...integrationSettings.socialMedia,
                                linkedin: e.target.value,
                              },
                            })
                          }
                          placeholder="https://linkedin.com/company/your-company"
                        />
                      </div>
                      <div>
                        <Label htmlFor="twitter">Twitter</Label>
                        <Input
                          id="twitter"
                          value={integrationSettings.socialMedia.twitter}
                          onChange={(e) =>
                            setIntegrationSettings({
                              ...integrationSettings,
                              socialMedia: {
                                ...integrationSettings.socialMedia,
                                twitter: e.target.value,
                              },
                            })
                          }
                          placeholder="https://twitter.com/your-handle"
                        />
                      </div>
                      <div>
                        <Label htmlFor="facebook">Facebook</Label>
                        <Input
                          id="facebook"
                          value={integrationSettings.socialMedia.facebook}
                          onChange={(e) =>
                            setIntegrationSettings({
                              ...integrationSettings,
                              socialMedia: {
                                ...integrationSettings.socialMedia,
                                facebook: e.target.value,
                              },
                            })
                          }
                          placeholder="https://facebook.com/your-page"
                        />
                      </div>
                      <div>
                        <Label htmlFor="instagram">Instagram</Label>
                        <Input
                          id="instagram"
                          value={integrationSettings.socialMedia.instagram}
                          onChange={(e) =>
                            setIntegrationSettings({
                              ...integrationSettings,
                              socialMedia: {
                                ...integrationSettings.socialMedia,
                                instagram: e.target.value,
                              },
                            })
                          }
                          placeholder="https://instagram.com/your-handle"
                        />
                      </div>
                    </div>
                    <Button onClick={() => handleSave("Social Media Links")} disabled={saving}>
                      <Save className="w-4 h-4 mr-2" />
                      {saving ? "Saving..." : "Save Social Media Links"}
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Analytics */}
            <TabsContent value="analytics">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Settings className="w-5 h-5 mr-2" />
                    Analytics & Tracking
                  </CardTitle>
                  <CardDescription>Configure analytics and tracking codes</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="google-analytics">Google Analytics ID</Label>
                    <Input
                      id="google-analytics"
                      value={integrationSettings.analytics.googleAnalytics}
                      onChange={(e) =>
                        setIntegrationSettings({
                          ...integrationSettings,
                          analytics: {
                            ...integrationSettings.analytics,
                            googleAnalytics: e.target.value,
                          },
                        })
                      }
                      placeholder="G-XXXXXXXXXX"
                    />
                  </div>
                  <div>
                    <Label htmlFor="facebook-pixel">Facebook Pixel ID</Label>
                    <Input
                      id="facebook-pixel"
                      value={integrationSettings.analytics.facebookPixel}
                      onChange={(e) =>
                        setIntegrationSettings({
                          ...integrationSettings,
                          analytics: {
                            ...integrationSettings.analytics,
                            facebookPixel: e.target.value,
                          },
                        })
                      }
                      placeholder="123456789"
                    />
                  </div>
                  <div>
                    <Label htmlFor="linkedin-insight">LinkedIn Insight Tag</Label>
                    <Input
                      id="linkedin-insight"
                      value={integrationSettings.analytics.linkedinInsight}
                      onChange={(e) =>
                        setIntegrationSettings({
                          ...integrationSettings,
                          analytics: {
                            ...integrationSettings.analytics,
                            linkedinInsight: e.target.value,
                          },
                        })
                      }
                      placeholder="987654321"
                    />
                  </div>
                  <Button onClick={() => handleSave("Analytics Settings")} disabled={saving}>
                    <Save className="w-4 h-4 mr-2" />
                    {saving ? "Saving..." : "Save Analytics Settings"}
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

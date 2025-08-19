"use client"

import { useState } from "react"
import AuthGuard from "@/components/admin/auth-guard"
import AdminLayout from "@/components/admin/admin-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { TrendingUp, Search, Globe, Target, BarChart3, CheckCircle, AlertCircle } from "lucide-react"

export default function SEOSettings() {
  const [seoData, setSeoData] = useState({
    globalSettings: {
      siteName: "Varshait Infotech",
      defaultTitle: "Varshait Infotech - Leading Technology Solutions",
      defaultDescription:
        "Transform your business with expert web development, mobile apps, digital marketing, and video editing services.",
      defaultKeywords: ["web development", "mobile apps", "digital marketing", "technology solutions"],
      canonicalUrl: "https://varshaitinfotech.com",
      robotsTxt: `User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/

Sitemap: https://varshaitinfotech.com/sitemap.xml`,
    },
    seoScore: {
      overall: 85,
      technical: 90,
      content: 80,
      performance: 88,
      accessibility: 82,
    },
    recommendations: [
      { type: "success", message: "All pages have meta descriptions" },
      { type: "warning", message: "Some images missing alt text" },
      { type: "success", message: "Site has SSL certificate" },
      { type: "warning", message: "Page load speed could be improved" },
      { type: "success", message: "Mobile-friendly design implemented" },
    ],
  })

  const handleSave = async () => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    alert("SEO settings saved successfully!")
  }

  return (
    <AuthGuard>
      <AdminLayout>
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">SEO Settings</h1>
            <p className="text-gray-600 mt-2">Optimize your website for search engines and improve rankings.</p>
          </div>

          {/* SEO Score Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Overall Score</p>
                    <p className="text-2xl font-bold text-green-600">{seoData.seoScore.overall}</p>
                  </div>
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <Progress value={seoData.seoScore.overall} className="mt-2" />
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Technical</p>
                    <p className="text-2xl font-bold text-blue-600">{seoData.seoScore.technical}</p>
                  </div>
                  <Globe className="w-8 h-8 text-blue-600" />
                </div>
                <Progress value={seoData.seoScore.technical} className="mt-2" />
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Content</p>
                    <p className="text-2xl font-bold text-purple-600">{seoData.seoScore.content}</p>
                  </div>
                  <Search className="w-8 h-8 text-purple-600" />
                </div>
                <Progress value={seoData.seoScore.content} className="mt-2" />
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Performance</p>
                    <p className="text-2xl font-bold text-orange-600">{seoData.seoScore.performance}</p>
                  </div>
                  <BarChart3 className="w-8 h-8 text-orange-600" />
                </div>
                <Progress value={seoData.seoScore.performance} className="mt-2" />
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Accessibility</p>
                    <p className="text-2xl font-bold text-teal-600">{seoData.seoScore.accessibility}</p>
                  </div>
                  <Target className="w-8 h-8 text-teal-600" />
                </div>
                <Progress value={seoData.seoScore.accessibility} className="mt-2" />
              </CardContent>
            </Card>
          </div>

          {/* Global SEO Settings */}
          <Card>
            <CardHeader>
              <CardTitle>Global SEO Settings</CardTitle>
              <CardDescription>Configure default SEO settings for your website</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="site-name">Site Name</Label>
                  <Input
                    id="site-name"
                    value={seoData.globalSettings.siteName}
                    onChange={(e) =>
                      setSeoData({
                        ...seoData,
                        globalSettings: { ...seoData.globalSettings, siteName: e.target.value },
                      })
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="canonical-url">Canonical URL</Label>
                  <Input
                    id="canonical-url"
                    value={seoData.globalSettings.canonicalUrl}
                    onChange={(e) =>
                      setSeoData({
                        ...seoData,
                        globalSettings: { ...seoData.globalSettings, canonicalUrl: e.target.value },
                      })
                    }
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="default-title">Default Title Template</Label>
                <Input
                  id="default-title"
                  value={seoData.globalSettings.defaultTitle}
                  onChange={(e) =>
                    setSeoData({
                      ...seoData,
                      globalSettings: { ...seoData.globalSettings, defaultTitle: e.target.value },
                    })
                  }
                />
              </div>
              <div>
                <Label htmlFor="default-description">Default Meta Description</Label>
                <Textarea
                  id="default-description"
                  value={seoData.globalSettings.defaultDescription}
                  onChange={(e) =>
                    setSeoData({
                      ...seoData,
                      globalSettings: { ...seoData.globalSettings, defaultDescription: e.target.value },
                    })
                  }
                  rows={3}
                />
              </div>
              <div>
                <Label>Default Keywords</Label>
                <div className="flex flex-wrap gap-2 mt-2">
                  {seoData.globalSettings.defaultKeywords.map((keyword, index) => (
                    <Badge key={index} variant="secondary">
                      {keyword}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <Label htmlFor="robots-txt">Robots.txt Content</Label>
                <Textarea
                  id="robots-txt"
                  value={seoData.globalSettings.robotsTxt}
                  onChange={(e) =>
                    setSeoData({
                      ...seoData,
                      globalSettings: { ...seoData.globalSettings, robotsTxt: e.target.value },
                    })
                  }
                  rows={8}
                  className="font-mono text-sm"
                />
              </div>
            </CardContent>
          </Card>

          {/* SEO Recommendations */}
          <Card>
            <CardHeader>
              <CardTitle>SEO Recommendations</CardTitle>
              <CardDescription>Actionable insights to improve your SEO performance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {seoData.recommendations.map((rec, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50">
                    {rec.type === "success" ? (
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    ) : (
                      <AlertCircle className="w-5 h-5 text-orange-600" />
                    )}
                    <span className="text-sm">{rec.message}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Button onClick={handleSave} className="w-full">
            Save SEO Settings
          </Button>
        </div>
      </AdminLayout>
    </AuthGuard>
  )
}

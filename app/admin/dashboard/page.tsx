"use client"

import AuthGuard from "@/components/admin/auth-guard"
import AdminLayout from "@/components/admin/admin-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, MessageSquare, FileText, Eye, TrendingUp, Calendar } from "lucide-react"
import { useRouter } from "next/navigation"

export default function AdminDashboard() {
  const router = useRouter()

  const stats = [
    {
      title: "Total Leads",
      value: "127",
      description: "+12% from last month",
      icon: Users,
      color: "text-blue-600",
    },
    {
      title: "Contact Forms",
      value: "23",
      description: "5 pending responses",
      icon: MessageSquare,
      color: "text-green-600",
    },
    {
      title: "Blog Posts",
      value: "8",
      description: "2 drafts saved",
      icon: FileText,
      color: "text-purple-600",
    },
    {
      title: "Page Views",
      value: "2,847",
      description: "+18% this week",
      icon: Eye,
      color: "text-orange-600",
    },
    {
      title: "Conversion Rate",
      value: "4.2%",
      description: "+0.8% improvement",
      icon: TrendingUp,
      color: "text-emerald-600",
    },
    {
      title: "Appointments",
      value: "15",
      description: "This month",
      icon: Calendar,
      color: "text-red-600",
    },
  ]

  const recentActivity = [
    { action: "New contact form submission", time: "2 hours ago", type: "lead" },
    { action: "Blog post 'AI in Business' published", time: "1 day ago", type: "content" },
    { action: "Service 'Video Editing' updated", time: "2 days ago", type: "content" },
    { action: "New appointment booked", time: "3 days ago", type: "appointment" },
    { action: "Privacy Policy updated", time: "1 week ago", type: "legal" },
  ]

  const handleQuickAction = (action: string) => {
    switch (action) {
      case "blog":
        router.push("/admin/blog")
        break
      case "leads":
        router.push("/admin/leads")
        break
      case "content":
        router.push("/admin/content")
        break
      case "seo":
        router.push("/admin/seo")
        break
    }
  }

  return (
    <AuthGuard>
      <AdminLayout>
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600 mt-2">Welcome back! Here's what's happening with your website.</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">{stat.title}</CardTitle>
                  <stat.icon className={`h-4 w-4 ${stat.color}`} />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <p className="text-xs text-gray-500 mt-1">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Recent Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest updates and changes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div
                        className={`w-2 h-2 rounded-full ${
                          activity.type === "lead"
                            ? "bg-blue-500"
                            : activity.type === "content"
                              ? "bg-green-500"
                              : activity.type === "appointment"
                                ? "bg-purple-500"
                                : "bg-gray-500"
                        }`}
                      />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                        <p className="text-xs text-gray-500">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Common management tasks</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => handleQuickAction("blog")}
                    className="p-3 text-left border rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="font-medium text-sm">Add Blog Post</div>
                    <div className="text-xs text-gray-500">Create new content</div>
                  </button>
                  <button
                    onClick={() => handleQuickAction("leads")}
                    className="p-3 text-left border rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="font-medium text-sm">View Leads</div>
                    <div className="text-xs text-gray-500">Check submissions</div>
                  </button>
                  <button
                    onClick={() => handleQuickAction("content")}
                    className="p-3 text-left border rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="font-medium text-sm">Edit Services</div>
                    <div className="text-xs text-gray-500">Update offerings</div>
                  </button>
                  <button
                    onClick={() => handleQuickAction("seo")}
                    className="p-3 text-left border rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="font-medium text-sm">SEO Settings</div>
                    <div className="text-xs text-gray-500">Optimize pages</div>
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </AdminLayout>
    </AuthGuard>
  )
}

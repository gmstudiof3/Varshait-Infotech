"use client"

import { useState } from "react"
import AuthGuard from "@/components/admin/auth-guard"
import AdminLayout from "@/components/admin/admin-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  Search,
  Filter,
  Download,
  Eye,
  MoreHorizontal,
  Mail,
  Phone,
  Calendar,
  User,
  Building,
  MessageSquare,
} from "lucide-react"

interface Lead {
  id: number
  name: string
  email: string
  phone: string
  company: string
  message: string
  service: string
  status: "pending" | "contacted" | "qualified" | "converted" | "closed"
  source: "contact-form" | "newsletter" | "consultation"
  submittedAt: string
  lastContactedAt?: string
  notes: string
  priority: "low" | "medium" | "high"
}

export default function LeadManagement() {
  const [leads, setLeads] = useState<Lead[]>([
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@example.com",
      phone: "+1 (555) 123-4567",
      company: "Tech Solutions Inc",
      message: "Interested in web development services for our new product launch.",
      service: "Web Development",
      status: "pending",
      source: "contact-form",
      submittedAt: "2024-01-15T10:30:00Z",
      notes: "",
      priority: "high",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      email: "sarah.j@startup.com",
      phone: "+1 (555) 987-6543",
      company: "StartupCo",
      message: "Looking for mobile app development and digital marketing services.",
      service: "Mobile App Development",
      status: "contacted",
      source: "contact-form",
      submittedAt: "2024-01-14T14:20:00Z",
      lastContactedAt: "2024-01-15T09:00:00Z",
      notes: "Initial call scheduled for next week. Very interested in our services.",
      priority: "high",
    },
    {
      id: 3,
      name: "Michael Chen",
      email: "m.chen@business.com",
      phone: "+1 (555) 456-7890",
      company: "Business Corp",
      message: "Need consultation on digital transformation strategy.",
      service: "Digital Marketing",
      status: "qualified",
      source: "consultation",
      submittedAt: "2024-01-13T16:45:00Z",
      lastContactedAt: "2024-01-14T11:30:00Z",
      notes: "Budget confirmed. Ready to proceed with proposal.",
      priority: "high",
    },
    {
      id: 4,
      name: "Emily Davis",
      email: "emily.davis@company.org",
      phone: "+1 (555) 321-0987",
      company: "Non-Profit Org",
      message: "Interested in website redesign for our organization.",
      service: "Web Development",
      status: "pending",
      source: "contact-form",
      submittedAt: "2024-01-12T11:15:00Z",
      notes: "",
      priority: "medium",
    },
    {
      id: 5,
      name: "David Wilson",
      email: "d.wilson@retail.com",
      phone: "+1 (555) 654-3210",
      company: "Retail Chain",
      message: "Looking for e-commerce platform development.",
      service: "Web Development",
      status: "converted",
      source: "contact-form",
      submittedAt: "2024-01-10T09:30:00Z",
      lastContactedAt: "2024-01-11T14:00:00Z",
      notes: "Project started. Contract signed for $25,000.",
      priority: "high",
    },
  ])

  const [selectedLead, setSelectedLead] = useState<Lead | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState<string>("all")
  const [serviceFilter, setServiceFilter] = useState<string>("all")

  const statusColors = {
    pending: "bg-yellow-100 text-yellow-800",
    contacted: "bg-blue-100 text-blue-800",
    qualified: "bg-purple-100 text-purple-800",
    converted: "bg-green-100 text-green-800",
    closed: "bg-gray-100 text-gray-800",
  }

  const priorityColors = {
    low: "bg-gray-100 text-gray-800",
    medium: "bg-orange-100 text-orange-800",
    high: "bg-red-100 text-red-800",
  }

  const filteredLeads = leads.filter((lead) => {
    const matchesSearch =
      lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.company.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = statusFilter === "all" || lead.status === statusFilter
    const matchesService = serviceFilter === "all" || lead.service === serviceFilter

    return matchesSearch && matchesStatus && matchesService
  })

  const handleViewLead = (lead: Lead) => {
    setSelectedLead(lead)
    setIsDialogOpen(true)
  }

  const handleUpdateStatus = (leadId: number, newStatus: Lead["status"]) => {
    setLeads(
      leads.map((lead) =>
        lead.id === leadId
          ? {
              ...lead,
              status: newStatus,
              lastContactedAt: newStatus === "contacted" ? new Date().toISOString() : lead.lastContactedAt,
            }
          : lead,
      ),
    )
  }

  const handleUpdateNotes = (leadId: number, notes: string) => {
    setLeads(leads.map((lead) => (lead.id === leadId ? { ...lead, notes } : lead)))
  }

  const exportToCSV = () => {
    const headers = ["Name", "Email", "Phone", "Company", "Service", "Status", "Priority", "Submitted At", "Message"]
    const csvContent = [
      headers.join(","),
      ...filteredLeads.map((lead) =>
        [
          lead.name,
          lead.email,
          lead.phone,
          lead.company,
          lead.service,
          lead.status,
          lead.priority,
          new Date(lead.submittedAt).toLocaleDateString(),
          `"${lead.message.replace(/"/g, '""')}"`,
        ].join(","),
      ),
    ].join("\n")

    const blob = new Blob([csvContent], { type: "text/csv" })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `leads-${new Date().toISOString().split("T")[0]}.csv`
    a.click()
    window.URL.revokeObjectURL(url)
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  const getStatusStats = () => {
    const stats = leads.reduce(
      (acc, lead) => {
        acc[lead.status] = (acc[lead.status] || 0) + 1
        return acc
      },
      {} as Record<string, number>,
    )
    return stats
  }

  const stats = getStatusStats()

  return (
    <AuthGuard>
      <AdminLayout>
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Lead Management</h1>
              <p className="text-gray-600 mt-2">Track and manage all contact form submissions and leads.</p>
            </div>
            <Button onClick={exportToCSV}>
              <Download className="w-4 h-4 mr-2" />
              Export CSV
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {Object.entries(stats).map(([status, count]) => (
              <Card key={status}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600 capitalize">{status}</p>
                      <p className="text-2xl font-bold text-gray-900">{count}</p>
                    </div>
                    <Badge className={statusColors[status as keyof typeof statusColors]}>{status}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Filters */}
          <Card>
            <CardHeader>
              <CardTitle>Filters</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <Label htmlFor="search">Search</Label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      id="search"
                      placeholder="Search leads..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="status-filter">Status</Label>
                  <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Statuses</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="contacted">Contacted</SelectItem>
                      <SelectItem value="qualified">Qualified</SelectItem>
                      <SelectItem value="converted">Converted</SelectItem>
                      <SelectItem value="closed">Closed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="service-filter">Service</Label>
                  <Select value={serviceFilter} onValueChange={setServiceFilter}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Services</SelectItem>
                      <SelectItem value="Web Development">Web Development</SelectItem>
                      <SelectItem value="Mobile App Development">Mobile App Development</SelectItem>
                      <SelectItem value="Digital Marketing">Digital Marketing</SelectItem>
                      <SelectItem value="Video Editing">Video Editing</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-end">
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSearchTerm("")
                      setStatusFilter("all")
                      setServiceFilter("all")
                    }}
                  >
                    <Filter className="w-4 h-4 mr-2" />
                    Clear Filters
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Leads Table */}
          <Card>
            <CardHeader>
              <CardTitle>Leads ({filteredLeads.length})</CardTitle>
              <CardDescription>All contact form submissions and inquiries</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Contact</TableHead>
                      <TableHead>Company</TableHead>
                      <TableHead>Service</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Priority</TableHead>
                      <TableHead>Submitted</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredLeads.map((lead) => (
                      <TableRow key={lead.id}>
                        <TableCell>
                          <div>
                            <div className="font-medium">{lead.name}</div>
                            <div className="text-sm text-gray-500">{lead.email}</div>
                            <div className="text-sm text-gray-500">{lead.phone}</div>
                          </div>
                        </TableCell>
                        <TableCell>{lead.company}</TableCell>
                        <TableCell>
                          <Badge variant="outline">{lead.service}</Badge>
                        </TableCell>
                        <TableCell>
                          <Badge className={statusColors[lead.status]}>{lead.status}</Badge>
                        </TableCell>
                        <TableCell>
                          <Badge className={priorityColors[lead.priority]}>{lead.priority}</Badge>
                        </TableCell>
                        <TableCell className="text-sm">{formatDate(lead.submittedAt)}</TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <Button variant="outline" size="sm" onClick={() => handleViewLead(lead)}>
                              <Eye className="w-4 h-4" />
                            </Button>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="outline" size="sm">
                                  <MoreHorizontal className="w-4 h-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent>
                                <DropdownMenuItem onClick={() => handleUpdateStatus(lead.id, "contacted")}>
                                  Mark as Contacted
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => handleUpdateStatus(lead.id, "qualified")}>
                                  Mark as Qualified
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => handleUpdateStatus(lead.id, "converted")}>
                                  Mark as Converted
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => handleUpdateStatus(lead.id, "closed")}>
                                  Mark as Closed
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          {/* Lead Detail Dialog */}
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Lead Details</DialogTitle>
                <DialogDescription>View and manage lead information</DialogDescription>
              </DialogHeader>

              {selectedLead && (
                <div className="space-y-6">
                  {/* Contact Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center">
                          <User className="w-5 h-5 mr-2" />
                          Contact Information
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div>
                          <Label className="text-sm font-medium text-gray-600">Name</Label>
                          <p className="text-sm">{selectedLead.name}</p>
                        </div>
                        <div>
                          <Label className="text-sm font-medium text-gray-600">Email</Label>
                          <p className="text-sm flex items-center">
                            <Mail className="w-4 h-4 mr-1" />
                            {selectedLead.email}
                          </p>
                        </div>
                        <div>
                          <Label className="text-sm font-medium text-gray-600">Phone</Label>
                          <p className="text-sm flex items-center">
                            <Phone className="w-4 h-4 mr-1" />
                            {selectedLead.phone}
                          </p>
                        </div>
                        <div>
                          <Label className="text-sm font-medium text-gray-600">Company</Label>
                          <p className="text-sm flex items-center">
                            <Building className="w-4 h-4 mr-1" />
                            {selectedLead.company}
                          </p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Lead Information</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div>
                          <Label className="text-sm font-medium text-gray-600">Service Interest</Label>
                          <Badge variant="outline">{selectedLead.service}</Badge>
                        </div>
                        <div>
                          <Label className="text-sm font-medium text-gray-600">Status</Label>
                          <Badge className={statusColors[selectedLead.status]}>{selectedLead.status}</Badge>
                        </div>
                        <div>
                          <Label className="text-sm font-medium text-gray-600">Priority</Label>
                          <Badge className={priorityColors[selectedLead.priority]}>{selectedLead.priority}</Badge>
                        </div>
                        <div>
                          <Label className="text-sm font-medium text-gray-600">Source</Label>
                          <p className="text-sm capitalize">{selectedLead.source.replace("-", " ")}</p>
                        </div>
                        <div>
                          <Label className="text-sm font-medium text-gray-600">Submitted</Label>
                          <p className="text-sm flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {formatDate(selectedLead.submittedAt)}
                          </p>
                        </div>
                        {selectedLead.lastContactedAt && (
                          <div>
                            <Label className="text-sm font-medium text-gray-600">Last Contacted</Label>
                            <p className="text-sm">{formatDate(selectedLead.lastContactedAt)}</p>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </div>

                  {/* Message */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center">
                        <MessageSquare className="w-5 h-5 mr-2" />
                        Message
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-700 whitespace-pre-wrap">{selectedLead.message}</p>
                    </CardContent>
                  </Card>

                  {/* Notes */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Internal Notes</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Textarea
                        value={selectedLead.notes}
                        onChange={(e) => {
                          setSelectedLead({ ...selectedLead, notes: e.target.value })
                          handleUpdateNotes(selectedLead.id, e.target.value)
                        }}
                        placeholder="Add internal notes about this lead..."
                        rows={4}
                      />
                    </CardContent>
                  </Card>

                  {/* Actions */}
                  <div className="flex justify-end space-x-2 pt-4 border-t">
                    <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                      Close
                    </Button>
                    <Button
                      onClick={() => {
                        window.location.href = `mailto:${selectedLead.email}?subject=Re: Your inquiry about ${selectedLead.service}`
                      }}
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Send Email
                    </Button>
                  </div>
                </div>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </AdminLayout>
    </AuthGuard>
  )
}

"use client"

import { useState, useEffect } from "react"
import AuthGuard from "@/components/admin/auth-guard"
import AdminLayout from "@/components/admin/admin-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Edit, Trash2, Save, Upload, Eye, Calendar, User } from "lucide-react"
import { dataManager, useWebsiteData } from "@/lib/data-manager"
import type { BlogPost } from "@/lib/data-manager"

export default function BlogManagement() {
  const websiteData = useWebsiteData()
  const [posts, setPosts] = useState<BlogPost[]>(websiteData.blog)
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    setPosts(websiteData.blog)
  }, [websiteData.blog])

  const createNewPost = (): BlogPost => ({
    id: Date.now().toString(),
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    image: "",
    author: "Varshait Team",
    date: new Date().toISOString().split("T")[0],
    tags: [],
    published: false,
    seo: {
      title: "",
      description: "",
      keywords: "",
    },
  })

  const handleNewPost = () => {
    setEditingPost(createNewPost())
    setIsDialogOpen(true)
  }

  const handleEditPost = (post: BlogPost) => {
    setEditingPost({ ...post })
    setIsDialogOpen(true)
  }

  const handleSavePost = async () => {
    if (!editingPost) return

    setSaving(true)

    try {
      // Generate slug from title if empty
      if (!editingPost.slug && editingPost.title) {
        editingPost.slug = editingPost.title
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)/g, "")
      }

      const existingPost = dataManager.getBlogPosts(false).find((p) => p.id === editingPost.id)
      if (existingPost) {
        dataManager.updateBlogPost(editingPost.id, editingPost)
      } else {
        dataManager.addBlogPost(editingPost)
      }

      setSaving(false)
      setIsDialogOpen(false)
      setEditingPost(null)
    } catch (error) {
      console.error("Error saving blog post:", error)
      alert("Error saving blog post. Please try again.")
      setSaving(false)
    }
  }

  const handleDeletePost = (id: string) => {
    if (confirm("Are you sure you want to delete this post?")) {
      dataManager.deleteBlogPost(id)
    }
  }

  const addTag = (tag: string) => {
    if (!editingPost || !tag || editingPost.tags.includes(tag)) return
    setEditingPost({
      ...editingPost,
      tags: [...editingPost.tags, tag],
    })
  }

  const removeTag = (tagToRemove: string) => {
    if (!editingPost) return
    setEditingPost({
      ...editingPost,
      tags: editingPost.tags.filter((tag) => tag !== tagToRemove),
    })
  }

  const addKeyword = (keyword: string) => {
    if (!editingPost || !keyword) return
    const currentKeywords = editingPost.seo.keywords
      .split(",")
      .map((k) => k.trim())
      .filter((k) => k)
    if (currentKeywords.includes(keyword)) return

    setEditingPost({
      ...editingPost,
      seo: {
        ...editingPost.seo,
        keywords: [...currentKeywords, keyword].join(", "),
      },
    })
  }

  return (
    <AuthGuard>
      <AdminLayout>
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Blog Management</h1>
              <p className="text-gray-600 mt-2">Create and manage blog posts with SEO optimization.</p>
            </div>
            <Button onClick={handleNewPost}>
              <Plus className="w-4 h-4 mr-2" />
              New Post
            </Button>
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg line-clamp-2">{post.title || "Untitled Post"}</CardTitle>
                      <CardDescription className="mt-2 line-clamp-2">{post.excerpt}</CardDescription>
                    </div>
                    <Badge variant={post.published ? "default" : "secondary"}>
                      {post.published ? "published" : "draft"}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {post.image && (
                      <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                        <img
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}

                    <div className="flex items-center text-sm text-gray-500 space-x-4">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                    </div>

                    {post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1">
                        {post.tags.slice(0, 3).map((tag, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                        {post.tags.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{post.tags.length - 3}
                          </Badge>
                        )}
                      </div>
                    )}

                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm" onClick={() => handleEditPost(post)}>
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="sm" onClick={() => window.open(`/blog/${post.slug}`, "_blank")}>
                          <Eye className="w-4 h-4" />
                        </Button>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDeletePost(post.id)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Edit/Create Post Dialog */}
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>
                  {editingPost?.id && posts.find((p) => p.id === editingPost.id) ? "Edit Post" : "Create New Post"}
                </DialogTitle>
                <DialogDescription>Fill in the details below to create or update your blog post.</DialogDescription>
              </DialogHeader>

              {editingPost && (
                <div className="space-y-6">
                  {/* Basic Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="title">Title *</Label>
                        <Input
                          id="title"
                          value={editingPost.title}
                          onChange={(e) => setEditingPost({ ...editingPost, title: e.target.value })}
                          placeholder="Enter post title"
                        />
                      </div>
                      <div>
                        <Label htmlFor="slug">URL Slug</Label>
                        <Input
                          id="slug"
                          value={editingPost.slug}
                          onChange={(e) => setEditingPost({ ...editingPost, slug: e.target.value })}
                          placeholder="url-friendly-slug"
                        />
                      </div>
                      <div>
                        <Label htmlFor="excerpt">Excerpt</Label>
                        <Textarea
                          id="excerpt"
                          value={editingPost.excerpt}
                          onChange={(e) => setEditingPost({ ...editingPost, excerpt: e.target.value })}
                          placeholder="Brief description of the post"
                          rows={3}
                        />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="status">Status</Label>
                        <Select
                          value={editingPost.published ? "published" : "draft"}
                          onValueChange={(value) =>
                            setEditingPost({ ...editingPost, published: value === "published" })
                          }
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="draft">Draft</SelectItem>
                            <SelectItem value="published">Published</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="author">Author</Label>
                        <Input
                          id="author"
                          value={editingPost.author}
                          onChange={(e) => setEditingPost({ ...editingPost, author: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="publishDate">Publish Date</Label>
                        <Input
                          id="publishDate"
                          type="date"
                          value={editingPost.date}
                          onChange={(e) => setEditingPost({ ...editingPost, date: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="featuredImage">Featured Image URL</Label>
                        <Input
                          id="featuredImage"
                          value={editingPost.image}
                          onChange={(e) => setEditingPost({ ...editingPost, image: e.target.value })}
                          placeholder="https://example.com/image.jpg"
                        />
                        <Button variant="outline" className="w-full mt-2 bg-transparent">
                          <Upload className="w-4 h-4 mr-2" />
                          Upload Image
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <Label htmlFor="content">Content</Label>
                    <Textarea
                      id="content"
                      value={editingPost.content}
                      onChange={(e) => setEditingPost({ ...editingPost, content: e.target.value })}
                      placeholder="Write your blog post content here..."
                      rows={10}
                      className="font-mono"
                    />
                  </div>

                  {/* Tags */}
                  <div>
                    <Label>Tags</Label>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {editingPost.tags.map((tag, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="cursor-pointer"
                          onClick={() => removeTag(tag)}
                        >
                          {tag} ×
                        </Badge>
                      ))}
                    </div>
                    <Input
                      placeholder="Add tag and press Enter"
                      className="mt-2"
                      onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          const value = (e.target as HTMLInputElement).value.trim()
                          if (value) {
                            addTag(value)
                            ;(e.target as HTMLInputElement).value = ""
                          }
                        }
                      }}
                    />
                  </div>

                  {/* SEO Settings */}
                  <div className="border-t pt-6">
                    <h3 className="text-lg font-semibold mb-4">SEO Settings</h3>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="metaTitle">Meta Title</Label>
                        <Input
                          id="metaTitle"
                          value={editingPost.seo.title}
                          onChange={(e) =>
                            setEditingPost({
                              ...editingPost,
                              seo: { ...editingPost.seo, title: e.target.value },
                            })
                          }
                          placeholder="SEO optimized title"
                        />
                      </div>
                      <div>
                        <Label htmlFor="metaDescription">Meta Description</Label>
                        <Textarea
                          id="metaDescription"
                          value={editingPost.seo.description}
                          onChange={(e) =>
                            setEditingPost({
                              ...editingPost,
                              seo: { ...editingPost.seo, description: e.target.value },
                            })
                          }
                          placeholder="Brief description for search engines"
                          rows={3}
                        />
                      </div>
                      <div>
                        <Label htmlFor="seoKeywords">SEO Keywords (comma-separated)</Label>
                        <Input
                          id="seoKeywords"
                          value={editingPost.seo.keywords}
                          onChange={(e) =>
                            setEditingPost({
                              ...editingPost,
                              seo: { ...editingPost.seo, keywords: e.target.value },
                            })
                          }
                          placeholder="keyword1, keyword2, keyword3"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Save Button */}
                  <div className="flex justify-end space-x-2 pt-4 border-t">
                    <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                      Cancel
                    </Button>
                    <Button onClick={handleSavePost} disabled={saving}>
                      <Save className="w-4 h-4 mr-2" />
                      {saving ? "Saving..." : "Save Post"}
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

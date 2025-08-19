"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useWebsiteData } from "@/lib/data-manager"

export default function BlogPage() {
  const data = useWebsiteData()
  const allBlogPosts = data.blog.filter((post) => post.published)

  const [postsPerPage] = useState(6)
  const [currentPage, setCurrentPage] = useState(1)

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = allBlogPosts.slice(indexOfFirstPost, indexOfLastPost)
  const hasMorePosts = indexOfLastPost < allBlogPosts.length

  const loadMorePosts = () => {
    setCurrentPage((prev) => prev + 1)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Varshait Infotech Blog</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Insights, trends, and expertise in technology, web development, and digital innovation.
            </p>
          </div>
        </div>
      </div>

      {/* Blog Posts */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {allBlogPosts.length === 0 ? (
          <div className="text-center py-16">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">No blog posts yet</h3>
            <p className="text-gray-600">Check back soon for the latest insights and updates!</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentPosts.map((post) => (
                <Card key={post.id} className="hover:shadow-lg transition-shadow bg-white">
                  <div className="aspect-video bg-gray-200 rounded-t-lg overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <User className="w-4 h-4 mr-1" />
                      <span className="mr-4">{post.author}</span>
                      <Calendar className="w-4 h-4 mr-1" />
                      <span className="mr-4">{new Date(post.date).toLocaleDateString()}</span>
                      <span>5 min read</span>
                    </div>
                    <CardTitle className="text-xl hover:text-[#00AEEF] transition-colors">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </CardTitle>
                    <CardDescription className="text-gray-600 line-clamp-3">{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 2).map((tag, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <Button variant="ghost" size="sm" asChild>
                        <Link href={`/blog/${post.slug}`}>
                          Read More <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More Button */}
            {hasMorePosts && (
              <div className="text-center mt-12">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={loadMorePosts}
                  className="hover:bg-[#00AEEF] hover:text-white transition-colors bg-transparent"
                >
                  Load More Posts ({allBlogPosts.length - indexOfLastPost} remaining)
                </Button>
              </div>
            )}

            {/* Show total posts count */}
            <div className="text-center mt-8 text-gray-600">
              Showing {Math.min(indexOfLastPost, allBlogPosts.length)} of {allBlogPosts.length} posts
            </div>
          </>
        )}
      </div>

      {/* Newsletter Signup */}
      <div className="bg-[#002B5B] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-8 text-blue-100">Subscribe to our newsletter for the latest insights and updates.</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 rounded-lg text-gray-900" />
            <Button className="bg-[#00AEEF] hover:bg-[#0088cc] text-white px-8">Subscribe</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

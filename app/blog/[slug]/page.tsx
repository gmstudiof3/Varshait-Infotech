import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowLeft, Share2 } from "lucide-react"
import Link from "next/link"

// This would typically come from a database or API
const getBlogPost = (slug: string) => {
  const posts = [
    {
      id: 1,
      title: "The Future of AI in Business Automation",
      slug: "future-ai-business-automation",
      excerpt:
        "Discover how artificial intelligence is revolutionizing business processes and driving efficiency across industries.",
      content: `
        <h2>Introduction</h2>
        <p>Artificial intelligence is no longer a futuristic concept—it's here, and it's transforming the way businesses operate across every industry. From automating routine tasks to providing deep insights through data analysis, AI is becoming an indispensable tool for modern enterprises.</p>
        
        <h2>The Current State of AI in Business</h2>
        <p>Today's businesses are leveraging AI in various ways:</p>
        <ul>
          <li>Customer service chatbots that provide 24/7 support</li>
          <li>Predictive analytics for inventory management</li>
          <li>Automated data entry and processing</li>
          <li>Personalized marketing campaigns</li>
        </ul>
        
        <h2>Benefits of AI Automation</h2>
        <p>The advantages of implementing AI automation in business processes are numerous:</p>
        <ul>
          <li><strong>Increased Efficiency:</strong> AI can process data and complete tasks much faster than humans</li>
          <li><strong>Cost Reduction:</strong> Automation reduces the need for manual labor in repetitive tasks</li>
          <li><strong>Improved Accuracy:</strong> AI systems make fewer errors than humans in data processing</li>
          <li><strong>24/7 Operations:</strong> AI systems can work around the clock without breaks</li>
        </ul>
        
        <h2>Looking Ahead</h2>
        <p>As AI technology continues to evolve, we can expect even more sophisticated applications in business automation. The key is to start implementing AI solutions gradually and strategically.</p>
      `,
      featuredImage: "/blog/ai-business.jpg",
      author: "Varshait Team",
      publishDate: "January 15, 2024",
      tags: ["AI", "Business", "Technology"],
      readTime: "5 min read",
      seo: {
        metaTitle: "The Future of AI in Business Automation | Varshait Infotech",
        metaDescription:
          "Discover how AI is revolutionizing business processes and driving efficiency across industries.",
      },
    },
  ]

  return posts.find((post) => post.slug === slug)
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link href="/blog">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>

          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <Badge key={index} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>

            <h1 className="text-4xl font-bold text-gray-900 leading-tight">{post.title}</h1>

            <p className="text-xl text-gray-600">{post.excerpt}</p>

            <div className="flex items-center justify-between pt-4 border-t">
              <div className="flex items-center text-sm text-gray-500 space-x-4">
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-1" />
                  {post.author}
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {post.publishDate}
                </div>
                <span>{post.readTime}</span>
              </div>

              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
          <img src={post.featuredImage || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>

        {/* Call to Action */}
        <div className="mt-12 bg-[#002B5B] text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
          <p className="text-blue-100 mb-6">
            Let's discuss how AI and automation can revolutionize your business processes.
          </p>
          <Button className="bg-[#00AEEF] hover:bg-[#0088cc] text-white">Book a Consultation</Button>
        </div>
      </div>
    </div>
  )
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: post.seo.metaTitle,
    description: post.seo.metaDescription,
  }
}

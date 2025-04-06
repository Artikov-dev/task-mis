"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Video, FileText, Search, Download, Play, ExternalLink } from "lucide-react"

// Sample resource data
const videoResources = [
  {
    id: 1,
    title: "Equity & Equality",
    description:
      "Discover the difference between equity and equality, and why both matter in creating fair and inclusive opportunities for all.",
    thumbnail: "/equite-banner.png",
    videoSrc: "/Equity vs. Equality in Education A 1Minute Explainer_free.mp4",
    videoId: null, // For local videos
    duration: "1 min",
    category: "Inclusion",
    date: "March 15, 2025",
    presentation: {
      title: "Equity & Equality",
      fileSize: "2.4 MB",
      format: "PDF",
    },
  },
  {
    id: 2,
    title: "Neurodiversity: Celebrating Different Minds",
    description:
      "Explore the concept of neurodiversity and celebrate the unique strengths and perspectives of different minds in our society.",
    thumbnail: "/celebrating.png",
    videoSrc: null, // Not using direct source for Google Drive videos
    videoId: "1qCUlRASHoKHwSJ8CAxWI8_9EvHmZiI8D", // Google Drive file ID
    duration: "1:19 min",
    category: "Inclusion",
    date: "April 2, 2025",
    presentation: {
      title: "Neurodiversity Handbook",
      fileSize: "5.8 MB",
      format: "PDF",
    },
  },
  {
    id: 3,
    title: "A Day in an Inclusive Classroom",
    description:
      "Step into a diverse classroom setting where every student is valued. Discover how inclusive education fosters respect, collaboration, and equal opportunities for all learners.",
    thumbnail: "/aday.png",
    videoSrc: "/A_Day_in_an_Inclusive_Classroom_Embraci_2025_04.mp4",
    videoId: null,
    duration: "2:07 min",
    category: "Inclusion",
    date: "March 10, 2025",
    presentation: {
      title: "Inclusive Classroom Guide",
      fileSize: "3.2 MB",
      format: "PDF",
    },
  },
  {
    id: 4,
    title: "From Stigma to Empowerment",
    description:
      "Explore how inclusive education has transformed over time—from marginalization to empowerment—creating supportive environments where every learner can thrive.",
    thumbnail: "/stigma.png",
    videoSrc: "/From_Stigma_to_Empowerment_The_Evolutio_2025_04.mp4",
    videoId: null,
    duration: "4:39 min",
    category: "Education",
    date: "March 5, 2025",
    presentation: {
      title: "Cultural Competence Framework",
      fileSize: "2.1 MB",
      format: "PDF",
    },
  },
]

const documentResources = [
  {
    id: 1,
    title: "Diversity and Inclusion Framework",
    description: "A comprehensive framework for implementing diversity and inclusion initiatives.",
    thumbnail: "/placeholder.svg?height=400&width=600&text=D%26I+Framework",
    pages: 24,
    category: "Diversity",
  },
  {
    id: 2,
    title: "Accessible Content Creation Guide",
    description: "Best practices for creating content that is accessible to all users.",
    thumbnail: "/placeholder.svg?height=400&width=600&text=Accessibility+Guide",
    pages: 18,
    category: "Accessibility",
  },
  {
    id: 3,
    title: "Inclusive Language Handbook",
    description: "Guidelines for using language that is inclusive and respectful of all people.",
    thumbnail: "/placeholder.svg?height=400&width=600&text=Inclusive+Language",
    pages: 32,
    category: "Communication",
  },
  {
    id: 4,
    title: "Universal Design for Learning",
    description: "Presentation on implementing UDL principles in educational settings.",
    thumbnail: "/placeholder.svg?height=400&width=600&text=UDL",
    pages: 45,
    category: "Education",
  },
]

export default function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("All")

  // Filter resources based on search and category
  const filterResources = (resources: any[]) => {
    return resources.filter((resource) => {
      const matchesSearch =
        resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = activeCategory === "All" || resource.category === activeCategory
      return matchesSearch && matchesCategory
    })
  }

  const filteredVideos = filterResources(videoResources)
  const filteredDocuments = filterResources(documentResources)

  // Get unique categories from all resources
  const categories = [
    "All",
    ...new Set([...videoResources.map((r) => r.category), ...documentResources.map((r) => r.category)]),
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Resources</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Explore our collection of educational videos and documents designed to break barriers and celebrate
              diversity.
            </p>
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Search resources..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-8 border-b">
        <div className="container">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Content */}
      <section className="py-12">
        <div className="container">
          <Tabs defaultValue="videos" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto mb-8 grid-cols-2">
              <TabsTrigger value="videos" className="flex items-center gap-2">
                <Video className="h-4 w-4" />
                Videos
              </TabsTrigger>
              <TabsTrigger value="documents" className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                Documents
              </TabsTrigger>
            </TabsList>

            <TabsContent value="videos">
              {filteredVideos.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredVideos.map((video, index) => (
                    <motion.div
                      key={video.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      <div className="relative h-48">
                        <Image
                          src={video.thumbnail || "/placeholder.svg"}
                          alt={video.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <Link
                            href={`/resources/videos/${video.id}`}
                            className="bg-white/90 dark:bg-gray-800/90 text-purple-600 dark:text-purple-400 p-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                          >
                            <Play className="h-6 w-6" />
                            <span className="sr-only">Play video</span>
                          </Link>
                        </div>
                        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                          {video.duration}
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-xl font-bold">{video.title}</h3>
                          <span className="bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 text-xs px-2 py-1 rounded">
                            {video.category}
                          </span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">{video.description}</p>

                        {video.presentation && (
                          <div className="mt-4">
                            <div className="relative">
                              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-300"></div>
                              <div className="relative bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                                <div className="flex items-center justify-between mb-3">
                                  <div className="flex items-center gap-2">
                                    <FileText className="h-4 w-4 text-purple-500" />
                                    <span className="text-sm font-medium">Presentation</span>
                                  </div>
                                  <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded-full">
                                    {video.presentation.fileSize}
                                  </span>
                                </div>

                                <div className="grid grid-cols-2 gap-2">
                                  <Link href={`/resources/videos/${video.id}`}>
                                    <Button
                                      variant="outline"
                                      size="sm"
                                      className="w-full flex items-center justify-center gap-1"
                                    >
                                      <Play className="h-3 w-3" />
                                      <span className="text-xs">Watch</span>
                                    </Button>
                                  </Link>
                                  <Link href={`/resources/presentations/${video.id}`}>
                                    <Button
                                      size="sm"
                                      className="w-full flex items-center justify-center gap-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                                    >
                                      <Download className="h-3 w-3" />
                                      <span className="text-xs">Download</span>
                                    </Button>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-xl text-gray-600 dark:text-gray-400">
                    No videos found matching your search criteria.
                  </p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="documents">
              {filteredDocuments.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredDocuments.map((document, index) => (
                    <motion.div
                      key={document.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      <div className="relative h-48">
                        <Image
                          src={document.thumbnail || "/placeholder.svg"}
                          alt={document.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <Link
                            href={`/resources/documents/${document.id}`}
                            className="bg-white/90 dark:bg-gray-800/90 text-blue-600 dark:text-blue-400 p-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                          >
                            <ExternalLink className="h-6 w-6" />
                            <span className="sr-only">View document</span>
                          </Link>
                        </div>
                        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                          {document.pages} pages
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-xl font-bold">{document.title}</h3>
                          <span className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-xs px-2 py-1 rounded">
                            {document.category}
                          </span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">{document.description}</p>
                        <Button
                          asChild
                          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                        >
                          <Link
                            href={`/resources/documents/${document.id}`}
                            className="flex items-center justify-center gap-2"
                          >
                            <FileText className="h-4 w-4" />
                            View Document
                          </Link>
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-xl text-gray-600 dark:text-gray-400">
                    No documents found matching your search criteria.
                  </p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}


"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, Download, ArrowLeft, File, ExternalLink, Play, Clock, Calendar } from "lucide-react"

// Sample video resources data (same as in resources/page.tsx)
const videoResources = [
  {
    id: 1,
    title: "3 Key Barriers in Education Communication",
    description: "It’s essential to be mindful of these barriers when addressing students and parents to ensure clarity and inclusivity.",
    thumbnail: "/prezintation.png",
    documentid: "1lK9Hb9li7vWlOZ9R9p-8Xv4VWgMA3l5eK",
    duration: "45 min",
    category: "inclusion",
    date: "March 15, 2025",
    presentation: {
      title: "3 Key Barriers in Education Communications",
      fileSize: "2.4 MB",
      format: "pptx",
      description:
        "3 Key Barriers in Education Communication",
      documents: [
        { name: "HTML Cheat Sheet", format: "PDF", size: "0.8 MB" },
        { name: "CSS Reference Guide", format: "PDF", size: "1.2 MB" },
        { name: "JavaScript Basics", format: "PDF", size: "1.5 MB" },
      ],
    },
  },
  {
    id: 2,
    title: "Digital Accessibility Fundamentals",
    description: "Understanding how to make digital content accessible to everyone.",
    thumbnail: "/placeholder.svg?height=400&width=600&text=Accessibility",
    duration: "30 min",
    category: "Accessibility",
    date: "April 22, 2023",
    presentation: {
      title: "Accessibility Guidelines",
      fileSize: "1.8 MB",
      format: "PDF",
      description:
        "A comprehensive guide to implementing accessibility standards in digital products. Learn about WCAG guidelines, assistive technologies, and inclusive design principles.",
      documents: [
        { name: "WCAG 2.1 Checklist", format: "PDF", size: "0.5 MB" },
        { name: "Screen Reader Compatibility", format: "PDF", size: "0.9 MB" },
        { name: "Accessible Color Schemes", format: "PDF", size: "0.7 MB" },
      ],
    },
  },
  {
    id: 3,
    title: "Inclusive Design Principles",
    description: "Learn how to design products that work for diverse users and abilities.",
    thumbnail: "/placeholder.svg?height=400&width=600&text=Inclusive+Design",
    duration: "55 min",
    category: "Design",
    date: "May 10, 2023",
    presentation: {
      title: "Inclusive Design Handbook",
      fileSize: "3.2 MB",
      format: "PDF",
      description:
        "This handbook explores the principles of inclusive design and how to apply them to create products that serve diverse user needs. Includes case studies and practical examples.",
      documents: [
        { name: "Inclusive Design Patterns", format: "PDF", size: "1.2 MB" },
        { name: "User Testing Guide", format: "PDF", size: "0.9 MB" },
        { name: "Accessibility in Design Systems", format: "PDF", size: "1.4 MB" },
      ],
    },
  },
  {
    id: 4,
    title: "Cultural Competence in Education",
    description: "Developing skills to work effectively across cultural differences.",
    thumbnail: "/placeholder.svg?height=400&width=600&text=Cultural+Competence",
    duration: "40 min",
    category: "Education",
    date: "June 5, 2023",
    presentation: {
      title: "Cultural Competence Framework",
      fileSize: "2.1 MB",
      format: "PDF",
      description:
        "A framework for developing cultural competence in educational settings. This presentation covers key concepts, strategies for implementation, and assessment methods.",
      documents: [
        { name: "Cultural Awareness Assessment", format: "PDF", size: "0.6 MB" },
        { name: "Inclusive Classroom Strategies", format: "PDF", size: "1.1 MB" },
        { name: "Cross-Cultural Communication", format: "PDF", size: "0.8 MB" },
      ],
    },
  },
]

export default function PresentationPage() {
  const params = useParams()
  const router = useRouter()
  const [resource, setResource] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Find the resource by ID
    const id = Number(params.id)
    const foundResource = videoResources.find((item) => item.id === id)

    if (foundResource) {
      setResource(foundResource)
    }

    setLoading(false)
  }, [params.id])

  // Handle download (in a real app, this would trigger actual file downloads)
  const handleDownload = (fileName: string) => {
    alert(`Downloading ${fileName}...`)
    // In a real application, this would trigger the actual file download
  }

  if (loading) {
    return (
      <div className="container py-20 text-center">
        <p>Loading presentation...</p>
      </div>
    )
  }

  if (!resource || !resource.presentation) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Presentation Not Found</h1>
        <p className="mb-8">Sorry, we couldn't find the presentation you're looking for.</p>
        <Button asChild>
          <Link href="/resources">Back to Resources</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="container py-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Button variant="ghost" className="mb-6" onClick={() => router.back()}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Resources
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-xl">
              <div className="relative h-[300px]">
                <Image
                  src={resource.thumbnail || "/placeholder.svg"}
                  alt={resource.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className="bg-purple-500 text-white text-xs px-2 py-1 rounded-full">{resource.category}</span>
                    <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {resource.duration}
                    </span>
                    <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {resource.date}
                    </span>
                  </div>
                  <h1 className="text-2xl md:text-3xl font-bold text-white">{resource.title}</h1>
                </div>
              </div>
              <div className="p-8">
                <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
                  <p className="text-gray-600 dark:text-gray-400">{resource.description}</p>
                  <Button
                    asChild
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                  >
                    <Link href={`/resources/videos/${resource.id}`} className="flex items-center gap-2">
                      <Play className="h-4 w-4" />
                      Watch Video
                    </Link>
                  </Button>
                </div>

                <div className="border-t pt-8">
                  <h2 className="text-xl font-bold mb-6 flex items-center">
                    <FileText className="h-5 w-5 mr-2 text-purple-500" />
                    Presentation Materials
                  </h2>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="relative mb-8"
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur opacity-20"></div>
                    <Card className="relative">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                          <div className="flex items-center gap-4">
                            <div className="bg-gradient-to-br from-purple-500 to-blue-500 p-3 rounded-lg">
                              <FileText className="h-8 w-8 text-white" />
                            </div>
                            <div>
                              <h3 className="font-bold text-lg">{resource.presentation.title}</h3>
                              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                                <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 px-2 py-0.5 rounded-full text-xs">
                                  {resource.presentation.format}
                                </span>
                                <span>•</span>
                                <span>{resource.presentation.fileSize}</span>
                              </div>
                            </div>
                          </div>
                          <Button
                            onClick={() => window.open("https://drive.google.com/uc?export=download&id=1lK9Hb9li7vWlOZ9R9p-8Xv4VWgMA3l5K", "_blank")}
                            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/20"
                          >
                            <Download className="mr-2 h-4 w-4" />
                            Download Presentation
                          </Button>

                        </div>
                        <p className="mt-4 text-gray-600 dark:text-gray-400">{resource.presentation.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <h3 className="font-bold text-lg mb-4 flex items-center">
                    <File className="h-5 w-5 mr-2 text-purple-500" />
                    Additional Documents
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {resource.presentation.documents.map((doc: any, index: number) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="group relative"
                      >
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-0 group-hover:opacity-30 transition duration-300"></div>
                        <Card className="relative overflow-hidden group-hover:shadow-lg transition-all duration-300">
                          <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded-lg">
                                  <File className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                                </div>
                                <div>
                                  <p className="font-medium">{doc.name}</p>
                                  <div className="flex items-center gap-1 text-xs text-gray-500">
                                    <span className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded-full">
                                      {doc.format}
                                    </span>
                                    <span>•</span>
                                    <span>{doc.size}</span>
                                  </div>
                                </div>
                              </div>
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => handleDownload(doc.name)}
                                className="bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 hover:bg-purple-200 dark:hover:bg-purple-800/30"
                              >
                                <Download className="h-4 w-4" />
                                <span className="sr-only">Download</span>
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 sticky top-20">
              <h2 className="text-xl font-bold mb-4 flex items-center">
                <ExternalLink className="h-5 w-5 mr-2 text-purple-500" />
                Related Resources
              </h2>
              <div className="space-y-4">
                {videoResources
                  .filter((item) => item.id !== resource.id)
                  .slice(0, 3)
                  .map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="group flex gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200"
                    >
                      <div className="relative h-16 w-28 flex-shrink-0 rounded-md overflow-hidden">
                        <Image
                          src={item.thumbnail || "/placeholder.svg"}
                          alt={item.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium text-sm line-clamp-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-200">
                          {item.title}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <Link
                            href={`/resources/videos/${item.id}`}
                            className="text-xs text-purple-600 dark:text-purple-400 hover:underline flex items-center"
                          >
                            <Play className="h-3 w-3 mr-1" />
                            Watch
                          </Link>
                          <span className="text-gray-300">•</span>
                          <Link
                            href={`/resources/presentations/${item.id}`}
                            className="text-xs text-purple-600 dark:text-purple-400 hover:underline flex items-center"
                          >
                            <Download className="h-3 w-3 mr-1" />
                            Download
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  ))}
              </div>
              <div className="mt-6 pt-4 border-t">
                <Button
                  variant="outline"
                  className="w-full group hover:bg-purple-50 dark:hover:bg-purple-900/20"
                  asChild
                >
                  <Link href="/resources" className="flex items-center justify-center gap-2">
                    <ExternalLink className="h-4 w-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors" />
                    <span className="group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      View All Resources
                    </span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}


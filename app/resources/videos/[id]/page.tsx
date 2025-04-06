"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { FileText, ArrowLeft, Download, Clock, Calendar } from "lucide-react"

// Sample video resources data (same as in resources/page.tsx)
const videoResources = [
  {
    id: 1,
    title: "Equity & Equality",
    description:
      "Discover the difference between equity and equality, and why both matter in creating fair and inclusive opportunities for all.",
    thumbnail: "/equite-banner.png",
    videoSrc: "/Equity vs. Equality in Education A 1Minute Explainer_free.mp4",
    videoId: "1TsSY7E4tXCSbC1Kqn6nQ0QXLjEJgPU-A", 
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
    videoId: "1IkaK2s8VlntF0rvPL7Z9e_59RB8fa-xF", // Google Drive file ID
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
    videoSrc: null,
    videoId: "1fZXMzYj7hDAXXsGM4xkzDwzyjQYjOGzi",
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
    videoSrc: null,
    videoId: "1qCUlRASHoKHwSJ8CAxWI8_9EvHmZiI8D",
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

export default function VideoPage() {
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

  if (loading) {
    return (
      <div className="container py-20 text-center">
        <p>Loading video...</p>
      </div>
    )
  }

  if (!resource) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Video Not Found</h1>
        <p className="mb-8">Sorry, we couldn't find the video you're looking for.</p>
        <Button asChild>
          <Link href="/resources">Back to Resources</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="container py-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Button variant="ghost" className="mb-4" onClick={() => router.back()}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Resources
        </Button>

        <div className="bg-gray-950 rounded-xl overflow-hidden shadow-xl">
          {/* Video Player Section */}
          <div className="relative w-full bg-black">
            {resource.videoId ? (
              // Google Drive iframe embed
              <div className="aspect-video w-full">
                <iframe
                  className="w-full h-full"
                  src={`https://drive.google.com/file/d/${resource.videoId}/preview`}
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              </div>
            ) : resource.videoSrc ? (
              // Local video file
              <div className="aspect-video w-full">
                <video className="w-full h-full" controls preload="metadata" poster={resource.thumbnail}>
                  <source src={resource.videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            ) : (
              // Fallback if no video source
              <div className="aspect-video w-full flex items-center justify-center bg-gray-900">
                <div className="text-center p-8">
                  <p className="text-gray-400">Video not available</p>
                </div>
              </div>
            )}
          </div>

          <div className="p-6 md:p-8 bg-white dark:bg-gray-900">
            <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
              <div>
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 text-xs px-2 py-1 rounded-full">
                    {resource.category}
                  </span>
                  <span className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-xs px-2 py-1 rounded-full flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {resource.duration}
                  </span>
                  <span className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-xs px-2 py-1 rounded-full flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    {resource.date}
                  </span>
                </div>
                <h1 className="text-2xl md:text-3xl font-bold mb-2">{resource.title}</h1>
                <p className="text-gray-600 dark:text-gray-400">{resource.description}</p>
              </div>
            </div>

            {resource.presentation && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-8 pt-8 border-t"
              >
                <h2 className="text-xl font-bold mb-6 flex items-center">
                  <FileText className="h-5 w-5 mr-2 text-purple-500" />
                  Presentation Materials
                </h2>

                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur opacity-20"></div>
                  <div className="relative bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700 shadow-lg">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                      <div className="flex items-center gap-4">
                        <div className="bg-gradient-to-br from-purple-500 to-blue-500 p-4 rounded-xl">
                          <FileText className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">{resource.presentation.title}</h3>
                          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                            <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 px-2 py-0.5 rounded-full text-xs">
                              {resource.presentation.format}
                            </span>
                            <span>•</span>
                            <span>{resource.presentation.fileSize}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button
                          asChild
                          className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/20"
                        >
                          <Link href={`/resources/presentations/${resource.id}`}>View Presentation Details</Link>
                        </Button>
                        <Button
                          variant="outline"
                          className="flex items-center justify-center gap-2 border-purple-200 dark:border-purple-900 hover:bg-purple-50 dark:hover:bg-purple-900/20"
                        >
                          <Download className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                          <span className="text-purple-600 dark:text-purple-400">Download Presentation</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  )
}


"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { FileText, ArrowLeft, Download } from "lucide-react"

// Sample document resources data
const documentResources = [
  {
    id: 1,
    title: "Equity, Diversity, and Inclusion Framework",
    description: "A comprehensive framework for implementing equity, diversity, and inclusion initiatives.",
    thumbnail: "/prezintation.png",
    downloadId: "1lK9Hb9li7vWlOZ9R9p-8Xv4VWgMA3l5K",
    pages: 24,
    category: "inclusion",
    date: "February 22, 2025",
  },
  {
    id: 2,
    title: "Accessible Content Creation Guide",
    description: "Best practices for creating content that is accessible to all users.",
    thumbnail: "/prezintation.png",
    pages: 18,
    downloadId: "1QnxmO9CA2FloZ0shyR5rC9snfy-DOJ_4",
    category: "Accessibility",
    date: "March 5, 2025",
  },

]

export default function DocumentPage() {
  const params = useParams()
  const router = useRouter()
  const [resource, setResource] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Find the resource by ID
    const id = Number(params.id)
    const foundResource = documentResources.find((item) => item.id === id)

    if (foundResource) {
      setResource(foundResource)
    }

    setLoading(false)
  }, [params.id])

  if (loading) {
    return (
      <div className="container py-20 text-center">
        <p>Loading document...</p>
      </div>
    )
  }

  if (!resource) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Document Not Found</h1>
        <p className="mb-8">Sorry, we couldn't find the document you're looking for.</p>
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

        <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-xl">
          <div className="relative h-[300px]">
            <Image src={resource.thumbnail || "/prezintation.png"} alt={resource.title} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">{resource.category}</span>
                <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full flex items-center">
                  {resource.pages} pages
                </span>
                <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full flex items-center">
                  {resource.date}
                </span>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-white">{resource.title}</h1>
            </div>
          </div>

          <div className="p-8">
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-3">About This Document</h2>
              <p className="text-gray-600 dark:text-gray-400">{resource.description}</p>
            </div>

            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-20"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700 shadow-lg">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-gradient-to-br from-blue-500 to-purple-500 p-4 rounded-xl">
                      <FileText className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{resource.title}</h3>
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 px-2 py-0.5 rounded-full text-xs">
                          PDF
                        </span>
                        <span>•</span>
                        <span>{resource.pages} pages</span>
                      </div>
                    </div>
                  </div>
                  <Button
                    onClick={() =>
                      window.open(`https://drive.google.com/uc?export=download&id=${resource.downloadId}`, '_blank')
                    }
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/20"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download Document
                  </Button>


                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}


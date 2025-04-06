"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Learn about our mission, vision, and the team behind our educational platform.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="inline-block px-4 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full text-sm font-medium mb-2">
                Our Mission
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">Breaking Barriers, Celebrating Diversity</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Our mission is to create an inclusive educational platform that breaks down barriers to learning and
                celebrates the diversity of thought, experience, and background. We believe that education should be
                accessible to everyone, regardless of their circumstances.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Through our carefully curated resources, we aim to empower individuals to reach their full potential and
                contribute to a more equitable and knowledgeable society.
              </p>
              <div className="space-y-3">
                {[
                  "Providing accessible educational resources",
                  "Celebrating diverse perspectives and voices",
                  "Building an inclusive learning community",
                  "Empowering through knowledge sharing",
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative h-[400px] rounded-xl overflow-hidden shadow-xl"
            >
              <Image
                src="/placeholder.svg?height=800&width=1200&text=Our+Mission"
                alt="Our mission"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              The core principles that guide our work and community
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Inclusivity",
                description:
                  "We create spaces where everyone feels welcome and valued, regardless of background or ability.",
              },
              {
                title: "Accessibility",
                description: "We strive to make our resources accessible to all, removing barriers to education.",
              },
              {
                title: "Diversity",
                description:
                  "We celebrate diverse perspectives and experiences as essential to rich learning environments.",
              },
              {
                title: "Quality",
                description: "We maintain high standards in all our educational resources and materials.",
              },
              {
                title: "Innovation",
                description: "We embrace new ideas and approaches to improve educational experiences.",
              },
              {
                title: "Community",
                description: "We foster a supportive community where knowledge sharing and collaboration thrive.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md"
              >
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Meet the dedicated individuals behind our educational platform
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((member) => (
              <motion.div
                key={member}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: member * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md text-center"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={`/placeholder.svg?height=300&width=300&text=Team+Member+${member}`}
                    alt={`Team member ${member}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">Team Member {member}</h3>
                  <p className="text-purple-600 dark:text-purple-400 mb-3">Position Title</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    A brief bio about this team member and their contribution to our mission.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}


import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Educational Platform</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Breaking barriers, celebrating diversity through education and knowledge sharing.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-600 hover:text-primary dark:text-gray-400">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-primary dark:text-gray-400">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-primary dark:text-gray-400">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-primary dark:text-gray-400">
                <Youtube size={20} />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-gray-600 hover:text-primary dark:text-gray-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-gray-600 hover:text-primary dark:text-gray-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-sm text-gray-600 hover:text-primary dark:text-gray-400">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-gray-600 hover:text-primary dark:text-gray-400">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/resources/videos" className="text-sm text-gray-600 hover:text-primary dark:text-gray-400">
                  Video Tutorials
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/documents"
                  className="text-sm text-gray-600 hover:text-primary dark:text-gray-400"
                >
                  Presentations
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-sm text-gray-600 hover:text-primary dark:text-gray-400">
                  Upcoming Events
                </Link>
              </li>
              <li>
                <Link href="/get-involved" className="text-sm text-gray-600 hover:text-primary dark:text-gray-400">
                  Get Involved
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contact Us</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Have questions or feedback? Reach out to us.</p>
            <Link
              href="/contact"
              className="inline-flex items-center text-sm text-gray-600 hover:text-primary dark:text-gray-400"
            >
              <Mail size={16} className="mr-2" />
              Contact Form
            </Link>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-sm text-center text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Educational Platform. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}


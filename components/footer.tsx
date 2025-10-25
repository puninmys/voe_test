import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-accent-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Terrace Decor Mysore</h3>
            <p className="text-sm opacity-90">
              Transforming outdoor spaces with exquisite pergolas, architectural screens, and skylights that blend
              heritage with innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:opacity-80 transition-opacity">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/pergola-collections" className="hover:opacity-80 transition-opacity">
                  Pergola Collections
                </Link>
              </li>
              <li>
                <Link href="/skylights" className="hover:opacity-80 transition-opacity">
                  Skylights
                </Link>
              </li>
              <li>
                <Link href="/architectural-screens" className="hover:opacity-80 transition-opacity">
                  Architectural Screens
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+91 9876543210</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@terracedecorlmysore.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Mysore & Surrounding Areas</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-light pt-8 text-center text-sm opacity-80">
          <p>&copy; 2025 Terrace Decor Mysore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

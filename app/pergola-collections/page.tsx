"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const pergolaCollections = [
  {
    id: 1,
    name: "Traditional Mysore Pergola",
    category: "traditional",
    price: "₹45,000 - ₹75,000",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/b846abf2fe1f1455163e476c4cfc7d68-ITPUlZ0K04oNi90JXCpiZ6XPPyZR1A.jpg",
    description: "Classic design inspired by Mysore's architectural heritage with intricate wooden lattice work",
    features: [
      "Handcrafted wooden details",
      "Weather-resistant finish",
      "Traditional aesthetics",
      "Customizable dimensions",
    ],
  },
  {
    id: 2,
    name: "Modern Minimalist Pergola",
    category: "modern",
    price: "₹50,000 - ₹80,000",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5d373b96d6e8eca4df2adce1d5317efb-kY7C21S3QPQq8QpQ53YDydbFWJgnHb.jpg",
    description: "Sleek contemporary design with clean lines and premium materials for modern outdoor spaces",
    features: ["Aluminum frame", "Minimalist design", "Low maintenance", "UV protection"],
  },
  {
    id: 3,
    name: "Bioclimatic Pergola",
    category: "modern",
    price: "₹80,000 - ₹120,000",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8d686548976729ba93c37c9f8fe1c558-t8qy3xK6wzvt2YDsJh97ww4yxxiYbG.jpg",
    description: "Advanced pergola with adjustable louvers for optimal sun and shade control",
    features: ["Motorized louvers", "Smart control", "Energy efficient", "Premium materials"],
  },
  {
    id: 4,
    name: "Heritage Stone Pergola",
    category: "traditional",
    price: "₹60,000 - ₹95,000",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/23bb0e06d5c1c2d8d25b4c82353a20c1-tC7N4g8vRyyWrhPJlv5R57XN6zQhAR.jpg",
    description: "Combines stone pillars with wooden lattice for a timeless, elegant appearance",
    features: ["Stone pillars", "Wooden lattice", "Durable construction", "Elegant design"],
  },
  {
    id: 5,
    name: "Retractable Pergola",
    category: "modern",
    price: "₹100,000 - ₹150,000",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aaaf6ad809f0a5213380760abe667c11-ldxkuSlaSQgq3JVmFmqCLRK2gkbBMC.jpg",
    description: "Innovative design with retractable fabric canopy for flexible weather protection",
    features: ["Retractable canopy", "Weather resistant", "Easy operation", "Premium fabrics"],
  },
  {
    id: 6,
    name: "Garden Pergola with Planters",
    category: "traditional",
    price: "₹40,000 - ₹65,000",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ebdd301a825e7b8c01ae187910d49b00-gJhpJijM4d0P0HjgGxAdC69XvyE140.jpg",
    description: "Integrated planter boxes for a lush, garden-inspired outdoor living space",
    features: ["Built-in planters", "Climbing vines support", "Rustic charm", "Eco-friendly"],
  },
]

export default function PergolaCollectionsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredCollections =
    selectedCategory === "all" ? pergolaCollections : pergolaCollections.filter((p) => p.category === selectedCategory)

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-gradient-to-br from-primary to-primary-dark">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aaaf6ad809f0a5213380760abe667c11-ldxkuSlaSQgq3JVmFmqCLRK2gkbBMC.jpg"
            alt="Background"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-4 text-accent-foreground">
            Pergola Collections
          </h1>
          <p className="text-lg text-accent-foreground opacity-90 max-w-2xl mx-auto">
            Discover our curated range of pergolas, each designed to create unique outdoor experiences
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                selectedCategory === "all"
                  ? "bg-primary text-accent-foreground"
                  : "bg-muted text-foreground hover:bg-primary hover:text-accent-foreground"
              }`}
            >
              All Collections
            </button>
            <button
              onClick={() => setSelectedCategory("traditional")}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                selectedCategory === "traditional"
                  ? "bg-primary text-accent-foreground"
                  : "bg-muted text-foreground hover:bg-primary hover:text-accent-foreground"
              }`}
            >
              Traditional
            </button>
            <button
              onClick={() => setSelectedCategory("modern")}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                selectedCategory === "modern"
                  ? "bg-primary text-accent-foreground"
                  : "bg-muted text-foreground hover:bg-primary hover:text-accent-foreground"
              }`}
            >
              Modern
            </button>
          </div>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCollections.map((pergola) => (
              <Card key={pergola.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-64 overflow-hidden bg-muted">
                  <Image
                    src={pergola.image || "/placeholder.svg"}
                    alt={pergola.name}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold text-foreground flex-1">{pergola.name}</h3>
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full ml-2">
                      {pergola.category === "traditional" ? "Traditional" : "Modern"}
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4">{pergola.description}</p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-foreground mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {pergola.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-lg font-semibold text-primary">{pergola.price}</span>
                    <Link href="/contact">
                      <Button className="bg-primary hover:bg-primary-dark text-accent-foreground">Inquire Now</Button>
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-foreground">Can't Find Your Perfect Pergola?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            We offer custom design services to create a pergola that perfectly matches your vision and space
            requirements.
          </p>
          <Link href="/contact">
            <Button className="bg-primary hover:bg-primary-dark text-accent-foreground px-8 py-6 text-base">
              Request Custom Design
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}

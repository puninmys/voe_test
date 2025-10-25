"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Sun, Droplets, Zap, Shield } from "lucide-react"

const skylightProducts = [
  {
    id: 1,
    name: "Fixed Glass Skylight",
    type: "fixed",
    price: "₹25,000 - ₹45,000",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8d686548976729ba93c37c9f8fe1c558-t8qy3xK6wzvt2YDsJh97ww4yxxiYbG.jpg",
    description: "Stationary glass skylight for maximum natural light and unobstructed views",
    benefits: ["Maximum light transmission", "Minimal maintenance", "Durable glass", "UV protection"],
    specs: {
      material: "Tempered glass",
      installation: "Roof-mounted",
      warranty: "10 years",
    },
  },
  {
    id: 2,
    name: "Operable Skylight",
    type: "operable",
    price: "₹40,000 - ₹65,000",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e7c9311eecd850df4b7adcaf40539a98-Ix4qb1Fs039iVkxkRQmtwHjPLHKl2x.jpg",
    description: "Opening skylight with manual or motorized operation for ventilation and light control",
    benefits: ["Ventilation control", "Light adjustment", "Energy efficient", "Smart operation"],
    specs: {
      material: "Aluminum frame with glass",
      installation: "Roof-mounted",
      warranty: "12 years",
    },
  },
  {
    id: 3,
    name: "Tubular Skylight",
    type: "tubular",
    price: "₹15,000 - ₹30,000",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a205f32b6dd5a50703df9b19bd85fc8b-1kHBMyVyMN1OvqBzpRXd16bI2rZqmr.jpg",
    description: "Compact tube design that channels natural light through reflective ducts",
    benefits: ["Space-saving", "Affordable", "Easy installation", "Diffused light"],
    specs: {
      material: "Reflective aluminum tube",
      installation: "Roof to ceiling",
      warranty: "8 years",
    },
  },
  {
    id: 4,
    name: "Pyramid Skylight",
    type: "fixed",
    price: "₹35,000 - ₹55,000",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-05-29%20at%2012.48.49%20PM-6hvxHKmwr2qAjfJN2sGOzVvJI3AyvH.jpeg",
    description: "Elegant pyramid design that adds architectural interest while maximizing light",
    benefits: ["Architectural appeal", "Excellent light", "Weather sealed", "Premium look"],
    specs: {
      material: "Tempered glass with frame",
      installation: "Roof-mounted",
      warranty: "10 years",
    },
  },
  {
    id: 5,
    name: "Dome Skylight",
    type: "fixed",
    price: "₹30,000 - ₹50,000",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/d6c82d5152d9ac3423a0c284bd2012b8-L3c3ZncXDpwV9yZy2N7ihjZAfrcw4k.jpg",
    description: "Curved dome design for panoramic views and superior light distribution",
    benefits: ["Panoramic views", "Even light distribution", "Durable", "Modern aesthetic"],
    specs: {
      material: "Polycarbonate or glass",
      installation: "Roof-mounted",
      warranty: "10 years",
    },
  },
  {
    id: 6,
    name: "Smart Skylight System",
    type: "operable",
    price: "₹70,000 - ₹100,000",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/298a58d25fc4b7d30b48279137e2e44d-oHjTR8OHTs2aHYvDSVdfmDz0GrjqoZ.jpg",
    description: "Advanced skylight with smart controls, sensors, and automated operation",
    benefits: ["Smart automation", "Sensor controls", "Energy monitoring", "App control"],
    specs: {
      material: "Premium glass with smart frame",
      installation: "Roof-mounted",
      warranty: "15 years",
    },
  },
]

const benefits = [
  {
    icon: Sun,
    title: "Natural Light",
    description: "Maximize natural daylight to reduce energy consumption and improve ambiance",
  },
  {
    icon: Droplets,
    title: "Weather Protection",
    description: "Advanced sealing and materials protect against rain, wind, and temperature changes",
  },
  {
    icon: Zap,
    title: "Energy Efficient",
    description: "Reduce artificial lighting needs and lower your energy bills significantly",
  },
  {
    icon: Shield,
    title: "Durable & Safe",
    description: "Premium materials and expert installation ensure long-lasting performance",
  },
]

export default function SkylightsPage() {
  const [selectedType, setSelectedType] = useState("all")

  const filteredProducts =
    selectedType === "all" ? skylightProducts : skylightProducts.filter((p) => p.type === selectedType)

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-gradient-to-br from-accent to-primary">
        <div className="absolute inset-0 opacity-20">
          <Image src="/modern-skylight-natural-light.jpg" alt="Background" fill className="object-cover" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-4 text-foreground">Skylights</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Bring natural light and fresh air into your outdoor spaces with our premium skylight solutions
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-4 text-foreground">Why Choose Our Skylights?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the perfect blend of natural light, ventilation, and architectural elegance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon
              return (
                <div key={idx} className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-muted border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => setSelectedType("all")}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                selectedType === "all"
                  ? "bg-primary text-accent-foreground"
                  : "bg-background text-foreground hover:bg-primary hover:text-accent-foreground"
              }`}
            >
              All Types
            </button>
            <button
              onClick={() => setSelectedType("fixed")}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                selectedType === "fixed"
                  ? "bg-primary text-accent-foreground"
                  : "bg-background text-foreground hover:bg-primary hover:text-accent-foreground"
              }`}
            >
              Fixed
            </button>
            <button
              onClick={() => setSelectedType("operable")}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                selectedType === "operable"
                  ? "bg-primary text-accent-foreground"
                  : "bg-background text-foreground hover:bg-primary hover:text-accent-foreground"
              }`}
            >
              Operable
            </button>
            <button
              onClick={() => setSelectedType("tubular")}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                selectedType === "tubular"
                  ? "bg-primary text-accent-foreground"
                  : "bg-background text-foreground hover:bg-primary hover:text-accent-foreground"
              }`}
            >
              Tubular
            </button>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((skylight) => (
              <Card key={skylight.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-64 overflow-hidden bg-muted">
                  <Image
                    src={skylight.image || "/placeholder.svg"}
                    alt={skylight.name}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{skylight.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{skylight.description}</p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-foreground mb-2">Key Benefits:</h4>
                    <ul className="space-y-1">
                      {skylight.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center">
                          <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4 p-3 bg-muted rounded-lg">
                    <p className="text-xs text-muted-foreground mb-1">
                      <span className="font-semibold">Material:</span> {skylight.specs.material}
                    </p>
                    <p className="text-xs text-muted-foreground mb-1">
                      <span className="font-semibold">Warranty:</span> {skylight.specs.warranty}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-lg font-semibold text-primary">{skylight.price}</span>
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
      <section className="py-20 bg-primary text-accent-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6">Illuminate Your Space</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Let our experts help you choose the perfect skylight solution for your outdoor space
          </p>
          <Link href="/contact">
            <Button className="bg-accent-foreground text-primary hover:bg-muted px-8 py-6 text-base font-semibold">
              Schedule Consultation
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}

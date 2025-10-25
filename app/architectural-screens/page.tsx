"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Eye, Lock, Leaf, Palette } from "lucide-react"
import DesignGallery from "@/components/design-gallery"

const screenProducts = [
  {
    id: 1,
    name: "Wooden Lattice Screen",
    material: "wood",
    price: "₹20,000 - ₹40,000",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1d04c0b689220a9eb3f42c928224e6b5-mRSGFpsiIQq2C1KGVX1VzyRxhjw3N4.jpg",
    description: "Traditional wooden lattice design offering privacy with aesthetic appeal and natural warmth",
    features: ["Natural wood finish", "Customizable patterns", "Weather-resistant", "Timeless design"],
    applications: ["Patio privacy", "Garden boundaries", "Balcony screening", "Decorative dividers"],
  },
  {
    id: 2,
    name: "Metal Geometric Screen",
    material: "metal",
    price: "₹30,000 - ₹55,000",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/697f0de219827a33fa7708e9513f2ac5-uYtMpv3S4oua9sG5Ubm4QslM44hbXk.jpg",
    description: "Modern metal screens with geometric patterns for contemporary outdoor spaces",
    features: ["Durable metal", "Geometric patterns", "Low maintenance", "Contemporary style"],
    applications: ["Modern patios", "Rooftop terraces", "Commercial spaces", "Artistic installations"],
  },
  {
    id: 3,
    name: "Stone & Wood Composite",
    material: "composite",
    price: "₹40,000 - ₹70,000",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/08d550e78d33b8adb183cf4cac253aef-OSC0dedJc6LNl4xtMoz59AvKzfahys.jpg",
    description: "Combines stone pillars with wooden or metal panels for a sophisticated look",
    features: ["Stone pillars", "Mixed materials", "Premium finish", "Elegant design"],
    applications: ["Luxury gardens", "Entrance features", "Boundary walls", "Statement pieces"],
  },
  {
    id: 4,
    name: "Bamboo Privacy Screen",
    material: "bamboo",
    price: "₹18,000 - ₹35,000",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3497f2381517084fe5a879bad3d13c95-4MjuDTESFr4WrtnNAlRnzwIq5hLWdn.jpg",
    description: "Eco-friendly bamboo screens providing natural privacy with sustainable materials",
    features: ["Eco-friendly", "Natural aesthetics", "Lightweight", "Easy installation"],
    applications: ["Eco-conscious designs", "Zen gardens", "Balconies", "Temporary screening"],
  },
  {
    id: 5,
    name: "Perforated Metal Screen",
    material: "metal",
    price: "₹35,000 - ₹60,000",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/402a4f4bad3dbd10608246d24bb0d034-8ltvUDT5OujEi5jZ5XkmatgyBVWsWl.jpg",
    description: "Modern perforated metal design allowing partial visibility while maintaining privacy",
    features: ["Perforated design", "Partial transparency", "Modern aesthetic", "Durable"],
    applications: ["Contemporary homes", "Office terraces", "Retail spaces", "Artistic displays"],
  },
  {
    id: 6,
    name: "Living Green Wall",
    material: "composite",
    price: "₹50,000 - ₹85,000",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9521dce6a48c1672cde964480ce9e34e-EOSdTFHxz8rx5wWLlKB4dR0SNFFrye.jpg",
    description: "Vertical garden screen with integrated planting system for a living, breathing privacy solution",
    features: ["Living plants", "Vertical garden", "Air purifying", "Sustainable"],
    applications: ["Green buildings", "Urban gardens", "Wellness spaces", "Environmental design"],
  },
]

const benefits = [
  {
    icon: Eye,
    title: "Privacy & Seclusion",
    description: "Create intimate outdoor spaces while maintaining visual connection to your surroundings",
  },
  {
    icon: Lock,
    title: "Security",
    description: "Protect your outdoor areas from unwanted views and enhance property security",
  },
  {
    icon: Leaf,
    title: "Environmental",
    description: "Choose eco-friendly materials that blend seamlessly with nature and reduce carbon footprint",
  },
  {
    icon: Palette,
    title: "Aesthetic Appeal",
    description: "Add architectural interest and visual character to your outdoor spaces",
  },
]

export default function ArchitecturalScreensPage() {
  const [selectedMaterial, setSelectedMaterial] = useState("all")

  const filteredProducts =
    selectedMaterial === "all" ? screenProducts : screenProducts.filter((p) => p.material === selectedMaterial)

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-gradient-to-br from-primary-dark to-primary">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3340dd6238ed585862ed85d22b558c0b-bJzf0oHmNr7Ie2WYF5ZtSPvFrT59JQ.jpg"
            alt="Background"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-4 text-accent-foreground">
            Architectural Screens
          </h1>
          <p className="text-lg text-accent-foreground opacity-90 max-w-2xl mx-auto">
            Create privacy with aesthetic appeal using our premium architectural screening solutions
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-4 text-foreground">Why Architectural Screens?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transform your outdoor space with functional and beautiful screening solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon
              return (
                <div key={idx} className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <Icon className="w-6 h-6 text-accent" />
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
              onClick={() => setSelectedMaterial("all")}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                selectedMaterial === "all"
                  ? "bg-primary text-accent-foreground"
                  : "bg-background text-foreground hover:bg-primary hover:text-accent-foreground"
              }`}
            >
              All Materials
            </button>
            <button
              onClick={() => setSelectedMaterial("wood")}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                selectedMaterial === "wood"
                  ? "bg-primary text-accent-foreground"
                  : "bg-background text-foreground hover:bg-primary hover:text-accent-foreground"
              }`}
            >
              Wooden
            </button>
            <button
              onClick={() => setSelectedMaterial("metal")}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                selectedMaterial === "metal"
                  ? "bg-primary text-accent-foreground"
                  : "bg-background text-foreground hover:bg-primary hover:text-accent-foreground"
              }`}
            >
              Metal
            </button>
            <button
              onClick={() => setSelectedMaterial("bamboo")}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                selectedMaterial === "bamboo"
                  ? "bg-primary text-accent-foreground"
                  : "bg-background text-foreground hover:bg-primary hover:text-accent-foreground"
              }`}
            >
              Bamboo
            </button>
            <button
              onClick={() => setSelectedMaterial("composite")}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                selectedMaterial === "composite"
                  ? "bg-primary text-accent-foreground"
                  : "bg-background text-foreground hover:bg-primary hover:text-accent-foreground"
              }`}
            >
              Composite
            </button>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((screen) => (
              <Card key={screen.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-64 overflow-hidden bg-muted">
                  <Image
                    src={screen.image || "/placeholder.svg"}
                    alt={screen.name}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{screen.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{screen.description}</p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-foreground mb-2">Features:</h4>
                    <ul className="space-y-1">
                      {screen.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4 p-3 bg-muted rounded-lg">
                    <h4 className="text-xs font-semibold text-foreground mb-2">Applications:</h4>
                    <div className="flex flex-wrap gap-1">
                      {screen.applications.map((app, idx) => (
                        <span key={idx} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-lg font-semibold text-primary">{screen.price}</span>
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

      <DesignGallery />

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-foreground">Design Your Perfect Screen</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our design experts can help you create a custom architectural screen that perfectly complements your space
          </p>
          <Link href="/contact">
            <Button className="bg-primary hover:bg-primary-dark text-accent-foreground px-8 py-6 text-base">
              Get Custom Design
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}

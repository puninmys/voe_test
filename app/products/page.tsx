"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const productCategories = [
  {
    id: "pergolas",
    title: "Pergola Collections",
    description: "Transform your terrace with our signature pergola designs",
    products: [
      {
        name: "Mangalore Tile Pergola",
        subtitle: "Natural Cooling & Heritage Charm",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/f2f9bb9cebbd995fbb31c77a25a4fedc-Wd4xmyYk63YOb0xtgwowP8LiJiOpnK.jpg",
        description:
          "Bring timeless tradition to your terrace with our handcrafted Mangalore Tile Pergolas — a perfect blend of Mysore's heritage architecture and modern-day engineering.",
        features: [
          "Natural Cooling & Insulation: Clay tiles provide outstanding temperature control",
          "Authentic Aesthetics: The iconic red-orange tones bring earthy, coastal elegance",
          "Long-Lasting Strength: Fired at high temperatures for superior durability",
          "Low Maintenance: Naturally resists moss and algae",
          "Design Versatility: Single Tile, Double Tile, or Tile + Glass combinations",
        ],
      },
      {
        name: "Toughened Glass Pergola",
        subtitle: "Sleek Transparency, Maximum Light",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/f3f4acf303970b270d9e4eb474eecec1-5L1up5YsAxUVJJ42sSUx8oSMKuOB5x.jpg",
        description:
          "Experience the outdoors without compromise. Our glass pergolas merge minimalism with full weather protection.",
        features: [
          "Flooded with Natural Light for an open, airy ambiance",
          "Safe & Strong: Tempered glass is four times tougher than regular glass",
          "All-Weather Shield: Keeps rain and UV rays out",
          "Modern Look: Sleek lines that elevate any architecture",
          "Effortless Care: Stays crystal-clear with minimal cleaning",
        ],
      },
      {
        name: "CNC Design Pergola",
        subtitle: "Precision Artistry Meets Engineering Excellence",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/f4f6b9cd43edab77130218c92f86be1f-s1q6nl1m7I99dt2vFrWyVoEWzLPLAq.jpg",
        description:
          "Turn your terrace into a statement of style. Using CNC technology, we craft intricate, laser-cut patterns from durable metal.",
        features: [
          "Fully Customizable: Tailor every detail with endless pattern options",
          "Engineered Strength: Built from high-grade aluminium or steel",
          "Architectural Elegance: A true design centerpiece for your outdoor space",
          "Perfect Shade Balance: Artistic patterns filter sunlight beautifully",
          "Weather-Resilient: Built to last, even in harsh conditions",
        ],
      },
      {
        name: "Shingles Pergola",
        subtitle: "Classic Finish, Robust Protection",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fe3c88078f383199e2b44abe4d366109-AY8etEfqWjqqnSNI2I7JbcKnuLzjA4.jpg",
        description:
          "A modern classic — ideal for high-rise terraces and windy zones with excellent weather protection.",
        features: [
          "Excellent Rain Resistance: Interlocking shingles keep water out completely",
          "Architectural Versatility: Complements both traditional and modern homes",
          "Budget-Friendly Strength: Cost-effective all-weather reliability",
          "Wind-Resistant: Perfect for high-rise or open terrace installations",
        ],
      },
      {
        name: "PUF Sheet Pergola",
        subtitle: "Ultimate Thermal Comfort & Lightweight Design",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/d8d7362de069c0b785022be9cff907cc-a2bGYY6cx40b1P9r0Mk0y1MQgx2NdO.jpg",
        description: "For those who value efficiency, comfort, and simplicity with superior thermal insulation.",
        features: [
          "Thermal Insulation: PUF's foam core keeps spaces cool in summer, warm in winter",
          "Lightweight: Easy installation with minimal load on your structure",
          "Sound Dampening: Reduces outside noise for peaceful lounging",
          "Cost-Effective: Long-lasting, corrosion-resistant, and low-maintenance",
          "Versatile Applications: Perfect for terraces, carports, farmhouses, and more",
        ],
      },
      {
        name: "Rafters Pergola",
        subtitle: "Open Design, Breezy Comfort",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/f3398676b56389c041bcd179204c6570-2013NxiKADJBYwdmJARrjkAOWWe9qE.jpg",
        description:
          "The timeless pergola design that invites nature in with filtered sunlight and natural ventilation.",
        features: [
          "Filtered Sunlight: Soft shade for relaxation or dining",
          "Support for Climbing Plants: Create your own living green roof",
          "Customizable: Add curtains, canopies, or lighting",
          "Great Ventilation: Enjoy Mysore's breeze under open rafters",
        ],
      },
    ],
  },
  {
    id: "screens",
    title: "Architectural Screens & Privacy Solutions",
    description: "Create privacy with aesthetic appeal and functionality",
    products: [
      {
        name: "Terrace Decor Jali Screens",
        subtitle: "Elegant Privacy, Light & Airflow",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ecec54e722e6e6a4af0bd241d77f35c3-OzRy0k4jac06yz1CIfQf7S9Svt0Yh9.jpg",
        description:
          "A modern reinterpretation of India's iconic lattice art that enhances beauty while providing privacy.",
        features: [
          "Exterior Facades: Enhance beauty and block heat",
          "Balconies & Terraces: Private yet airy outdoor spaces",
          "Interiors: Divide spaces gracefully without blocking light",
          "Gardens: Decorative partitions for natural landscaping",
        ],
      },
      {
        name: "PVC Lattice Privacy Screens",
        subtitle: "Modern, Maintenance-Free Comfort",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0e6e8fab07b77289c11f839712daea28-TS2K3XAMT5IRQPQDO8gCqR50jfi7oJ.jpg",
        description: "Stylish privacy with zero upkeep and weather-resistant durability.",
        features: [
          "Zero Maintenance: No painting or sealing required",
          "Weather-Resistant: UV-stabilized panels won't warp or fade",
          "Airflow + Privacy: Get seclusion without losing ventilation",
          "Termite & Pest Proof: Built to last for years",
          "Cost-Effective: Long-term savings and elegant design combined",
        ],
      },
      {
        name: "Geometric Metal Screens",
        subtitle: "Contemporary Design with Precision",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8b76b6e1304c827fef79946606abd1f3-UEUr4dUCKg2j4yMrfuRIIDTm7Utz9Q.jpg",
        description:
          "Modern geometric patterns in durable metal for striking architectural statements on balconies and facades.",
        features: [
          "Contemporary Aesthetics: Bold geometric patterns",
          "Durable Materials: High-grade metal construction",
          "Balcony & Facade Applications: Perfect for multi-story buildings",
          "Weather-Resistant: Built to withstand harsh conditions",
        ],
      },
      {
        name: "Ornate Decorative Screens",
        subtitle: "Traditional Elegance with Modern Durability",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/333caff2d06673b2eb1e26737eb19843-XDlQ3LeCfVrtZQv32CICyhgHCoUrz9.jpg",
        description: "Intricate ornamental patterns that blend traditional aesthetics with contemporary materials.",
        features: [
          "Intricate Patterns: Detailed ornamental designs",
          "Versatile Applications: Interior and exterior use",
          "Light Filtering: Creates beautiful shadow patterns",
          "Long-Lasting: Premium materials ensure durability",
        ],
      },
    ],
  },
  {
    id: "skylights",
    title: "Skylights",
    description: "Brighten your Mysore terrace with natural light and comfort",
    products: [
      {
        name: "Natural Light Skylights",
        subtitle: "Energy-Efficient Illumination",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/f4f6b9cd43edab77130218c92f86be1f-s1q6nl1m7I99dt2vFrWyVoEWzLPLAq.jpg",
        description: "Enjoy Mysore's sunshine with energy-efficient skylights designed for thermal balance and style.",
        features: [
          "Floods Interiors with Daylight: Reduce artificial lighting",
          "Improves Ventilation: Allows hot air to escape naturally",
          "All-Weather Protection: Enjoy your terrace even during monsoons",
          "Energy Efficient: Low-E glass reduces heat gain and electricity use",
          "Supports Biophilic Living: Keep your plants and mood thriving",
        ],
      },
    ],
  },
]

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("pergolas")

  const currentCategory = productCategories.find((cat) => cat.id === selectedCategory)

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-gradient-to-br from-primary to-primary-dark">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/697f0de219827a33fa7708e9513f2ac5-uYtMpv3S4oua9sG5Ubm4QslM44hbXk.jpg"
            alt="Background"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-4 text-accent-foreground">
            Products & Services
          </h1>
          <p className="text-lg text-accent-foreground opacity-90 max-w-2xl mx-auto">
            Explore our complete range of pergolas, architectural screens, and skylights
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-background border-b border-border sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {productCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === category.id
                    ? "bg-primary text-accent-foreground"
                    : "bg-muted text-foreground hover:bg-primary hover:text-accent-foreground"
                }`}
              >
                {category.title.split(" ")[0]}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {currentCategory && (
            <>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-light mb-4 text-foreground">{currentCategory.title}</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{currentCategory.description}</p>
              </div>

              <div className="space-y-16">
                {currentCategory.products.map((product, idx) => (
                  <div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Alternate layout for visual interest */}
                    {idx % 2 === 0 ? (
                      <>
                        <div className="relative h-96 overflow-hidden rounded-lg bg-muted">
                          <Image
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="text-3xl font-light mb-2 text-foreground">{product.name}</h3>
                          <p className="text-lg text-primary font-semibold mb-4">{product.subtitle}</p>
                          <p className="text-muted-foreground mb-6 leading-relaxed">{product.description}</p>

                          <div className="mb-8">
                            <h4 className="text-lg font-semibold text-foreground mb-4">Key Features:</h4>
                            <ul className="space-y-3">
                              {product.features.map((feature, fidx) => (
                                <li key={fidx} className="text-muted-foreground flex items-start">
                                  <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <Link href="/contact">
                            <Button className="bg-primary hover:bg-primary-dark text-accent-foreground px-8 py-6">
                              Inquire Now
                            </Button>
                          </Link>
                        </div>
                      </>
                    ) : (
                      <>
                        <div>
                          <h3 className="text-3xl font-light mb-2 text-foreground">{product.name}</h3>
                          <p className="text-lg text-primary font-semibold mb-4">{product.subtitle}</p>
                          <p className="text-muted-foreground mb-6 leading-relaxed">{product.description}</p>

                          <div className="mb-8">
                            <h4 className="text-lg font-semibold text-foreground mb-4">Key Features:</h4>
                            <ul className="space-y-3">
                              {product.features.map((feature, fidx) => (
                                <li key={fidx} className="text-muted-foreground flex items-start">
                                  <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <Link href="/contact">
                            <Button className="bg-primary hover:bg-primary-dark text-accent-foreground px-8 py-6">
                              Inquire Now
                            </Button>
                          </Link>
                        </div>
                        <div className="relative h-96 overflow-hidden rounded-lg bg-muted">
                          <Image
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-accent-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6">Ready to Transform Your Terrace?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Let our experts help you choose the perfect solution for your outdoor space. Schedule a free consultation
            today.
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

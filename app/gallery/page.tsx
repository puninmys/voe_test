"use client"

import { useState } from "react"

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const galleryItems = [
    {
      id: 1,
      title: "Diamond Skylight with Chandelier",
      category: "skylights",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4deae7ce92802ed91ccd5810f463ba79-k4qbNwmcOfMAHoFxyccCJXgyFTikgC.jpg",
      description: "Geometric diamond-shaped skylight with crystal chandelier and blue sky view",
    },
    {
      id: 2,
      title: "Modern Patio with Geometric Pergola",
      category: "pergolas",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/139ca630501c6f0f5ec9580933eb0dd8-QoYWMzIGBfJ0IaXBF4uzQL1KYdCQjO.jpg",
      description: "Contemporary outdoor space with black and white geometric pergola and red hanging chair",
    },
    {
      id: 3,
      title: "Spiral Staircase with Hanging Plants",
      category: "skylights",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4e01c80bb602fd2c36663dfe379653b6-3Gxz0WASKG1RNorbJ7PpthW8e8MU1h.jpg",
      description: "Elegant spiral staircase viewed from above with cascading green plants",
    },
    {
      id: 4,
      title: "Wooden Frame Skylight",
      category: "skylights",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/92e14aa55271909319b16449b1dca642-571muvg3FWsHi5FMAwLNfqXfGfHX6i.jpg",
      description: "Large geometric skylight with wooden frame, brick wall, and pendant lighting",
    },
    {
      id: 5,
      title: "Geometric Window Screen",
      category: "screens",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/25594fd24393011de41db11809eff247-MQFv8V2FqsPOiw8NHYnsP9BAknyQGl.jpg",
      description: "Black grid pattern window with hanging copper decorative elements and trailing plants",
    },
    {
      id: 6,
      title: "Feather Pattern Skylight",
      category: "skylights",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/d4ab30ebf10db5bc8e50975b1819d165-SbGtE7crpho4TZiIyLAiEtt8IxXzr5.jpg",
      description: "Upward view of geometric skylight with blue and white striped feather-like pattern",
    },
    {
      id: 7,
      title: "Luxury Interior with Colorful Skylight",
      category: "skylights",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/f1d812cdf985e363f6c2457de67d498c-Pg6uJNuxssSEOy6BuKbEGqenCLVTNO.jpg",
      description: "Multi-level luxury space with colorful geometric skylight, green turf, and decorative patterns",
    },
    {
      id: 8,
      title: "Spiral Staircase with Geometric Skylight",
      category: "skylights",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/d89eea2c10724880a0bbcf5bca3c4fc1-K0YWYseuzdUKEBytaIhLWYkNsnF3Qd.jpg",
      description: "Modern staircase with geometric skylight creating dramatic striped shadow patterns",
    },
    {
      id: 9,
      title: "Minimalist Staircase with Large Skylight",
      category: "skylights",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/885b2174580bafa36d8b0c5bc0a93f88-YI3wh6qOXBSHSk8zi1FBXcfQ4WrAhl.jpg",
      description: "Contemporary staircase design with expansive geometric skylight and natural light",
    },
    {
      id: 10,
      title: "Modern Geometric Screen",
      category: "screens",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/697f0de219827a33fa7708e9513f2ac5-uYtMpv3S4oua9sG5Ubm4QslM44hbXk.jpg",
      description: "Contemporary black screen with intricate floral patterns",
    },
    {
      id: 11,
      title: "Wooden Slat Pergola",
      category: "pergolas",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/d6c82d5152d9ac3423a0c284bd2012b8-L3c3ZncXDpwV9yZy2N7ihjZAfrcw4k.jpg",
      description: "Modern pergola with horizontal wooden slats and seating",
    },
    {
      id: 12,
      title: "Multi-Story Screens",
      category: "screens",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3497f2381517084fe5a879bad3d13c95-4MjuDTESFr4WrtnNAlRnzwIq5hLWdn.jpg",
      description: "Geometric pattern screens on residential building",
    },
    {
      id: 13,
      title: "LED Pergola",
      category: "pergolas",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e7c9311eecd850df4b7adcaf40539a98-Ix4qb1Fs039iVkxkRQmtwHjPLHKl2x.jpg",
      description: "Contemporary pergola with blue LED accent lighting",
    },
    {
      id: 14,
      title: "Octagonal Gazebo",
      category: "pergolas",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-05-29%20at%2012.48.49%20PM-6hvxHKmwr2qAjfJN2sGOzVvJI3AyvH.jpeg",
      description: "Traditional octagonal pergola with wooden railings",
    },
    {
      id: 15,
      title: "Ornate Turquoise Screen",
      category: "screens",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9521dce6a48c1672cde964480ce9e34e-EOSdTFHxz8rx5wWLlKB4dR0SNFFrye.jpg",
      description: "Decorative turquoise screen with Islamic patterns",
    },
    {
      id: 16,
      title: "Geometric Pattern Screen",
      category: "screens",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/402a4f4bad3dbd10608246d24bb0d034-8ltvUDT5OujEi5jZ5XkmatgyBVWsWl.jpg",
      description: "Modern dark screen with geometric diamond patterns",
    },
    {
      id: 17,
      title: "Mixed Material Facade",
      category: "screens",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/298a58d25fc4b7d30b48279137e2e44d-oHjTR8OHTs2aHYvDSVdfmDz0GrjqoZ.jpg",
      description: "Building with wooden and geometric pattern screens",
    },
    {
      id: 18,
      title: "Striped Rooftop Pergola",
      category: "pergolas",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a205f32b6dd5a50703df9b19bd85fc8b-1kHBMyVyMN1OvqBzpRXd16bI2rZqmr.jpg",
      description: "Modern pergola with orange and white striped slats",
    },
    {
      id: 19,
      title: "Contemporary Balcony Screen",
      category: "screens",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/38a0bb176afed659482e395c95420f94-3hFRdYdcnu3hDYsoX19Ym4GLI72zbp.jpg",
      description: "Modern geometric screen on residential balcony",
    },
    {
      id: 20,
      title: "Architectural Screen Detail",
      category: "screens",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3340dd6238ed585862ed85d22b558c0b-bJzf0oHmNr7Ie2WYF5ZtSPvFrT59JQ.jpg",
      description: "Detailed view of geometric pattern screen",
    },
    {
      id: 21,
      title: "Heritage Pergola",
      category: "pergolas",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1d04c0b689220a9eb3f42c928224e6b5-mRSGFpsiIQq2C1KGVX1VzyRxhjw3N4.jpg",
      description: "Traditional pergola with terracotta flooring",
    },
  ]

  const filteredItems =
    selectedCategory === "all" ? galleryItems : galleryItems.filter((item) => item.category === selectedCategory)

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "pergolas", label: "Pergolas" },
    { id: "skylights", label: "Skylights" },
    { id: "screens", label: "Screens" },
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-light tracking-tight text-foreground mb-4">Project Gallery</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our diverse collection of outdoor design projects showcasing pergolas, skylights, and
              architectural screens
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 md:py-12 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-foreground hover:bg-muted/80"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group overflow-hidden rounded-lg border border-border hover:border-primary transition-all duration-300 hover:shadow-lg"
              >
                <div className="relative h-64 md:h-72 overflow-hidden bg-muted">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                  <div className="mt-4 pt-4 border-t border-border">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                      {item.category === "pergolas" ? "Pergola" : item.category === "skylights" ? "Skylight" : "Screen"}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-primary/5 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-foreground mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">Contact us today to discuss your outdoor design project</p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </main>
  )
}

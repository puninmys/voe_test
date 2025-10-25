"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

interface GalleryImage {
  id: number
  src: string
  alt: string
  category: string
  title: string
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-09-23%20at%2013.56.10_8a648357-iagaAajPbxdf3BzoBOcjw5C4QRn7Hs.jpg",
    alt: "Gray wooden lattice with diamond pattern",
    category: "Wooden Lattice",
    title: "Traditional Wooden Lattice",
  },
  {
    id: 2,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/959644c53be9de18e2245aa1d9d1613a-4X9UzKXc5NGDQpEHfG1sEzEa4KVGyE.jpg",
    alt: "Terracotta perforated metal screen with pergola",
    category: "Metal Screens",
    title: "Terracotta Perforated Screen",
  },
  {
    id: 3,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-09-23%20at%2013.56.14_96b24570-eAYEIQCCHqucA5gdVTITgQXbYgw5FV.jpg",
    alt: "White perforated metal screen with blue accents",
    category: "Metal Screens",
    title: "Modern Perforated Design",
  },
  {
    id: 4,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-09-23%20at%2013.56.10_ec4a1fa1-xDCAmUt9FZ9r2LlIFuBE9Q5UhGSA6c.jpg",
    alt: "Dark gray lattice with plants",
    category: "Wooden Lattice",
    title: "Contemporary Dark Lattice",
  },
  {
    id: 5,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-09-23%20at%2013.56.11_cdb3d1a8-Lyi1YbnN89SF3nQVIDOWsCd1W9srQx.jpg",
    alt: "White perforated metal panel installation",
    category: "Metal Screens",
    title: "Installation Process",
  },
  {
    id: 6,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-09-23%20at%2013.56.14_b69590a3-Irm3JZElA4u534enhIsoUCLPHPLjD0.jpg",
    alt: "White perforated metal screen with blue accents",
    category: "Metal Screens",
    title: "Minimalist White Screen",
  },
  {
    id: 7,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ce27a55e3fcfe8ceab859f5bb5e6bc79-3iz4gyjUkHWtqW8nRDlzrc7ZufSyq8.jpg",
    alt: "Terracotta brick screen with pergola and plants",
    category: "Composite",
    title: "Terracotta Brick Composite",
  },
  {
    id: 8,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-09-23%20at%2013.56.11_e837c216-nCTDrVrRaZcPGBUVCJn7H9W4qYKR7t.jpg",
    alt: "Green lattice panels overhead view",
    category: "Wooden Lattice",
    title: "Green Lattice Railing",
  },
  {
    id: 9,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2a9684aefbc3e1036cb4ba80e168a95d-QcAxNVftmQiggrItFfxHUIQu0xbVgY.jpg",
    alt: "Dark wooden lattice with organic leaf cutouts",
    category: "Wooden Lattice",
    title: "Artistic Leaf Pattern",
  },
  {
    id: 10,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-09-23%20at%2013.56.15_3ad1cf5c-ea2l9xMC0xP8sVbKHmDQvULaejKCzs.jpg",
    alt: "White lattice panels with wooden pergola",
    category: "Composite",
    title: "White Lattice with Pergola",
  },
]

export default function DesignGallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [currentIndex, setCurrentIndex] = useState(0)

  const categories = ["All", ...new Set(galleryImages.map((img) => img.category))]

  const filteredImages =
    selectedCategory === "All" ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory)

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1))
    setSelectedImage(filteredImages[currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1])
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === filteredImages.length - 1 ? 0 : prev + 1))
    setSelectedImage(filteredImages[currentIndex === filteredImages.length - 1 ? 0 : currentIndex + 1])
  }

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-light mb-4 text-foreground">Design Inspiration Gallery</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our curated collection of architectural screens and lattice designs showcasing various materials,
            styles, and applications
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category)
                setCurrentIndex(0)
              }}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? "bg-primary text-accent-foreground shadow-lg"
                  : "bg-muted text-foreground hover:bg-primary/20"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredImages.map((image, idx) => (
            <div
              key={image.id}
              onClick={() => {
                setSelectedImage(image)
                setCurrentIndex(idx)
              }}
              className="group relative h-64 overflow-hidden rounded-lg cursor-pointer bg-muted"
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end">
                <div className="w-full p-4 bg-gradient-to-t from-black/80 to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="font-semibold text-sm">{image.title}</p>
                  <p className="text-xs text-gray-300">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative w-full max-w-4xl">
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <X className="w-8 h-8" />
              </button>

              {/* Image Container */}
              <div className="relative h-96 md:h-[600px] overflow-hidden rounded-lg bg-black">
                <Image
                  src={selectedImage.src || "/placeholder.svg"}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Image Info */}
              <div className="mt-6 text-center text-white">
                <h3 className="text-2xl font-light mb-2">{selectedImage.title}</h3>
                <p className="text-gray-400 mb-4">{selectedImage.category}</p>
                <p className="text-sm text-gray-500">
                  {currentIndex + 1} of {filteredImages.length}
                </p>
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-between items-center mt-8">
                <button
                  onClick={handlePrevious}
                  className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <div className="flex gap-2">
                  {filteredImages.map((_, idx) => (
                    <div
                      key={idx}
                      className={`h-1 rounded-full transition-all ${
                        idx === currentIndex ? "w-8 bg-white" : "w-2 bg-white/40"
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={handleNext}
                  className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

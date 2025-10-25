import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aaaf6ad809f0a5213380760abe667c11-ldxkuSlaSQgq3JVmFmqCLRK2gkbBMC.jpg"
            alt="Background"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-primary mb-4 tracking-widest">HERITAGE • INNOVATION • COMFORT</p>
          <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6 text-foreground">Terrace Decor Mysore</h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Transforming outdoor spaces with exquisite pergolas, architectural screens, and skylights that blend
            Mysore's rich heritage with contemporary design excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pergola-collections">
              <Button className="bg-primary hover:bg-primary-dark text-accent-foreground px-8 py-6 text-base">
                Explore Collections
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-accent-foreground px-8 py-6 text-base bg-transparent"
              >
                Start Your Project
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-4 text-foreground">Signature Collections</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our curated range of pergolas, each designed to create unique outdoor experiences that reflect
              your style and enhance your living space.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pergola Collections */}
            <Link href="/pergola-collections" className="group">
              <div className="relative h-80 mb-4 overflow-hidden rounded-lg bg-muted">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/b846abf2fe1f1455163e476c4cfc7d68-ITPUlZ0K04oNi90JXCpiZ6XPPyZR1A.jpg"
                  alt="Pergola Collections"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl font-light mb-2 text-foreground group-hover:text-primary transition-colors">
                Pergola Collections
              </h3>
              <p className="text-muted-foreground">Traditional designs with contemporary functionality</p>
            </Link>

            {/* Skylights */}
            <Link href="/skylights" className="group">
              <div className="relative h-80 mb-4 overflow-hidden rounded-lg bg-muted">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8d686548976729ba93c37c9f8fe1c558-t8qy3xK6wzvt2YDsJh97ww4yxxiYbG.jpg"
                  alt="Skylights"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl font-light mb-2 text-foreground group-hover:text-primary transition-colors">
                Skylights
              </h3>
              <p className="text-muted-foreground">Bring natural light into your outdoor spaces</p>
            </Link>

            {/* Architectural Screens */}
            <Link href="/architectural-screens" className="group">
              <div className="relative h-80 mb-4 overflow-hidden rounded-lg bg-muted">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3340dd6238ed585862ed85d22b558c0b-bJzf0oHmNr7Ie2WYF5ZtSPvFrT59JQ.jpg"
                  alt="Architectural Screens"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl font-light mb-2 text-foreground group-hover:text-primary transition-colors">
                Architectural Screens
              </h3>
              <p className="text-muted-foreground">Create privacy with aesthetic appeal</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-4 text-foreground">From Vision to Reality</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our streamlined process ensures your outdoor transformation is seamless and exceeds expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "01", title: "Consultation", desc: "Understanding your vision and space requirements" },
              { number: "02", title: "Design", desc: "Creating custom solutions tailored to your needs" },
              { number: "03", title: "Installation", desc: "Expert craftsmanship ensuring perfect execution" },
              { number: "04", title: "Support", desc: "Ongoing maintenance and customer care" },
            ].map((step) => (
              <div key={step.number} className="text-center">
                <div className="text-5xl font-light text-primary mb-4">{step.number}</div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-accent-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6">Reimagine Your Terrace</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Transform your outdoor space into a sanctuary of comfort and style. Let us bring your vision to life with
            our expertise and craftsmanship.
          </p>
          <Link href="/contact">
            <Button className="bg-accent-foreground text-primary hover:bg-muted px-8 py-6 text-base font-semibold">
              Start Your Project
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}

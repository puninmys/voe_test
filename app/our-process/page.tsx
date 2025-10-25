import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle, Lightbulb, Pencil, Hammer, Headphones } from "lucide-react"

const processSteps = [
  {
    number: "01",
    title: "Free Site Visit & Consultation",
    icon: Lightbulb,
    description: "We assess your terrace, sunlight, structure, and aesthetic goals to understand your vision.",
    details: [
      "Comprehensive site assessment and measurements",
      "Understanding your style preferences and requirements",
      "Budget and timeline discussion",
      "Climate and structural considerations for Mysore",
    ],
    duration: "1-2 weeks",
  },
  {
    number: "02",
    title: "Custom Design & 3D Preview",
    icon: Pencil,
    description: "Our expert designers create custom solutions with 3D visualization for your approval.",
    details: [
      "3D concept visualization and mockups",
      "Material selection guidance tailored to Mysore's climate",
      "Detailed project specifications and technical drawings",
      "Design approval and refinement based on your feedback",
    ],
    duration: "2-3 weeks",
  },
  {
    number: "03",
    title: "Professional Fabrication & Installation",
    icon: Hammer,
    description: "Our skilled team ensures watertight finish and lasting strength with expert craftsmanship.",
    details: [
      "Premium material sourcing and quality control",
      "Professional installation by experienced team",
      "Minimal disruption to your daily life",
      "Regular progress updates and quality checks",
    ],
    duration: "1-4 weeks",
  },
  {
    number: "04",
    title: "After-Sales Support",
    icon: Headphones,
    description: "We're here for maintenance, cleaning, and upgrades ensuring lasting beauty and functionality.",
    details: [
      "Comprehensive maintenance guidance and tips",
      "Warranty coverage (8-15 years depending on product)",
      "Regular check-ups and preventive maintenance",
      "24/7 customer support for urgent issues",
    ],
    duration: "Ongoing",
  },
]

const whyChooseUs = [
  {
    title: "Heritage & Innovation",
    description: "Blending Mysore's rich architectural heritage with cutting-edge modern design",
  },
  {
    title: "Climate-Smart Solutions",
    description: "Products designed specifically for Mysore's tropical climate and weather patterns",
  },
  {
    title: "Premium Materials",
    description: "Only the highest quality materials for superior durability and weather resistance",
  },
  {
    title: "Expert Craftsmanship",
    description: "Skilled designers and installers dedicated to excellence and precision",
  },
  {
    title: "Transparent Pricing",
    description: "No hidden costs, clear quotes with detailed breakdowns and warranty information",
  },
  {
    title: "Comprehensive Warranty",
    description: "8-15 year warranties with ongoing customer support and maintenance services",
  },
]

export default function OurProcessPage() {
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
          <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-4 text-accent-foreground">Our Process</h1>
          <p className="text-lg text-accent-foreground opacity-90 max-w-2xl mx-auto">
            From vision to reality: A streamlined process ensuring your outdoor transformation exceeds expectations
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-4 text-foreground">From Vision to Reality</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our proven four-step process ensures seamless project execution and exceptional results
            </p>
          </div>

          <div className="space-y-12">
            {processSteps.map((step, idx) => {
              const Icon = step.icon
              const isEven = idx % 2 === 0

              return (
                <div key={step.number} className="relative">
                  {/* Connector Line */}
                  {idx < processSteps.length - 1 && (
                    <div className="absolute left-1/2 top-full w-1 h-12 bg-gradient-to-b from-primary to-transparent transform -translate-x-1/2"></div>
                  )}

                  <div className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center`}>
                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="text-5xl font-light text-primary">{step.number}</div>
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                      </div>

                      <h3 className="text-3xl font-semibold mb-3 text-foreground">{step.title}</h3>
                      <p className="text-lg text-muted-foreground mb-6">{step.description}</p>

                      <div className="mb-6">
                        <h4 className="font-semibold text-foreground mb-3">What's Included:</h4>
                        <ul className="space-y-2">
                          {step.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                              <span className="text-muted-foreground">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="inline-block px-4 py-2 bg-primary/10 rounded-lg">
                        <p className="text-sm font-semibold text-primary">Duration: {step.duration}</p>
                      </div>
                    </div>

                    {/* Image */}
                    <div className="flex-1">
                      <div className="relative h-80 rounded-lg overflow-hidden bg-muted">
                        <Image
                          src={
                            idx === 0
                              ? "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/d6c82d5152d9ac3423a0c284bd2012b8-L3c3ZncXDpwV9yZy2N7ihjZAfrcw4k.jpg"
                              : idx === 1
                                ? "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3497f2381517084fe5a879bad3d13c95-4MjuDTESFr4WrtnNAlRnzwIq5hLWdn.jpg"
                                : idx === 2
                                  ? "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e7c9311eecd850df4b7adcaf40539a98-Ix4qb1Fs039iVkxkRQmtwHjPLHKl2x.jpg"
                                  : "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a205f32b6dd5a50703df9b19bd85fc8b-1kHBMyVyMN1OvqBzpRXd16bI2rZqmr.jpg"
                          }
                          alt={step.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-4 text-foreground">Why Choose Terrace Decor Mysore?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine expertise, quality, and customer care to deliver exceptional outdoor spaces that blend heritage
              with innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((reason, idx) => (
              <Card key={idx} className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">{reason.title}</h3>
                    <p className="text-muted-foreground">{reason.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-4 text-foreground">Project Timeline</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Most projects are completed within 8-12 weeks from initial consultation to final installation
            </p>
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { label: "Consultation", time: "1-2 weeks" },
                { label: "Design Phase", time: "2-3 weeks" },
                { label: "Installation", time: "1-4 weeks" },
                { label: "Final Touches", time: "3-5 days" },
              ].map((phase, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-3xl font-light text-primary mb-2">{phase.time}</div>
                  <p className="font-semibold text-foreground">{phase.label}</p>
                  {idx < 3 && <div className="hidden md:block absolute right-0 top-1/2 w-6 h-0.5 bg-primary/30"></div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-accent-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6">Ready to Transform Your Outdoor Space?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Let's start your journey with a free consultation. Our experts are ready to bring your vision to life.
          </p>
          <Link href="/contact">
            <Button className="bg-accent-foreground text-primary hover:bg-muted px-8 py-6 text-base font-semibold">
              Schedule Your Consultation
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}

"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["7795795188"],
    description: "Call us during business hours",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@terracedecorlmysore.com", "projects@terracedecorlmysore.com"],
    description: "We respond within 24 hours",
  },
  {
    icon: MapPin,
    title: "Location",
    details: ["Mysore, Karnataka", "Serving surrounding areas"],
    description: "Visit our showroom",
  },
  {
    icon: Clock,
    title: "Hours",
    details: ["Mon - Sat: 9:00 AM - 6:00 PM", "Sun: 10:00 AM - 4:00 PM"],
    description: "Available for consultations",
  },
]

const faqs = [
  {
    question: "What is the typical project timeline?",
    answer:
      "Most projects take 8-12 weeks from initial consultation to final installation. This includes design phase (2-3 weeks), material sourcing, and installation (1-4 weeks). Rush projects can be accommodated with additional fees.",
  },
  {
    question: "Do you offer custom designs?",
    answer:
      "Yes! We specialize in custom designs tailored to your specific needs and space. Our design team will work with you to create a unique solution that perfectly matches your vision and budget.",
  },
  {
    question: "What warranty do you provide?",
    answer:
      "We provide comprehensive warranties ranging from 8-15 years depending on the product. All installations include workmanship warranty and material defect coverage. Extended warranties are also available.",
  },
  {
    question: "Do you handle maintenance and repairs?",
    answer:
      "Yes, we offer ongoing maintenance services and repairs. We provide maintenance guidance, regular check-ups, and emergency support. Our team is available 24/7 for urgent issues.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We primarily serve Mysore and surrounding areas within a 50km radius. For projects outside this area, we can provide recommendations or arrange special installations. Contact us for specific location inquiries.",
  },
  {
    question: "How do I get a quote?",
    answer:
      "Contact us through this form, phone, or email to schedule a free consultation. Our team will visit your space, understand your requirements, and provide a detailed quote within 3-5 business days.",
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: "", email: "", phone: "", projectType: "", message: "" })
    }, 3000)
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-80 flex items-center justify-center bg-gradient-to-br from-primary to-primary-dark">
        <div className="absolute inset-0 opacity-20">
          <Image src="/luxury-outdoor-terrace-with-pergola.jpg" alt="Background" fill className="object-cover" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-4 text-accent-foreground">Contact Us</h1>
          <p className="text-lg text-accent-foreground opacity-90 max-w-2xl mx-auto">
            Let's discuss your outdoor transformation. Reach out to our team today.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, idx) => {
              const Icon = info.icon
              return (
                <Card key={idx} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground">{info.title}</h3>
                  <div className="space-y-1 mb-3">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-sm font-medium text-primary">
                        {detail}
                      </p>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground">{info.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-light mb-2 text-foreground">Send us a Message</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your name"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="+91 9876543210"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-foreground mb-2">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select a project type</option>
                    <option value="pergola">Pergola Collections</option>
                    <option value="skylights">Skylights</option>
                    <option value="screens">Architectural Screens</option>
                    <option value="custom">Custom Design</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-dark text-accent-foreground py-3 font-semibold flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </Button>

                {submitted && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                    Thank you! We've received your message and will get back to you soon.
                  </div>
                )}
              </form>
            </div>

            {/* Info & Map */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-light mb-2 text-foreground">Why Contact Us?</h2>
                <p className="text-muted-foreground mb-6">
                  Our team of experts is ready to help you transform your outdoor space. Whether you're looking for a
                  specific product or a complete custom design, we have the expertise and experience to deliver
                  exceptional results.
                </p>

                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg h-fit">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Quick Response</h4>
                      <p className="text-sm text-muted-foreground">We respond to all inquiries within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg h-fit">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Local Expertise</h4>
                      <p className="text-sm text-muted-foreground">
                        Deep knowledge of Mysore's climate and architectural styles
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg h-fit">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Flexible Scheduling</h4>
                      <p className="text-sm text-muted-foreground">
                        Consultations available at times that work for you
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="relative h-80 rounded-lg overflow-hidden bg-muted border border-border">
                <Image src="/luxury-outdoor-terrace-with-pergola.jpg" alt="Location" fill className="object-cover" />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <div className="text-center text-white">
                    <MapPin className="w-12 h-12 mx-auto mb-2" />
                    <p className="font-semibold">Mysore, Karnataka</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-4 text-foreground">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions about our services and process
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <Card key={idx} className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-accent-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6">Ready to Get Started?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Schedule your free consultation today and let's discuss how we can transform your outdoor space.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-accent-foreground text-primary hover:bg-muted px-8 py-6 text-base font-semibold">
              Call Now
            </Button>
            <Button
              variant="outline"
              className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-primary px-8 py-6 text-base font-semibold bg-transparent"
            >
              Email Us
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

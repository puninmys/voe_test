import React from "react";
import "./Services.css";

const services = [
  {
    image: "application.jpg",
    title: "Application Assistance",
    desc: "Get expert help with applications, SOPs, and essays to boost your admission chances.",
    features: [
      "Application screening",
      "SOP guidance",
      "Document prep",
      "Submission support",
    ],
  },
  {
    image: "va.jpg",
    title: "Visa Assistance",
    desc: "Complete visa support including documentation, verification, and mock interviews.",
    features: [
      "Visa forms",
      "Document verification",
      "Mock interviews",
      "Submission support",
    ],
  },
  {
    image: "lg.jpg",
    title: "Loan & Financial Guidance",
    desc: "Assistance with education loans, scholarships, and financial planning.",
    features: [
      "Loan guidance",
      "Scholarship support",
      "Financial planning",
      "Forex & travel help",
    ],
  },
  {
    image: "tb.jpg",
    title: "Test Preparation",
    desc: "Support for booking and preparing for IELTS, TOEFL, GRE, GMAT, and more.",
    features: [
      "Test booking",
      "Coaching selection",
      "Study materials",
      "Mock tests",
    ],
  },
  {
    image: "tg.jpg",
    title: "Pre-departure & Arrival",
    desc: "Guidance on travel, accommodation, and cultural adaptation for a smooth transition.",
    features: [
      "Travel planning",
      "Accommodation support",
      "Cultural briefing",
      "Post-arrival help",
    ],
  },
];

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">What We Provide</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <img
                src={service.image}
                alt={service.title}
                className="service-image"
              />
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <ul className="service-features">
                  {service.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

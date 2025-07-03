import React from "react";
import "./WhyChooseUs.css";

const whyItems = [
  {
    title: "Personalized Counseling",
    desc: "One-on-one counseling to help you select the ideal country, university, and course that match your career aspirations and academic profile.",
    icon: "application.jpg",
  },
  {
    title: "Extensive Global Network",
    desc: "Partnerships across top universities in USA, UK, Canada, Australia, New Zealand, Ireland, Gulf and European Countries.",
    icon: "gn.jpg",
  },
  {
    title: "Complete Application Assistance",
    desc: "From filling forms to drafting compelling SOPs, we provide detailed application assistance to increase your admission chances.",
    icon: "fl.jpg",
  },
  {
    title: "99% Visa Success Rate",
    desc: "Our skilled team handles complex visa processes with mock interviews, document verification, and expert guidance.",
    icon: "va.jpg",
  },
  {
    title: "Financial & Loan Guidance",
    desc: "Expert financial counseling including loan guidance and scholarship support to fit your budget requirements.",
    icon: "lg.jpg",
  },
  {
    title: "Test Preparation Support",
    desc: "Assistance in booking and preparing for IELTS, TOEFL, GRE, GMAT, and PTE with top coaching centers.",
    icon: "tg.jpg",
  },
  {
    title: "Pre & Post Arrival Support",
    desc: "Complete support including pre-departure briefings, cultural adaptation advice, and post-arrival assistance.",
    icon: "pp.jpg",
  },
  {
    title: "Trusted Experience",
    desc: "Years of experience with transparent processes, prioritizing honesty and student satisfaction throughout your journey.",
    icon: "trust.jpg",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose" className="why-choose">
      <div className="container">
        <h2 className="section-title">Why Choose Us</h2>
        <div className="why-grid">
          {whyItems.map((item, index) => (
            <div className="why-card" key={index}>
              <img src={item.icon} alt={item.title} className="why-image" />
              <div className="why-content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

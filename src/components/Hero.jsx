import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span>🌟 Trusted guidance for your global career</span>
          </div>
          <h1 className="hero-title">
            We Open Doors to International Opportunities
          </h1>
          <p className="hero-subtitle">
            Secure Your Seat in Top International Universities! Trusted
            Consultants for Your Global Dreams!
          </p>
          <div className="hero-features">
            <div className="feature-highlight">
              <i className="fas fa-user-tie"></i>
              <span>One-on-One Personalized Counseling Sessions</span>
            </div>
            <div className="feature-highlight">
              <i className="fas fa-headset"></i>
              <span>24/7 Student Support Even After Admission</span>
            </div>
          </div>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">
              Connect with Expert Counsellors
            </a>
            <a href="#services" className="btn btn-secondary">
              Explore Services
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-card">
            <img
              src="https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Study Abroad"
              className="hero-img"
            />
            <div className="floating-card">
              <div className="card-icon">🎓</div>
              <div className="card-text">
                <h4>99% Visa Success</h4>
                <p>Proven track record</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

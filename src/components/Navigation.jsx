import React from "react";

const Navigation = () => {
  return (
    <nav class="navbar">
      <div class="nav-container">
        <div class="nav-logo">
          <h2>VOE Overseas Education</h2>
        </div>
        <div class="nav-menu" id="nav-menu">
          <a href="#home" class="nav-link">
            Home
          </a>
          <a href="#services" class="nav-link">
            Services
          </a>
          <a href="#about" class="nav-link">
            About
          </a>
          <a href="#why-choose" class="nav-link">
            Why Choose Us
          </a>
          <a href="#contact" class="nav-link">
            Contact
          </a>
        </div>
        <div class="nav-toggle" id="nav-toggle">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <h3>VOE Overseas Education</h3>
            <p>
              Your trusted partner for international education. We open doors to
              global opportunities and help you achieve your academic dreams.
            </p>
            <div class="social-links">
              <a href="#">
                <FaFacebook />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <FaLinkedin />
              </a>
              <a href="#">
                <FaYoutube />
              </a>
            </div>
          </div>
          <div class="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div class="footer-section">
            <h4>Our Services</h4>
            <ul>
              <li>
                <a href="#services">Application Assistance</a>
              </li>
              <li>
                <a href="#services">Visa Assistance</a>
              </li>
              <li>
                <a href="#services">Scholarship Guidance</a>
              </li>
              <li>
                <a href="#services">Test Preparation</a>
              </li>
            </ul>
          </div>
          <div class="footer-section">
            <h4>Study Destinations</h4>
            <ul>
              <li>
                <a href="#">United States</a>
              </li>
              <li>
                <a href="#">United Kingdom</a>
              </li>
              <li>
                <a href="#">Canada</a>
              </li>
              <li>
                <a href="#">Australia</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2024 VOE Overseas Education. All rights reserved.</p>
          <div class="footer-keywords">
            <span>overseas study consultants</span> |
            <span>study abroad consultants</span> |
            <span>overseas education consultants</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

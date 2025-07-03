import React from "react";
import {
  FaClock,
  FaPhoneAlt,
  FaGraduationCap,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Connect with Our Expert Counsellors</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Get Your Free Consultation</h3>
            <p>
              Ready to start your study abroad journey? Our expert counsellors
              are here to guide you every step of the way. Book your free
              consultation today!
            </p>

            <div className="contact-features">
              <div className="contact-feature">
                <FaClock className="contact-feature-icon" />
                <div>
                  <h4>24/7 Support</h4>
                  <p>Round-the-clock assistance even after admission</p>
                </div>
              </div>
              <div className="contact-feature">
                <FaPhoneAlt className="contact-feature-icon" />
                <div>
                  <h4>Instant Response</h4>
                  <p>Quick response to all your queries</p>
                </div>
              </div>
              <div className="contact-feature">
                <FaGraduationCap className="contact-feature-icon" />
                <div>
                  <h4>Expert Guidance</h4>
                  <p>Industry experts with years of experience</p>
                </div>
              </div>
            </div>

            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <div>
                <h4>Phone</h4>
                <p>+91 98765 43210</p>
              </div>
            </div>
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <div>
                <h4>Email</h4>
                <p>info@voeoverseas.com</p>
              </div>
            </div>
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <div>
                <h4>Location</h4>
                <p>Multiple locations across India</p>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <form>
              <div className="form-row">
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <input type="tel" placeholder="Your Phone" required />
                </div>
                <div className="form-group">
                  <select required>
                    <option value="">Preferred Destination</option>
                    <option value="usa">United States</option>
                    <option value="uk">United Kingdom</option>
                    <option value="canada">Canada</option>
                    <option value="australia">Australia</option>
                    <option value="newzealand">New Zealand</option>
                    <option value="ireland">Ireland</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <select required>
                  <option value="">Service Required</option>
                  <option value="counseling">Career Counseling</option>
                  <option value="application">Application Assistance</option>
                  <option value="visa">Visa Assistance</option>
                  <option value="scholarship">Scholarship Guidance</option>
                  <option value="loan">Loan Guidance</option>
                  <option value="test">Test Preparation</option>
                </select>
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" rows="4"></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-full">
                Book Free Consultation
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

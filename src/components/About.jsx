import React from "react";

const About = () => {
  return (
    <section id="about" class="about">
      <div class="container">
        <div class="about-content">
          <div class="about-text">
            <h2 class="section-title">About VOE Overseas Education</h2>
            <p class="about-description">
              At VOE Overseas Education, we believe that every student deserves
              the opportunity to explore the world and unlock their true
              academic potential. As one of the most trusted names among
              overseas study consultants, we specialize in offering
              comprehensive, personalized solutions for students who aspire to
              study at leading universities across the globe.
            </p>
            <p class="about-description">
              With a highly experienced team of overseas education consultants,
              we guide students at every stage — from shortlisting the right
              universities to securing admissions, scholarships, visa
              processing, and even settling into their new environment.
            </p>

            <div class="mission-vision">
              <div class="mv-item">
                <div class="mv-icon">🎯</div>
                <div class="mv-content">
                  <h4>Our Mission</h4>
                  <p>
                    To empower students by helping them make well-informed
                    decisions regarding their international academic journey,
                    guiding them in selecting the perfect country, university,
                    and program.
                  </p>
                </div>
              </div>

              <div class="mv-item">
                <div class="mv-icon">👁️</div>
                <div class="mv-content">
                  <h4>Our Vision</h4>
                  <p>
                    To make overseas education accessible and stress-free for
                    every learner, creating a seamless pathway to world-class
                    education opportunities.
                  </p>
                </div>
              </div>

              <div class="mv-item">
                <div class="mv-icon">🏆</div>
                <div class="mv-content">
                  <h4>Our Goal</h4>
                  <p>
                    To offer complete end-to-end support that helps students
                    overcome every obstacle in their study abroad journey with
                    personalized attention and expert knowledge.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="about-image">
            <img src="indstudent.jpg" alt="Study Abroad Counseling" />
            <div class="about-stats">
              <div class="about-stat">
                <span class="stat-num">700+</span>
                <span class="stat-text">Partner Universities</span>
              </div>
              <div class="about-stat">
                <span class="stat-num">15+</span>
                <span class="stat-text">Countries</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

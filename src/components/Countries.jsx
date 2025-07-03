import React from "react";
import "./Countries.css";

const countries = [
  {
    flag: "us.png",
    name: "United States",
    desc: "World's leading education system with top-ranked universities",
  },
  {
    flag: "uk.png",
    name: "United Kingdom",
    desc: "Historic universities with excellent research opportunities",
  },
  {
    flag: "canada.png",
    name: "Canada",
    desc: "High-quality education with post-study work opportunities",
  },
  {
    flag: "aus.png",
    name: "Australia",
    desc: "Innovative programs with excellent student support services",
  },
  {
    flag: "nz.png",
    name: "New Zealand",
    desc: "Safe environment with world-class education standards",
  },
  {
    flag: "ir.png",
    name: "Ireland",
    desc: "English-speaking country with strong industry connections",
  },
];

const Countries = () => {
  return (
    <section className="countries">
      <div className="container">
        <h2 className="section-title">Study Destinations</h2>
        <div className="countries-grid">
          {countries.map((country, index) => (
            <div className="country-card" key={index}>
              <div className="country-flag">
                <img src={country.flag} alt={country.name} />
              </div>

              <p>{country.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Countries;

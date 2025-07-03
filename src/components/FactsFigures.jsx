import React, { useEffect, useRef, useState } from "react";
import { GrUserExpert } from "react-icons/gr";
import { FaGlobeAmericas } from "react-icons/fa";
import { GiCommercialAirplane } from "react-icons/gi";
import { GoGoal } from "react-icons/go";
// import "./FactsFigures.css";

const StatItem = ({ icon, target, label, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef();

  useEffect(() => {
    let start = 0;
    const end = parseInt(target);
    if (start === end) return;

    const step = () => {
      start += Math.ceil(end / 50); // increment by fraction
      if (start > end) start = end;
      setCount(start);
      if (start < end) {
        requestAnimationFrame(step);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          step();
          observer.unobserve(ref.current);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [target]);

  return (
    <div className="stat-item" ref={ref}>
      <div className="stat-icon">{icon}</div>
      <div className="stat-number">
        {count}
        {suffix}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
};

const FactsFigures = () => {
  return (
    <section className="stats">
      <div className="container">
        <h2 className="section-title">Facts & Figures</h2>
        <div className="stats-grid">
          <StatItem
            icon={<GrUserExpert />}
            target="50"
            label="Industry Expert Consultants"
            suffix="+"
          />
          <StatItem
            icon={<FaGlobeAmericas />}
            target="700"
            label="Partner Universities Worldwide"
            suffix="+"
          />
          <StatItem
            icon={<GiCommercialAirplane />}
            target="99"
            label="Visa Success Rate"
            suffix="%"
          />
          <StatItem
            icon={<GoGoal />}
            target="15"
            label="Years of Excellence"
            suffix="+"
          />
        </div>
      </div>
    </section>
  );
};

export default FactsFigures;

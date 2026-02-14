import React from "react";
import "./about.css";

export default function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        <h2 className="about-title">Our Vision & Mission</h2>

        <div className="about-grid">
          <div className="about-card">
            <h3>Our Vision</h3>
            <p>
              To be the Service Provider of Choice for Integrated Facilities
              Management and Engineering Services across the GCC.
            </p>
          </div>

          <div className="about-card">
            <h3>Our Mission</h3>
            <p>
              Deliver innovative solutions with professionalism, efficiency, and
              service excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

import "./App.css";

function App() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">AL REHAAN</h2>
        <ul>
          <li>
            <a href="#about">About us</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#clients">Clients</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Professional Technical & Renovation Services in Dubai</h1>
          <p>
            Delivering Excellence in Facilities Management, Renovation,
            Electrical, Plumbing & HVAC Solutions.
          </p>
          <a href="#contact" className="btn">
            Get a Quote
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <h2>About Us</h2>
        <div className="grid-2">
          <div className="card">
            <h3>Our Vision</h3>
            <p>
              To be the Service Provider of Choice for Integrated Facilities
              Management and Engineering Services across the GCC.
            </p>
          </div>

          <div className="card">
            <h3>Our Mission</h3>
            <p>
              To deliver innovative solutions with professionalism, efficiency,
              and superior service quality.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="section bg-light">
        <h2>Our Services</h2>
        <div className="services-grid">
          {[
            "Commercial Fit-Outs",
            "Interior Design & Renovation",
            "Exterior Renovation",
            "Project Management",
            "Floor Tile Installation",
            "Kitchen & Bathroom Remodeling",
            "Plumbing Services",
            "Electrical Installation",
            "Painting & Crack Filling",
            "Plastering Work",
            "HVAC Installation",
          ].map((service, index) => (
            <div className="service-card" key={index}>
              {service}
            </div>
          ))}
        </div>
      </section>

      {/* Clients */}
      <section id="clients" className="section">
        <h2>Our Prestigious Clients</h2>
        <div className="clients">
          <div className="client-card">Living Legends</div>
          <div className="client-card">Warsan Village</div>
          <div className="client-card">Supermarket</div>
          <div className="client-card">Commercial Projects</div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section contact-section">
        <h2>Contact Us</h2>
        <p>📍 Ras Al Khor Industrial 2, Dubai, UAE</p>
        <p>📧 rehaan.ts2025@gmail.com</p>
        <p>📞 +971-526572524 | +971-582191260</p>
      </section>

      {/* Footer */}
      <footer className="footer">
        © 2026 AL REHAAN AL ABYAD TECHNICAL SERVICE L.L.C | All Rights Reserved
      </footer>
    </div>
  );
}

export default App;

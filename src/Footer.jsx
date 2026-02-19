import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Contact Information */}
        <div className="footer-section">
          <h3>Get in Touch</h3>
          <p>
            <strong>Name:</strong> REHAAN
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:rehaan.ts2025@gmail.com">rehaan.ts2025@gmail.com</a>
          </p>
          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:+971526572524">+971-526572524</a>
          </p>
          <p>
            <strong>WhatsApp:</strong>{" "}
            <a
              href="https://wa.me/971526572524"
              target="_blank"
              rel="noopener noreferrer"
            >
              +971-526572524
            </a>
          </p>
          <p>
            <strong>Alternate Phone:</strong>{" "}
            <a href="tel:+971582191260">+971-582191260</a>
          </p>
        </div>

        {/* Operational Head */}
        <div className="footer-section">
          <h3>Operational Head</h3>
          <p>Musthafa Khan Firthose Hameed Khan</p>
          <p>
            Phone & WhatsApp:{" "}
            <a
              href="https://wa.me/971526572524"
              target="_blank"
              rel="noopener noreferrer"
            >
              +971-526572524
            </a>
          </p>
        </div>

        {/* Address */}
        <div className="footer-section">
          <h3>Address</h3>
          <p>
            SMARK 2 – OFF 4 #33
            <br />
            Ras al Khor Industrial Second
            <br />
            Dubai, United Arab Emirates
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} WARSAN VILLAGE REHAAN. All Rights Reserved.
      </div>
    </footer>
  );
}

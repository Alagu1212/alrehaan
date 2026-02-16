import { motion } from "framer-motion";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-container">
      <motion.div
        className="footer-content"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="footer-title">Get In Touch</h2>

        <div className="footer-info">
          <p>
            <span>Email:</span> rehaan.ts2025@gmail.com
          </p>
          <p>
            <span>Phone:</span> +971-526572524
          </p>
          <p>
            <span>Location:</span> Dubai, UAE
          </p>
        </div>

        <div className="footer-bottom">
          © {new Date().getFullYear()} Rehaan Technical Services. All Rights
          Reserved.
        </div>
      </motion.div>
    </footer>
  );
}

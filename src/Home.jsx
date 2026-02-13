import { motion } from "framer-motion";
import "./home.css";

export default function Home() {
  return (
    <section className="hero">
      <div className="overlay"></div>

      <div className="hero-content">
        <motion.h1
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="hero-title"
        >
          AL REHAAN AL ABYAD <br />
          TECHNICAL SERVICE L.L.C
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="hero-subtitle"
        >
          Integrated Facilities Management & Engineering Services Across UAE
        </motion.p>

        <motion.a
          href="/contact"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="hero-btn"
        >
          Get Free Consultation
        </motion.a>
      </div>
    </section>
  );
}

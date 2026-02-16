import { motion } from "framer-motion";
import "./Clients.css";

export default function Clients() {
  const clients = [
    "Living Legends",
    "Warsan Village",
    "Supermarket",
    "Commercial Projects",
  ];

  return (
    <div className="clients-container">
      <h2 className="clients-title">Our Prestigious Clients</h2>

      <div className="clients-grid">
        {clients.map((client, index) => (
          <motion.div
            key={index}
            className="client-card"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            {client}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

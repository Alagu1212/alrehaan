import { motion } from "framer-motion";
import "./Services.css";

export default function Services() {
  const services = [
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
    "HVAC Installation & Maintenance",
  ];

  return (
    <div className="services-container" id="services">
      <h2 className="services-title">Our Services</h2>

      <div className="services-grid">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="service-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true }}
          >
            <h3>{service}</h3>
            <p className="service-description">
              Professional and reliable service delivered with excellence.
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

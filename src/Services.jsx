import { motion } from "framer-motion";
import "./Services.css";

export default function Services() {
  const services = [
    {
      title: "Interior Design & Renovation",
      description:
        "Transforming your interiors with custom designs that combine style, comfort, and practicality.",
    },
    {
      title: "Exterior Renovation",
      description:
        "Enhancing the exterior of your property to boost curb appeal and durability.",
    },
    {
      title: "Kitchen & Bathroom Remodeling",
      description:
        "Upgrading your kitchen and bathrooms with high-end finishes, modern layouts, and functional designs.",
    },
    {
      title: "Floor Tile Preparation & Installation",
      description:
        "Professional preparation of floor surfaces including leveling and cleaning, followed by expert tile installation for a flawless result.",
    },
    {
      title: "Commercial Fit-Outs",
      description:
        "Expertly designing and executing office, retail, hospitality, and other commercial space transformations.",
    },
    {
      title: "Project Management",
      description:
        "Full-scale project management from design to execution, ensuring timely completion and seamless coordination of all services.",
    },
    {
      title: "Plumbing Services",
      description:
        "Complete plumbing services including installation, repair, and maintenance for both residential and commercial properties.",
    },
    {
      title: "Electrical System Installation & Maintenance",
      description:
        "Providing electrical services for system installation, repairs, and regular maintenance to ensure safe and reliable operation.",
    },
    {
      title: "Painting & Crack Filling",
      description:
        "High-quality painting services for both interior and exterior spaces, including crack filling and surface preparation for a smooth professional finish.",
    },
    {
      title: "Plastering Work",
      description:
        "Skilled plastering services for smooth, durable walls and ceilings, ensuring a clean and polished finish that lasts.",
    },
  ];

  return (
    <div className="services-container" id="services">
      <h2 className="services-title">Our Services</h2>

      <p className="services-intro">
        We provide a comprehensive range of renovation, installation, and
        maintenance services for both residential and commercial spaces.
      </p>

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
            <h3>{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

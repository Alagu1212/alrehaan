import { motion } from "framer-motion";

export default function Services() {
  const services = [
    "Commercial Fit-Outs",
    "Interior Design & Renovation",
    "Electrical Installation & Maintenance",
    "Plumbing Services",
    "HVAC Installation & Maintenance",
    "Painting & Crack Filling",
    "Kitchen & Bathroom Remodeling",
  ];

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-20">
      <h2 className="text-4xl font-bold text-center text-blue-800 mb-12">
        Our Services
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-xl p-6 rounded-xl text-center"
          >
            <h3 className="text-xl font-semibold">{service}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

import { motion } from "framer-motion";
import "./design.css";

export default function Design() {
    const designServices = [
        {
          title: "Villa Design",
          image:
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
          desc: "Luxurious and sophisticated villa interiors designed with premium materials, spacious layouts, and timeless architecture."
        },
        {
          title: "Apartment Design",
          image:
            "https://images.unsplash.com/photo-1600607687644-c7171b42498f",
          desc: "Smart layouts and stylish interiors designed to maximize apartment space and create modern living environments."
        },
        {
          title: "Commercial Interior",
          image:
            "https://images.unsplash.com/photo-1497366216548-37526070297c",
          desc: "Professional office, retail and hospitality interior designs that combine functionality and modern aesthetics."
        },
        {
          title: "Exterior Renovation",
          image:
            "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6",
          desc: "Enhancing building exteriors with modern architectural elements to improve durability and curb appeal."
        },
        {
          title: "Kitchen Remodeling",
          image:
            "https://images.unsplash.com/photo-1556911220-e15b29be8c8f",
          desc: "Modern kitchen layouts with high-end finishes, smart storage, and elegant interior styling."
        },
        {
          title: "Bathroom Remodeling",
          image:
            "https://images.unsplash.com/photo-1584622650111-993a426fbf0a",
          desc: "Luxury bathroom renovation with premium tiles, modern fittings, and comfortable functional design."
        }
      ];
    
      return (
        <div className="design-container">
    
          <motion.h1
            className="design-title"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Interior & Exterior Design
          </motion.h1>
    
          <p className="design-subtitle">
            We transform residential and commercial spaces with innovative
            interior and exterior designs that combine style, comfort,
            and functionality.
          </p>
    
          <div className="design-grid">
            {designServices.map((item, index) => (
              <motion.div
                className="design-card"
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <img src={item.image} alt={item.title} />
    
                <h3>{item.title}</h3>
    
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      );
    }
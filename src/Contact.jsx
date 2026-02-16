import { motion } from "framer-motion";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact-container">
      <motion.div
        className="contact-card"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="contact-title">Request a Quotation</h2>

        <form className="contact-form">
          <div className="form-group">
            <label>Client Name</label>
            <input type="text" placeholder="Enter your full name" required />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input type="email" placeholder="Enter your email" required />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              placeholder="Enter your contact number"
              required
            />
          </div>

          <div className="form-group">
            <label>Select Service</label>
            <select required>
              <option value="">Choose a service</option>
              <option>Commercial Fit-Outs</option>
              <option>Interior Design & Renovation</option>
              <option>Exterior Renovation</option>
              <option>Project Management</option>
              <option>Floor Tile Installation</option>
              <option>Kitchen & Bathroom Remodeling</option>
              <option>Plumbing Services</option>
              <option>Electrical Installation</option>
              <option>Painting & Crack Filling</option>
              <option>Plastering Work</option>
              <option>HVAC Installation & Maintenance</option>
            </select>
          </div>

          <div className="form-group">
            <label>Project Location</label>
            <input type="text" placeholder="Enter project location" />
          </div>

          <div className="form-group">
            <label>Project Details</label>
            <textarea
              rows="4"
              placeholder="Describe your project requirements..."
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            Get Free Consultation
          </button>
        </form>
      </motion.div>
    </div>
  );
}

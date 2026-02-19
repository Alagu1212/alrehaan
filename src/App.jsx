import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Services from "./Services";

import Clients from "./Clients";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Navbar />

        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />

            <Route path="/clients" element={<Clients />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

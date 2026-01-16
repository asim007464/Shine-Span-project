import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Homecomponents/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Homecomponents/Footer";
import About from "./pages/About";
import ScrollToTop from "./ScrollToTop"; // Import the new component
import Services from "./pages/Services";
import Contact from "./pages/Contact";
const App = () => {
  return (
    <Router>
      {/* Add ScrollToTop here */}
      <ScrollToTop />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />

        {/* Add your other routes here */}
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;

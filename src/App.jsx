import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Homecomponents/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Homecomponents/Footer";
import About from "./pages/About";
import ScrollToTop from "./ScrollToTop";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
const App = () => {
  return (
    <Router>
      {/* Add ScrollToTop here */}
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />}></Route>

        {/* Add your other routes here */}
      </Routes>
    </Router>
  );
};

export default App;

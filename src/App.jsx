import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Homecomponents/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Homecomponents/Footer";
const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer></Footer>
    </Router>
  );
};

export default App;

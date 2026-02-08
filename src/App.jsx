import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Homecomponents/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Homecomponents/Footer";
import About from "./pages/About";
import ScrollToTop from "./ScrollToTop";
import Services from "./pages/Services";
import BookingCalculator from "./pages/BookingCalculator";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CleanerApplication from "./pages/Cleanerapplication";
import ChatBox from "./components/Homecomponents/ChatBox";
import JoinTeam from "./pages/JoinTeam";
import PricingGuide from "./pages/PricingGuide";
import ClientRegistration from "./pages/Clientregisteration";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import WebsiteGuard from "./pages/WebsiteGuard";
const App = () => {
  return (
    <Router>
      {/* Add ScrollToTop here */}
      <WebsiteGuard></WebsiteGuard>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/PricingGuide" element={<PricingGuide />}></Route>
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/TermsAndConditions" element={<TermsAndConditions />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route
          path="/BookingCalculator"
          element={<BookingCalculator />}
        ></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />}></Route>
        <Route
          path="/cleanerapplication"
          element={<CleanerApplication />}
        ></Route>
        <Route
          path="/ClientRegistration"
          element={<ClientRegistration />}
        ></Route>
        {/* Add your other routes here */}
      </Routes>
      <ChatBox></ChatBox>
    </Router>
  );
};

export default App;

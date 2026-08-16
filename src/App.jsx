import React from "react";
import { Routes, Route } from "react-router-dom";

// import Age from "./Component/Age";
import Header from "./Component/Header";
import Footer from "./Component/Footer";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";

function App() {
  return (
    <div>
      <Header />

      {/* <Age /> */}

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/services" element={<Services />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/login" element={<Login />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
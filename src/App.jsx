import react, { useEffect } from "react";
import Brand from "./Brand";
import BrandContact from "./BrandContact";
import Contact from "./Contact";
import Dedication from "./Dedication";
import Footer from "./Footer";

import Hello from "./Hello";
import Hero from "./Hero";
import Navbar from "./Navbar";
import ScrollToTop from "./ScrollToTop";
import Team from "./Team";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Teams from "./Teams";
function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Hello />
      <Brand />
      <Team />
      <BrandContact />
      <Footer />
      <Dedication />
      <ScrollToTop />
    </main>
  );
}

export default App;

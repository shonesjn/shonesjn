import React, { useEffect } from "react";
import Lenis from "lenis";
import About from "./Components/About";
import Nav from "./Components/Nav";
import Banner from "./Components/Banner";
import Contact from "./Components/Contact";
import Skills from "./Components/Skills";
import Work from "./Components/Work";
import Footer from "./Components/Footer";
import Timeline from "./Components/Timeline";
const App = () => {
    // Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
  return (
    <div className="bg-[#050714] text-white min-h-screen overflow-x-hidden selection:bg-purple-500 selection:text-white">
      <Banner />
      <Nav />
      <About />
      <Timeline />
      <Skills />
      <Work />
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;

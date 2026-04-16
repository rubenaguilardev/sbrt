import { useState } from "react";
import SideBars from "./components/SideBars";
import Navbar from "./components/Navbar";
import MobileMenu from "./components/MobileMenu";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Work from "./components/sections/Work";
import WorkSections from "./components/sections/WorkSections";
import Gallery from "./components/sections/Gallery";
import Testimonials from "./components/sections/Testimonials";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";
import FirefliesBackground from "./components/ui/fireflies";

const App = () => {
  // const [isLoaded, setIsLoaded] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      id="home"
      className="overflow-x-hidden antialiased scroll-smooth relative"
    >
      <FirefliesBackground className="-z-10" />
      <div className={`min-h-screen transition-opacity duration-700`}>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <SideBars />
        <Home />
        <About />
        <Skills />
        <Work />
        <WorkSections />
        <Gallery />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;

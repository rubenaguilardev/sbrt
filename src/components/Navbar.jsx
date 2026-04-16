import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "My Work", href: "#work" },
  { label: "Photography", href: "#gallery" },
  { label: "Say Hi", href: "#contact" },
];

const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setIsScrolled(window.scrollY > 50);
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav
      className={`fixed top-0 w-full z-40 backdrop-blur-lg border-b border-white/10 transition-transform ${showNavbar ? "translate-y-0" : "-translate-y-full"} ${isScrolled ? "bg-slate-950/60" : "bg-transparent"}`}
    >
      <div className=" mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-md md:text-lg font-bold">
            Social
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ·Buffington
            </span>
          </a>

          <div
            className="w-7 h-7 relative cursor-pointer z-40 md:hidden text-2xl"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(({ label, href }) => (
              <a
                href={href}
                className="text-[#94A3B8] hover:text-white transition-colors underline-animation"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

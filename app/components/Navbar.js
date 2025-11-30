"use client";

import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  // Use objects so label can differ from id (e.g. Home vs hero)
  const sections = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "certificates", label: "Certificates" },
    { id: "contact", label: "Contact" },
  ];

  // height offset for fixed navbar (adjust if your navbar is taller/shorter)
  const navHeight = 96;

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + navHeight + 10; // small buffer
      setScrolled(window.scrollY > 50);

      // Find currently visible section
      for (let i = sections.length - 1; i >= 0; i--) {
        const { id } = sections[i];
        const el = document.getElementById(id);
        if (!el) continue;
        if (scrollPos >= el.offsetTop) {
          setActiveSection(id);
          break;
        }
      }
    };

    // Initial detect (in case user reloads mid-page)
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []); // sections is stable constant here

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b border-white/10 ${
        scrolled ? "bg-black/90 shadow-2xl backdrop-blur" : "bg-transparent shadow-none backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center justify-between py-4 px-6 md:px-12 w-full max-w-full">
        {/* Logo */}
        <h1
          className="text-2xl font-bold tracking-wide text-white cursor-pointer hover:text-pink-400 transition-colors duration-300"
          onClick={(e) => handleLinkClick(e, "hero")}
        >
          Shreya<span className="text-pink-400">.</span>
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-10 text-gray-300 font-medium items-center">
          {sections.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => handleLinkClick(e, id)}
              className={`relative pb-1 transition-colors duration-300 ${
                activeSection === id ? "text-pink-400" : "hover:text-pink-400"
              }`}
            >
              {label}
              <span
                className={`absolute left-0 -bottom-1 h-0.5 w-full bg-pink-400 transition-transform duration-300 ${
                  activeSection === id ? "scale-x-100" : "scale-x-0"
                }`}
                style={{ transformOrigin: "left" }}
              />
            </a>
          ))}

          {/* Social Icons */}
          <div className="flex gap-4 ml-6 text-xl">
            <a
              href="https://github.com/Shreya-vashistha"
              target="_blank"
              rel="noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://in.linkedin.com/in/shreya-vashistha27"
              target="_blank"
              rel="noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              <FaLinkedin />
            </a>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl text-white relative z-50 focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Menu Button"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-black/60 backdrop-blur text-gray-200 px-6 pb-4 space-y-2 overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0 py-0"
        }`}
      >
        {sections.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={(e) => handleLinkClick(e, id)}
            className="block py-2 text-lg hover:text-pink-400 transition-colors duration-300"
          >
            {label}
          </a>
        ))}

        {/* Mobile Social Icons */}
        <div className="flex gap-4 mt-2 text-2xl">
          <a
            href="https://github.com/Shreya-vashistha"
            target="_blank"
            rel="noreferrer"
            className="text-gray-300 hover:text-white transition-colors duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://in.linkedin.com/in/shreya-vashistha27"
            target="_blank"
            rel="noreferrer"
            className="text-gray-300 hover:text-white transition-colors duration-300"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </header>
  );
}

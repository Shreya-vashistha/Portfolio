import Navbar from "./components/Navbar.js";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Skills from "./components/Skills.js";
import Projects from "./components/projects.js";
import Contact from "./components/Contact.js";
import Experience from "./components/Experience.js";
import Certificates from "./components/Certificates.js";



export default function home() {
  return (
    <>
      <Navbar />

      <main className="space-y-24 py-10">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Experience/>
        <Certificates/>
        <Contact />
      </main>

      <footer className="text-center text-gray-400 pb-8">
        © 2025 Shreya Vashistha
      </footer>
    </>
  );
}

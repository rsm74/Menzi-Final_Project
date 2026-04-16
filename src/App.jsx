import { useState } from "react";
import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen text-gray-100 bg-gradient-to-br from-black via-[#0b0618] to-[#1a0b2e] font-serif">
      <header className="sticky top-0 z-50 backdrop-blur-md bg-black/40 border-b border-violet-900/30">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-3xl font-serif bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">My Portfolio</h1>
          <nav className="hidden md:flex gap-6 text-sm text-gray-300">
            <a href="#about" className="hover:text-indigo-400 transition">About</a>
            <a href="#experience" className="hover:text-indigo-400 transition">Experience</a>
            <a href="#education" className="hover:text-indigo-400 transitionn">Education</a>
            <a href="#skills" className="hover:text-indigo-400 transition">Skills</a>
            <a href="#contact" className="hover:text-indigo-400 transition">Contact</a>
          </nav>
        </div>
      </header>

      <main className="space-y-10 pb-0">
        <AboutMe />
        <Experience />
        <Education />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
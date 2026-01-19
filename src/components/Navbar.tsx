"use client";

import Link from "next/link";

const scrollToTop = () => window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

export default function Navbar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 px-8 py-4 flex items-center justify-between border-b border-black bg-black/30">

      {/* Nav Links */}
      <div className="flex items-center gap-8 ml-auto">
        <button onClick={scrollToTop} className="text-white hover:text-purple-400">
          Home
          </button>
        <button onClick={() => scrollToSection("experience")} className="text-white hover:text-purple-400">
          Experience
        </button>
        <button onClick={() => scrollToSection("projects")} className="text-white hover:text-purple-400">
          Projects
        </button>
        <button onClick={() => scrollToSection("skills")} className="text-white hover:text-purple-400">
          Skills
        </button>

         {/* Social Icons + Button */}
        <a
          href="https://www.facebook.com/Naomi.Afrin.Jalil"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="text-white/90 hover:text-purple-400 transition"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
            <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-2.9h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4H15.6c-1.2 0-1.6.8-1.6 1.5v1.9H16.7L16.3 15H14v6.9A10 10 0 0 0 22 12z" />
          </svg>
        </a>

        <a
          href="https://www.linkedin.com/in/naomi-jalil-240160227/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-white/90 hover:text-purple-400 transition"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.446-2.136 2.94v5.666H9.35V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.368-1.85 3.6 0 4.266 2.37 4.266 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM6.814 20.452H3.86V9h2.954v11.452z" />
          </svg>
        </a>

         <a
          href="mailto:naomiafrin12@gmail.com"
          aria-label="Email"
          className="text-white/90 hover:text-purple-400 transition"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
            <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.236-8 4.8-8-4.8V6l8 4.8L20 6v2.236z" />
          </svg>
        </a>

        
      </div>

     
    </nav>
  );
}


/*This code creates a fixed navigation bar at the top of a Next.js website.

It runs on the client side ("use client").

Displays a logo, navigation links (Home, Skills, Projects), and a “Let’s Connect” button.

Uses Next.js Link for fast client-side navigation.

Styled with Tailwind CSS for layout, colors, and hover effects.

The navbar stays visible while scrolling (fixed top-0).*/



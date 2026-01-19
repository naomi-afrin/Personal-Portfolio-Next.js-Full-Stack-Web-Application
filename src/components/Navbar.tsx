"use client";

import Link from "next/link";

export default function Navbar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 px-8 py-4 flex items-center justify-between">

      {/* Nav Links */}
      <div className="flex items-center gap-8 ml-auto">
        <Link href="/" className="text-white hover:text-purple-400">
          Home
        </Link>
        <button onClick={() => scrollToSection("experience")} className="text-white hover:text-purple-400">
          Experience
        </button>
        <button onClick={() => scrollToSection("projects")} className="text-white hover:text-purple-400">
          Projects
        </button>
        <button onClick={() => scrollToSection("skills")} className="text-white hover:text-purple-400">
          Skills
        </button>
        
      </div>

      {/* Social Icons + Button */}
      <div className="flex items-center gap-4">
        {/* We'll add social icons later */}
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



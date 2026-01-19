"use client";

import { useState, useEffect, useCallback } from "react";

export default function Banner() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [delta, setDelta] = useState(150);

  const fullName = "Hi! I'm Naomi";

  const tick = useCallback(() => {
    if (!isDeleting) {
      // Typing
      if (text.length < fullName.length) {
        setText(fullName.substring(0, text.length + 1));
      } else {
        // Finished typing, pause then start deleting
        setDelta(1500);
        setIsDeleting(true);
      }
    } else {
      // Deleting
      if (text.length > 0) {
        setText(fullName.substring(0, text.length - 1));
        setDelta(75);
      } else {
        // Finished deleting, start typing again
        setIsDeleting(false);
        setDelta(150);
      }
    }
  }, [text, isDeleting, fullName]);

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [tick, delta]);

  return (
    <section className="pt-32 px-8 md:px-16 min-h-screen flex items-center">
      <div className="flex flex-col md:flex-row items-center justify-between w-full gap-12">
        
        {/* Left side - Text content */}
        <div className="max-w-2xl">

          {/* Welcome badge - styled like reference tagline */}
          <span className="inline-block px-6 py-6 text-white font-bold tracking-wide text-2xl border border-white/50 rounded bg-gradient-to-r from-purple-900/50 via-transparent to-purple-900/50 mb-6">
            Welcome to my Portfolio
          </span>

          {/* Heading with animated typing text */}
          <h1 className="text-white text-5xl md:text-6xl font-bold mb-6">
            {text}
            <span className="text-purple-400 animate-pulse">|</span>
          </h1>

          {/* Short description */}
          <p className="text-gray-400 text-lg mb-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy text
            ever since the 1500s.
          </p>

          {/* Call-to-action button */}
          <button className="text-white flex items-center gap-2 hover:text-purple-400 transition text-lg">
            Let&apos;s Connect
            <span className="text-2xl">→</span>
          </button>
        </div>

        {/* Right side - Profile image */}
       <div className="flex-shrink-0 -translate-x-60">
        {/* Astronaut floating in upper right */}
          <img
            src="/img/astronaut.svg"
            alt="Astronaut"
            className="absolute -top-25 -right-70 w-65 h-65 animate-float"
          />
          {/* Profile image */}
          <img
            src="/img/profile_trans_bg.png"
            alt="Profile picture"
            className="w-78 h-78 md:w-[25rem] md:h-[25rem] object-cover rounded-full border-4 border-purple-500/50"
          />
        </div>

      </div>
    </section>
  );
}

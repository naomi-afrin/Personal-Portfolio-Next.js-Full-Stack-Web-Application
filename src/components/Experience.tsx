"use client";

import { useState } from "react";

const experiences = [
  {
    id: 1,
    company: "bKash Limited",
    title: "Product & Technology Intern",
    team: "Data Science & Engineering (Big Data Team)",
    duration: "September 2025 - January 2026",
    logo: "/img/bKash_logo.webp",
    image: "/img/bkash-intern.jpeg", 
    bullets: [
      "Analyzed and validated 1,000+ data warehouse records, resolving inconsistencies and cutting processing time by ~70% through Python automation.",
      "Designed clear, easy-to-navigate technical documentation focused on usability and faster information lookup.",
      "Created clean, code-based technical visuals to improve readability and long-term maintainability.",
    ],
  },
  {
    id: 2,
    company: "Brac University",
    title: "Undergraduate Teaching Assistant",
    team: "CSE Department",
    duration: "January 2024 - May 2025",
    logo: "/img/bracu_logo.png",
    image: "",
    bullets: [
      "Tutored Programming Language I (CSE110), Programming Language II (CSE111) and Data Structures (CSE220)",
      "Guided students in Python and Java coursework through programming assignments, problem-solving techniques, and core concepts",
      "Provided 60 hours of consultation and lab assistance per month to help students understand and debug code.",
       "Assisted instructors with assignment and quiz script checking, ensuring accuracy and fairness in evaluation."
    ],
  },
  {
    id: 3,
    company: "Brac University",
    title: "Web Master of IEEE Bracu Student Branch", 
    team: "IEEE Bracu Student Branch",
    duration: "October 2022 - December 2025",
    logo: "/img/bracu_logo.png",
    image: "",
    bullets: [
      "Maintained and updated the student branch website to ensure reliability and usability.",
      // "Improved SEO performance",
      "Modified website layout and design for better user experience using HTML, CSS", 
      "Communicated with website hosting providers to ensure continuous uptime and timely payment of hosting fees."
    ],
  },
];

export default function Experience() {
  const [selectedJob, setSelectedJob] = useState(experiences[0]);

  return (
    <section id="experience" className="py-20 px-8 md:px-16">
      {/* Title */}
      <h2 className="text-white text-4xl font-bold mb-12">
        Experience
      </h2>

      {/* Buttons and Description in same container */}
      <div className="flex flex-col md:flex-row items-start">
        {/* Left side - Job buttons */}
        <div className="flex flex-col gap-4">
          {experiences.map((exp) => (
            <button
              key={exp.id}
              onClick={() => setSelectedJob(exp)}
              className="btn-grad flex items-center gap-4 w-100"
            >
              {/* Round image placeholder */}
              <img
                src={exp.logo}
                alt={exp.company}
                className="w-14 h-14 rounded-full bg-black border-2 border-purple-400 object-cover flex-shrink-0"
                />
              {/* Job title */}
              <span className="text-white text-xl font-semibold text-left flex-1">
                {exp.title}
              </span>
            </button>
          ))}
        </div>

        {/* Right side - Description box */}
        <div className="bg-black rounded-lg p-6 ml-30 flex-1 max-w-3xl">
        {/* Top section - Image and info */}
        <div className="flex gap-4 mb-6">
            {/* Photo - only show if exists */}
            {selectedJob.image && (
            <img
                src={selectedJob.image}
                alt={selectedJob.company}
                className="w-40 h-40 object-cover rounded-lg"
            />
            )}
            {/* Company info */}
            <div className="text-white">
            <p className="font-bold text-lg">{selectedJob.company}</p>
            <p className="font-semibold">{selectedJob.title}</p>
            <p className="text-purple-400">{selectedJob.team}</p>
            <p className="text-gray-400">({selectedJob.duration})</p>
            </div>
        </div>

        {/* What I did section */}
        <div className="text-white">
            <p className="font-bold mb-2">What I did:</p>
            <ul className="list-disc list-outside ml-5 space-y-2 text-sm">
            {selectedJob.bullets.map((bullet, index) => (
                <li key={index}>{bullet}</li>
            ))}
            </ul>
        </div>
        </div>
      </div>
    </section>
  );
}
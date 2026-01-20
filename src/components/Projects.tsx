"use client";

import { useState } from "react";

const tabs = [
  { key: "first", label: "Web Development", position: "first" },
  { key: "second", label: "Android Development", position: "middle" },
  { key: "third", label: "ML/AI", position: "middle" },
  { key: "fourth", label: "Hardware Projects", position: "middle" },
{ key: "fifth", label: "Games", position: "last" },
];

const projects = {
  first: [
    { 
      id: 1, 
      title: "Job Seeking Web Application", 
      image: "/img/projects/job_seeker_web.png",
      description: "Silicondoor is a MERN stack–based full-stack web application that helps users find jobs easily. Users can browse companies, search for job openings, and apply directly through the platform, all in one place. ",
      link: "https://github.com/naomi-afrin/jobseeker-mern"
    },
    { 
      id: 2, 
      title: "Food Delivery Web Application", 
      image: "/img/projects/food_delivery_web.png",
      description: "Love For Food is a Django-powered food delivery platform where users can browse local restaurants, view menus, place orders, and securely checkout via PayPal.",
      link: "https://github.com/naomi-afrin/fooddelivery-django"
    },
  ],
  second: [
    { 
      id: 3, 
      title: "AI Sound Detection Smartphone App", 
      image: "/img/projects/phone_app_demo.gif",
      description: "This is a smartphone app that uses custom-trained AI model to detect important sounds in real time. It alerts users through vibration and works with a custom-built headset to locate where the sound is coming from.",
      link: "https://github.com/naomi-afrin/RealTimeSoundAI/tree/main"
    },
    { 
      id: 4, 
      title: "AI Sound Detection Smartwatch App", 
      image: "/img/projects/watch_app_demo.gif",
      description: "This is a smartwatch app that uses custom-trained AI model to detect important sounds in real time. It alerts users through vibration and works with a custom-built headset to locate where the sound is coming from.",
      link: "https://github.com/naomi-afrin/AI-Based-Edge-IoT-Sound-Detection-System/tree/main"
    },
    { 
      id: 5, 
      title: "To Do List App", 
      image: "/img/projects/to-do-list-gif.gif",
      description: "A modern To-Do List app built with Jetpack Compose, featuring dark mode, task prioritization, and smooth animations.",
      link: "https://github.com/naomi-afrin/ToDoList-App-JetpackCompose/tree/main"
    },
    { 
      id: 6, 
      title: "Unit Converter App", 
      image: "/img/projects/unit_converter.gif",
      description: "A simple Android unit converter app that converts kilograms to pounds and features a clean, easy-to-use interface built with Material Design.",
      link: "https://github.com/naomi-afrin/unitConverter/tree/master"
    },
    { 
      id: 7, 
      title: "Click Counter App", 
      image: "/img/projects/click_counter.gif",
      description: "My first Android app, built with Kotlin, that increases a counter each time a button is clicked and updates the value instantly on the screen.",
      link: "https://github.com/naomi-afrin/clickCounter"
    },
  ],
  third: [
    { 
      id: 8, 
      title: "Plant Leaf Disease Segmentation", 
      image: "/img/projects/plant_disease_segmentation.png",
      description: "An AI project that identifies and highlights diseased parts of plant leaves from images, showing exactly where the problem areas are.",
      link: "https://github.com/naomi-afrin/cnn-unet-plant-leaf-segmentation"
    },
    { 
      id: 9, 
      title: "Environmental Sound Classification", 
      image: "/img/projects/sound_classification.png",
      description: "Built a model that listens to sounds and can predict if that sound is a car horn, calling bell, dog bark, scream, or other noises.",
      link: "https://github.com/naomi-afrin/cnn-environmental-sound-classification"
    },
  ],
  fourth: [
    { 
      id: 10, 
      title: "Sound-driven autonomous car", 
      image: "/img/projects/hardware projects/Sound_driven_car.gif",
      description: "",
      link: "https://drive.google.com/file/d/1I79ZMRhuzK4pSA432ISdnGPiusLZPib3/view?usp=sharing"
    },
    { 
      id: 11, 
      title: "Attendence system", 
      image: "/img/projects/hardware projects/Attendence system gif.gif",
      description: "",
      link: "https://drive.google.com/file/d/1SasNwqCd34OpdTayXJbOWCZCTzy8LjoC/view?usp=sharing"
    },
    { 
      id: 12, 
      title: "Sound localization system", 
      image: "/img/projects/hardware projects/Sound localization and classification system gif.gif",
      description: "",
      link: "https://drive.google.com/file/d/1OFOF1djKFo2rybSjP3BNcOEWAjatT6Gc/view?usp=sharing"
    },
    { 
      id: 13, 
      title: "Traffic light system", 
      image: "/img/projects/hardware projects/Traffic light system gif.gif",
      description: "",
      link: "https://drive.google.com/file/d/14KlugGswEM6sPJWlluxn0JOGIxd-7U84/view?usp=sharing"
    },
  ],
  fifth: [
    { 
      id: 12, 
      title: "Snake Game", 
      image: "/img/projects/snake_game.gif",
      description: "Created the Snake game in Pygame, featuring moving food, growing snake length, score tracking, sound effects, and a restartable game-over screen.",
      link: "https://github.com/naomi-afrin/Snake-Game/tree/main"
    },
    { 
      id: 13, 
      title: "Pac-Man Game", 
      image: "/img/projects/pac-man_game.gif",
      description: "Recreated the classic Pac-Man game using Python. Players control Pac-Man through a maze, eat dots, collect power-ups, and avoid ghosts.",
      link: "https://github.com/naomi-afrin/Pac-man/tree/main"
    },
  ],
  
};

export default function Projects() {
  const [activeTab, setActiveTab] = useState("first");

  const getTabClass = (position: string) => {
    if (position === "first") return "project-tab-first";
    if (position === "last") return "project-tab-last";
    return "project-tab-middle";
  };

  return (
    <section id="projects" className="py-20 px-8 md:px-16">
      {/* Container for title, tabs and grid */}
      <div className="projects-container">
        {/* Title */}
        <h2 className="text-white text-4xl font-bold mb-8">
          Projects
        </h2>

        {/* Tabs */}
        <div className="project-tabs mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`project-tab ${getTabClass(tab.position)} ${activeTab === tab.key ? "active" : ""}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-0 mt-4">
        {projects[activeTab as keyof typeof projects].map((project) => (
            <div key={project.id} className="project-card cursor-pointer">
            {/* Slide 1 - Image + Title */}
            <div className="slide slide1 flex-col">
                <div className="w-58 h-32 border-2 border-black rounded-md bg-black flex items-center justify-center overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <h3 className="text-white text-lg font-semibold mt-3">{project.title}</h3>
            </div>
            {/* Slide 2 - Description + Link */}
            <div className="slide slide2">
                <div className="text-left">
                <p className="text-gray-300 mb-8 text-sm leading-snug">{project.description}</p>
                <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 font-medium"
                >
                    Learn More →
                </a>
                </div>
            </div>
            </div>
        ))}
        </div>
      </div>
    </section>
  );
}
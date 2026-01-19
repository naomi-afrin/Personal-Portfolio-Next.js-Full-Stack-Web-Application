import Navbar from "@/components/Navbar"; // Import the Navbar component
import Banner from "@/components/Banner"; // Import the Banner component
import Experience from "@/components/Experience"; // Import the Experience component
import Projects from "@/components/Projects"; // Import the Projects component
import Skills from "@/components/Skills";

export default function Home() { // Main Home page component
  return (
    <main
      className="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: "url('/img/banner-bg.png')" }}
    >
      <Navbar /> {/* Show the navigation bar at the top */}
      <Banner /> {/* Show the banner section */}
      <Experience /> {/* Show the experience section */}
      <Projects /> {/* Show the projects section */}
      <Skills />
    </main>
  );
}

import React, { useState, useEffect } from 'react';
import SplashScreen from './components/SplashScreen/SplashScreen'; // Import the splash screen component
import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import Education from "./components/Education/Education";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Techstack } from "./components/techStack/techstack";
import './CustomCursor.css'; // Import the CSS file for the custom cursor

function App() {
  const [loading, setLoading] = useState(true); // State to manage loading status
  const [hovered, setHovered] = useState(false); // State to manage cursor hover
  const [position, setPosition] = useState({ x: 0, y: 0 }); // State to manage cursor position

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setLoading(false); // Once loading is done, set loading to false
    }, 300); // Adjust the delay as needed
  }, []);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div className={styles.App} onMouseMove={handleMouseMove}>
      {/* Conditionally render the splash screen with the hidden class based on loading state */}
      {loading ? (
        <SplashScreen />
      ) : (
        // Render the main app content once loading is done
        <>
          <div className={`custom-cursor ${hovered ? 'hovered' : ''}`} style={{ left: `${position.x}px`, top: `${position.y}px` }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
          <Navbar />
          <Hero />
          <About />
          <Education />
          <Techstack/>
          <Experience />
          <Projects />
          <Contact />
          <SpeedInsights />
        </>
      )}
    </div>
  );
}

export default App;

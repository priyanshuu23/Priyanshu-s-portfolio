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
// import SplashScreen from './components/SplashScreen/SplashScreen';


function App() {
  return (
    <div className={styles.App}>
      {/* <SplashScreen /> */}
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Techstack/>
      <Experience />
      <Projects />
      <Contact />
      <SpeedInsights />
    </div>
  );
}

export default App;

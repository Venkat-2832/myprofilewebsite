import React, { useContext } from "react";
import Header from "./components/Header";
import MouseTrail from "./Utils/MouseTrail";
import { ThemeContext } from "./context/ThemeContext";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import SectionDivider from "./Utils/SectionDivider";
import Contact from "./components/Contact";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`app ${theme}`}>
      <MouseTrail />
      <Header />

      <section id="about">
        <Profile/>
      </section>
      <SectionDivider />

       <section id="experience">
        <Experience/>
      </section>
      <SectionDivider />

      <section id="projects">
        <Projects />
      </section>
      <SectionDivider />

      <section id="skills">
        <Skills/>
      </section>
      <SectionDivider />   

      <section id="resume">
        <Contact />
      </section>
    </div>
  );
}

export default App;

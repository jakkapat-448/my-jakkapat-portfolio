import React, { useState, useEffect, useRef } from "react";
import "./App.css";

// Components
import Navbar from "./components/Navbar";
import About from "./components/About";
import Experiences from "./components/Experiences";
import Certificates from "./components/Certificates";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const manualScrollRef = useRef(false);
  const scrollTimeoutRef = useRef(null);

  useEffect(() => {
    const userPrefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDarkMode(userPrefersDark);
  }, []);

  const handleScroll = () => {
    if (manualScrollRef.current) return;

    const sections = document.querySelectorAll("section");
    let currentSection = "about";
    let maxVisibility = 0;
    
    const windowHeight = window.innerHeight;
    const windowCenter = window.scrollY + windowHeight / 2;

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const sectionTop = window.scrollY + rect.top;
      const sectionHeight = rect.height;
      const sectionCenter = sectionTop + sectionHeight / 2;
      
      const distanceFromCenter = Math.abs(windowCenter - sectionCenter);
      
      const visibilityScore = 1 - (distanceFromCenter / windowHeight);
      
      const visibleTop = Math.max(0, rect.top);
      const visibleBottom = Math.min(windowHeight, rect.bottom);
      const visibleHeight = Math.max(0, visibleBottom - visibleTop);
      const visibleRatio = visibleHeight / windowHeight;
      
      const totalScore = visibilityScore * 0.7 + visibleRatio * 0.3;
      
      if (totalScore > maxVisibility && visibleRatio > 0.1) {
        maxVisibility = totalScore;
        currentSection = section.id;
      }
    });

    setActiveSection(currentSection);
  };

  useEffect(() => {
    let ticking = false;
    const scrollListener = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", scrollListener);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", scrollListener);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  const handleSectionClick = (sectionId) => {
    manualScrollRef.current = true;
    setActiveSection(sectionId);

    const navbarHeight = document.querySelector(".navbar")?.offsetHeight || 0;
    const offset = navbarHeight + 30;

    const section = document.getElementById(sectionId);
    if (section) {
      const sectionPosition = section.offsetTop - offset;
      window.scrollTo({ top: sectionPosition, behavior: "smooth" });
    }

    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }
    scrollTimeoutRef.current = setTimeout(() => {
      manualScrollRef.current = false;
    }, 1500);
  };

  const handleNavigation = (sectionId) => {
    handleSectionClick(sectionId);
  };

  return (
    <div className={`app ${darkMode ? "dark-mode" : "light-mode"}`}>
      <Navbar
        darkMode={darkMode}
        toggleDarkMode={() => setDarkMode(!darkMode)}
        activeSection={activeSection}
        onNavClick={handleNavigation}
      />

      <main>
        <section id="about" className={activeSection === "about" ? "active" : ""}>
          <About />
        </section>
        <section id="experiences" className={activeSection === "experiences" ? "active" : ""}>
          <Experiences />
        </section>
        <section id="certificates" className={activeSection === "certificates" ? "active" : ""}>
          <Certificates />
        </section>
        <section id="projects" className={activeSection === "projects" ? "active" : ""}>
          <Projects />
        </section>
        <section id="contact" className={activeSection === "contact" ? "active" : ""}>
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
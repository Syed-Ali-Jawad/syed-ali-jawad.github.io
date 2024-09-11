import { useEffect, useState } from "react";
import AboutMe from "../Components/AboutMe";
import Experiences from "../Components/Experiences";
import Intro from "../Components/Intro";
import NavBar from "../Components/NavBar";
import ProjectCard from "../Components/ProjectCard";
import Skills from "../Components/Skills";
import expenseEaseProject from "../assets/ExpenseEase.png";
import ContactMe from "../Components/ContactMe";
import { useNavigate } from "react-router-dom";
import { UpwardArrow } from "../assets/icons";
import { projects } from "./ProjectsPage";

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const handleSroll = () =>
      window.scrollY > 100 ? setScrolled(true) : setScrolled(false);
    window.addEventListener("scroll", () => handleSroll());
    return window.removeEventListener("scroll", () => handleSroll());
  }, []);
  return (
    <>
      <div className="home-page" id="intro">
        <div className="gradient">
          {window.innerWidth <= 768 ? (
            <NavBar scrolled={true} />
          ) : (
            <NavBar scrolled={scrolled} />
          )}
          <Intro />
        </div>
        <AboutMe />
        <Skills />
        <Experiences id="experience" />
        <div className="projects-section" id="projects">
          <h1>My Work & Projects</h1>
          <div className="projects">
            <ProjectCard {...projects[0]} />
            <ProjectCard {...projects[1]} />
          </div>
          <button onClick={() => navigate("/projects")}>View More</button>
        </div>
      </div>
      <ContactMe />
      {window.scrollY > 100 && window.innerWidth > 768 ? (
        <div className="upward-arrow" onClick={() => window.scrollTo(0, 0)}>
          <UpwardArrow />
        </div>
      ) : null}
    </>
  );
}

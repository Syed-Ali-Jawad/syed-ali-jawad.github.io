import { useEffect, useState } from "react";
import AboutMe from "../Components/AboutMe";
import Experiences from "../Components/Experiences";
import Intro from "../Components/intro";
import NavBar from "../Components/NavBar";
import ProjectCard from "../Components/ProjectCard";
import Skills from "../Components/Skills";
import expenseEaseProject from "../assets/ExpenseEase.png";
import ContactMe from "../Components/ContactMe";
import { useNavigate } from "react-router-dom";
import { UpwardArrow } from "../assets/icons";

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
            <ProjectCard
              name="ShopCo"
              description="ShopCo is a practice project showcasing a clothing e-commerce platform developed with Angular and Angular Material. It features a sleek, responsive design that provides a smooth browsing experience. The application utilizes an API to dynamically fetch and display product information, allowing users to explore a wide range of fashion items seamlessly."
              image="ShopCo.png"
              link="https://syed-ali-jawad.github.io/ShopCo/home"
            />
            <ProjectCard
              name="ExpenseEase"
              description="ExpenseEase is a comprehensive expense and income tracking React application. It allows users to add and manage expenses across various categories, and incomes from different sources and accounts. The application visualizes financial data through interactive line charts, pie charts, and detailed tables, enabling users to easily track and analyze their financial activities."
              image="ExpenseEase.png"
              link="https://syed-ali-jawad.github.io/ExpenseEase/"
            />
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

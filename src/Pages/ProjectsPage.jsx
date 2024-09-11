import NavBar from "../Components/NavBar";
import ProjectCard from "../Components/ProjectCard";
import ContactMe from "../Components/ContactMe";
import { UpwardArrow } from "../assets/icons";
import { useEffect } from "react";

export default function ProjectsPage() {
  const projects = [
    {
      name: "ShopCo",
      description:
        "ShopCo is a practice project showcasing a clothing e-commerce platform developed with Angular and Angular Material. It features a sleek, responsive design that provides a smooth browsing experience. The application utilizes an API to dynamically fetch and display product information, allowing users to explore a wide range of fashion items seamlessly.",
      image: "ShopCo.png",
      link: "https://syed-ali-jawad.github.io/ShopCo/home",
    },
    {
      name: "ExpenseEase",
      description:
        "ExpenseEase is a comprehensive expense and income tracking React application. It allows users to add and manage expenses across various categories, and incomes from different sources and accounts. The application visualizes financial data through interactive line charts, pie charts, and detailed tables, enabling users to easily track and analyze their financial activities.",
      image: "ExpenseEase.png",
      link: "https://syed-ali-jawad.github.io/ExpenseEase/",
    },

    {
      name: "TempTeller",
      description:
        "Developed TempTeller, a weather forecast website that provides real-time weather updates based on user location or manual city input. The application stores and displays the forecast data of the last searched city in case of no location access and functions effectively with or without location permissions.",
      image: "TempTeller.png",
      link: "https://syed-ali-jawad.github.io/TempTeller/",
    },
    {
      name: "Mediplus",
      description:
        "Landing Page inspired by Tralive ColarLib theme developed using TailwindCSS, HTML and JavaScript.",
      image: "MediPlus.png",
      link: "https://syed-ali-jawad.github.io/MediPlus/",
    },
    {
      name: "Tralive",
      description:
        "Landing Page inspired by Tralive ColarLib theme developed on pure HTML CSS.",
      image: "TraliveProject.png",
      link: "https://syed-ali-jawad.github.io/Tralive-Project/",
    },
    {
      name: "The Book Store",
      description:
        "An e-commerce platform with roles for buyers, sellers, and admin. Buyers and sellers can create accounts to purchase and sell books, while the admin can track book sales by date.",
      image: "TheBookStore.png",
    },
    {
      name: "Todo List",
      description:
        "A todo list application that allows users to track task statuses, monitor deadlines with countdown timers, and attach images relevant to each task.",
      image: "TodoListProject.png",
    },
  ];
  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <>
      <div id="projects">
        <NavBar scrolled={true} />
        <div className="projects-section" style={{ marginTop: "3%" }}>
          <h1>My Work & Projects</h1>
          <div className="projects">
            {projects.map((project) => (
              <ProjectCard {...project} />
            ))}
            <div></div>
          </div>
        </div>
        <ContactMe />
      </div>
      {window.scrollY > 100 && window.innerWidth > 768 ? (
        <div className="upward-arrow" onClick={() => window.scrollTo(0, 0)}>
          <UpwardArrow />
        </div>
      ) : null}
    </>
  );
}

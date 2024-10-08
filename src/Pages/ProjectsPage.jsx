import NavBar from "../Components/NavBar";
import ProjectCard from "../Components/ProjectCard";
import ContactMe from "../Components/ContactMe";
import { UpwardArrow } from "../assets/icons";
import { useEffect, useState } from "react";
import ShopCo from "../assets/ShopCo.png";
import ExpenseEase from "../assets/ExpenseEase.png";
import TempTeller from "../assets/TempTeller.png";
import MediPlus from "../assets/MediPlus.png";
import TraliveProject from "../assets/TraliveProject.png";
import TheBookStore from "../assets/TheBookStore.png";
import TodoListProject from "../assets/TodoListProject.png";

export const projects = [
  {
    name: "ShopCo",
    description:
      "ShopCo is a practice project showcasing a clothing e-commerce platform developed with Angular and Angular Material. It features a sleek, responsive design that provides a smooth browsing experience. The application utilizes an API to dynamically fetch and display product information, allowing users to explore a wide range of fashion items seamlessly.",
    image: ShopCo,
    link: "https://syed-ali-jawad.github.io/ShopCo/home",
  },
  {
    name: "ExpenseEase",
    description:
      "ExpenseEase is a comprehensive expense and income tracking React application. It allows users to add and manage expenses across various categories, and incomes from different sources and accounts. The application visualizes financial data through interactive line charts, pie charts, and detailed tables, enabling users to easily track and analyze their financial activities.",
    image: ExpenseEase,
    link: "https://syed-ali-jawad.github.io/ExpenseEase/",
  },

  {
    name: "TempTeller",
    description:
      "Developed TempTeller, a weather forecast website that provides real-time weather updates based on user location or manual city input. The application stores and displays the forecast data of the last searched city in case of no location access and functions effectively with or without location permissions.",
    image: TempTeller,
    link: "https://syed-ali-jawad.github.io/TempTeller/",
  },
  {
    name: "Mediplus",
    description:
      "Landing Page inspired by Tralive ColarLib theme developed using TailwindCSS, HTML and JavaScript.",
    image: MediPlus,
    link: "https://syed-ali-jawad.github.io/MediPlus/",
  },
  {
    name: "Tralive",
    description:
      "Landing Page inspired by Tralive ColarLib theme developed on pure HTML CSS.",
    image: TraliveProject,
    link: "https://syed-ali-jawad.github.io/Tralive-Project/",
  },
  {
    name: "The Book Store",
    description:
      "An e-commerce platform with roles for buyers, sellers, and admin. Buyers and sellers can create accounts to purchase and sell books, while the admin can track book sales by date.",
    image: TheBookStore,
  },
  {
    name: "Todo List",
    description:
      "A todo list application that allows users to track task statuses, monitor deadlines with countdown timers, and attach images relevant to each task.",
    image: TodoListProject,
  },
];

export default function ProjectsPage() {
  const [showGoToTop, setShowGoToTop] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleSroll = () => setShowGoToTop(window.scrollY > 200);
    window.addEventListener("scroll", () => handleSroll());
    return window.removeEventListener("scroll", () => handleSroll());
  }, []);

  return (
    <>
      <div id="list">
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
      {showGoToTop ? (
        <div className="upward-arrow" onClick={() => window.scrollTo(0, 0)}>
          <UpwardArrow />
        </div>
      ) : null}
    </>
  );
}

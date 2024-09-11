import { useEffect, useState } from "react";
import AddExerience from "./AddExperience";
import SystemsLogo from "../assets/Systems logo.jpeg";
import VolpeaLogo from "../assets/Volpea logo.jpeg";
const experiences = [
  {
    id: 1,
    logo: SystemsLogo,
    company: "Systems Limited",
    periodServed: "March 2024 - May 2024",
    positon: "Intern - Cloud Application Development and Mobility",
    description:
      "Gained knowledge and skills in React front-end web development with a focus on building dynamic user interfaces. Build a practice project utilizing react routers, Context API, JSON Server and Ant Design. Build a book e-commerce stores utilizing react routers, Redux Toolkit, JSON Server and Ant Design.",
  },
  {
    id: 2,
    logo: VolpeaLogo,
    company: "Volpea Solutions",
    periodServed: "5 Aug - Present",
    positon: "Trainee Frontend Developer",
    description:
      "Learned Angular by applying and practicng on an ecommerce webiste. Currently working on a live project.",
  },
];
export default function Experiences() {
  return (
    <div className="experiences" id="experience">
      <h1>Experiences</h1>
      <div className="experiences-div">
        {experiences.map((experince, index) => (
          <AddExerience key={index} {...experince} />
        ))}
      </div>
    </div>
  );
}

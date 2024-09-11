import { useEffect, useState } from "react";
import AddExerience from "./AddExperience";
import SystemsLogo from "../assets/Systems logo.jpeg";
import VolpeaLogo from "../assets/Volpea logo.jpeg";

export default function Experiences() {
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
        " Learning and applying Angular by developing a practice project of a clothing e-commerce website.",
    },
  ];
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

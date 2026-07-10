import { useEffect, useState } from "react";
import AddExerience from "./AddExperience";
import SystemsLogo from "../assets/Systems logo.jpeg";
import VolpeaLogo from "../assets/Volpea logo.jpeg";
import EmumbaLogo from "../assets/Emumba Logo.png";
import "../styles/Experiences.css";
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
    periodServed: "August 2024 - October 2024",
    positon: "Trainee Frontend Developer",
    description:
      "Worked on Real Estate Angular project, resolving different bugs and integrated new features. Learned and applied Angular by developing a practice project of a clothing e-commerce website.",
  },
  {
    id: 3,
    logo: EmumbaLogo,
    company: "Emumba",
    periodServed: "Nov 2024 - July 2026",
    positon: "Software Engineer II",
    description:
      "Contributed to InterWiz AI, an AI-based interviewing platform, worked on product development, frontend features, bug fixes, and it’s website. Maintained and improved Emumba’s official marketing website, ensuring responsive design, UI consistency, and performance stability",
  },
];
export default function Experiences() {
  return (
    <div className='experiences' id='experience'>
      <div className='centered-container'>
        <h2>Experiences</h2>
        <div className='experiences-div'>
          {experiences.map((experince, index) => (
            <AddExerience key={index} {...experince} />
          ))}
        </div>
      </div>
    </div>
  );
}

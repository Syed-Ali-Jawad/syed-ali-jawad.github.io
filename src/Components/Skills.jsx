import {
  AngularIcon,
  CSSIcon,
  Git,
  HTMLIcon,
  JSIcon,
  NextJsIcon,
  ReactIcon,
  ReduxIcon,
  TailwindIcon,
  TypeScriptIcon,
} from "../assets/icons";
import SkillCard from "./SkillCard";
import "../styles/Skills.css"

export default function Skills() {
  const skills = [
    {
      skill: "React",
      logo: <ReactIcon />,
    },
    {
      skill: "Next.js",
      logo: <NextJsIcon />,
    },
    {
      skill: "TypeScript",
      logo: <TypeScriptIcon />,
    },
    {
      skill: "JavaScript",
      logo: <JSIcon />,
    },
    {
      skill: "Tailwind CSS",
      logo: <TailwindIcon />,
    },
    {
      skill: "Angular",
      logo: <AngularIcon />,
    },
    {
      skill: "HTML",
      logo: <HTMLIcon />,
    },
    {
      skill: "CSS / SCSS",
      logo: <CSSIcon />,
    },
    {
      skill: "Redux",
      logo: <ReduxIcon />,
    },
  ];
  return (
    <div className='skills-section'>
      <h2>Skills</h2>
      <div className='skills-div'>
        {skills.map((skill, index) => (
          <SkillCard key={index} {...skill} />
        ))}
      </div>
    </div>
  );
}

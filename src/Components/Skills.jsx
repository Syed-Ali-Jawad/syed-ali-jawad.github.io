import {
  AngularIcon,
  CSSIcon,
  Git,
  HTMLIcon,
  JSIcon,
  ReactIcon,
  ReduxIcon,
  TailwindIcon,
} from "../assets/icons";
import SkillCard from "./SkillCard";

export default function Skills() {
  const skills = [
    {
      skill: "HTML",
      logo: <HTMLIcon />,
    },
    {
      skill: "CSS",
      logo: <CSSIcon />,
    },
    {
      skill: "JavaScript",
      logo: <JSIcon />,
    },
    {
      skill: "React",
      logo: <ReactIcon />,
    },
    {
      skill: "Angular",
      logo: <AngularIcon />,
    },
    {
      skill: "Git",
      logo: <Git />,
    },
    {
      skill: "Redux",
      logo: <ReduxIcon />,
    },
    {
      skill: "Tailwind CSS",
      logo: <TailwindIcon />,
    },
  ];
  return (
    <div className="skills-section">
      <h1>Skills</h1>
      <div className="skills-div">
        {skills.map((skill, index) => (
          <SkillCard key={index} {...skill} />
        ))}
      </div>
    </div>
  );
}

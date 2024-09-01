import { useState } from "react";
export default function SkillCard({ logo, skill }) {
  const [hovering, setHovering] = useState(false);

  return (
    <div
      className="skill-card"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <div
        className="skill-card-logo"
        style={
          hovering
            ? { backgroundColor: "#f0a418" }
            : { backgroundColor: "#fcf4e3" }
        }
      >
        <img src={"../src/assets/" + logo} />
      </div>
      <p>{skill}</p>
    </div>
  );
}

import { useNavigate } from "react-router-dom";

export default function AboutMe() {
  const navigate = useNavigate();
  return (
    <div className="about-me" id="about-me">
      <div className="about-me-details">
        <h3>I'm a Frontend Developer</h3>
        <p>
          A Frontend Developer with a strong focus on building dynamic and
          user-friendly web applications. My journey into tech, despite coming
          from a non-CS background, has been driven by curiosity and a love for
          problem-solving. Through continuous learning and hands-on experience,
          I have mastered frameworks like React and Angular, always eager to
          embrace new tools and technologies. I thrive in environments that
          challenge me to grow and innovate, and I am committed to staying at
          the forefront of frontend development.
        </p>
        <button onClick={() => navigate("/projects")}>See Work</button>
      </div>
    </div>
  );
}

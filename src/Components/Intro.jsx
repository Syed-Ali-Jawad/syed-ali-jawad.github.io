import { AngularColored, ReactBlueIcon } from "../assets/icons";
import ReactTypingEffect from "react-typing-effect";
import IntroPic from "../assets/my pic for intro.png";

export default function Intro() {
  return (
    <div className="intro-section">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="react-icon">
          <ReactBlueIcon />
        </div>
        <div className="angular-icon">
          <AngularColored />
        </div>
      </div>
      <h1>Ali Jawad</h1>
      <h3>
        I'm{" "}
        <ReactTypingEffect
          speed={100}
          eraseSpeed={100}
          eraseDelay={1500}
          typingDelay={100}
          text={["React Developer", "Angular Developer", "Frontend Developer"]}
          displayTextRenderer={(text, i) => {
            return (
              <h4>
                {text.split("").map((char, i) => {
                  const key = `${i}`;
                  return (
                    <span key={key} style={{ color: "#f0a418" }}>
                      {char}
                    </span>
                  );
                })}
              </h4>
            );
          }}
        />
      </h3>
      <p>
        I am a dedicated Frontend Developer with a passion for building dynamic,
        user-centered web applications. Skilled in React, Angular, and other
        modern technologies, I thrive on solving challenges and embracing
        innovation in the ever-evolving field of frontend development.
      </p>
      <button>Download My CV</button>
      <div className="semi-circle-intro">
        <img src={IntroPic} />
      </div>
    </div>
  );
}

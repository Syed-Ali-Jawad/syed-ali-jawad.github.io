import { useEffect } from "react";

export default function NavBar({ scrolled }) {
  // useEffect(()=>{scrolled?document.getElementById("linked-in-logo").},[scrolled])
  return (
    <div
      className="navbar"
      style={
        scrolled
          ? { backgroundColor: "white" }
          : { backgroundColor: "transparent" }
      }
    >
      <h1>Ali Jawad</h1>
      <div className="navbar-btns">
        <a>Home</a>
        <a>About Me</a>
        <a>Experience</a>
        <a>Projects</a>
        <a>Contact Me</a>
      </div>
      <div className="contact-icons-navbar">
        <div
          style={
            scrolled
              ? { backgroundColor: "#f0a418" }
              : { backgroundColor: "lightgray" }
          }
        >
          {scrolled ? (
            <img src="../src/assets/linked-in-white.png" />
          ) : (
            <img src="../src/assets/linked-in-black.png" />
          )}
        </div>
        <div
          style={
            scrolled
              ? { backgroundColor: "#f0a418" }
              : { backgroundColor: "lightgray" }
          }
        >
          {scrolled ? (
            <img src="https://img.icons8.com/ios/50/FFFFFF/new-post--v1.png" />
          ) : (
            <img src="../src/assets/mail icon.svg" />
          )}
        </div>
      </div>
    </div>
  );
}

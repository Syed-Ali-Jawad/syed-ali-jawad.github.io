import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Hamburger } from "../assets/icons";

export default function NavBar({ scrolled }) {
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const toggleMenu = () => setIsMenuClicked((prevValue) => !prevValue);
  return (
    <>
      <div
        className="navbar"
        style={
          scrolled
            ? {
                backgroundColor: "white",
                transition: "background-color 1000ms linear",
                transition: "box-shadow 300ms linear",
                boxShadow: "0 2px 2px lightgray",
              }
            : {
                backgroundColor: "transparent",
                transition: "background-color 1000ms linear",
                transition: "box-shadow 300ms linear",
              }
        }
      >
        <h1>Ali Jawad</h1>
        {window.innerWidth <= 768 ? null : (
          <div className="navbar-btns">
            <HashLink smooth to="/#intro">
              Home
            </HashLink>
            <HashLink smooth to="/#about-me">
              About Me
            </HashLink>
            <HashLink smooth to="/#experience">
              Experience
            </HashLink>
            <HashLink smooth to="/projects#projects">
              Projects
            </HashLink>
            <HashLink smooth to="#contact-me">
              Contact Me
            </HashLink>
          </div>
        )}
        <div className="contact-icons-navbar">
          <div
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/ali-jawad-9b6a1020a/",
                "_blank"
              )
            }
            style={
              scrolled
                ? {
                    backgroundColor: "#f0a418",
                    transition: "background-color 300ms linear",
                  }
                : { backgroundColor: "#f9fafb", border: "1px solid lightgray" }
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="15"
              height="15"
              viewBox="0,0,256,256"
            >
              <g
                fill={scrolled ? "white" : "darkgray"}
                fillRule="nonzero"
                stroke="none"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit="10"
                strokeDasharray=""
                strokeDashoffset="0"
                fontFamily="none"
                fontWeight="none"
                fontSize="none"
                textAnchor="none"
                style={{ mixBlendMode: "normal" }}
              >
                <g transform="scale(8,8)">
                  <path d="M8.64258,4c-1.459,0 -2.64258,1.18163 -2.64258,2.64063c0,1.459 1.18262,2.66797 2.64063,2.66797c1.458,0 2.64258,-1.20897 2.64258,-2.66797c0,-1.458 -1.18163,-2.64062 -2.64062,-2.64062zM21.53516,11c-2.219,0 -3.48866,1.16045 -4.09766,2.31445h-0.06445v-2.00391h-4.37305v14.68945h4.55664v-7.27148c0,-1.916 0.14463,-3.76758 2.51563,-3.76758c2.337,0 2.37109,2.18467 2.37109,3.88867v7.15039h4.55078h0.00586v-8.06836c0,-3.948 -0.84884,-6.93164 -5.46484,-6.93164zM6.36328,11.31055v14.68945h4.56055v-14.68945z"></path>
                </g>
              </g>
            </svg>
          </div>
          <div
            onClick={() => window.open("mailto:alijawad04@gmail.com", "_blank")}
            style={
              scrolled
                ? {
                    backgroundColor: "#f0a418",
                    transition: "background-color 300ms linear",
                  }
                : { backgroundColor: "#f9fafb", border: "1px solid lightgray" }
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="15px"
              viewBox="0 -960 960 960"
              width="15px"
              fill={scrolled ? "white" : "gray"}
            >
              <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
            </svg>
          </div>
          {window.innerWidth <= 768 ? (
            <div onClick={toggleMenu}>
              <Hamburger />
            </div>
          ) : null}
        </div>
      </div>
      {isMenuClicked ? (
        <div className="nav-btns-list navbar-btns">
          <HashLink onClick={toggleMenu} smooth to="/#intro">
            Home
          </HashLink>
          <HashLink onClick={toggleMenu} smooth to="/#about-me">
            About Me
          </HashLink>
          <HashLink onClick={toggleMenu} smooth to="/#experience">
            Experience
          </HashLink>
          <HashLink onClick={toggleMenu} smooth to="/projects#projects">
            Projects
          </HashLink>

          <HashLink onClick={toggleMenu} smooth to="#contact-me">
            Contact Me
          </HashLink>
        </div>
      ) : null}
    </>
  );
}

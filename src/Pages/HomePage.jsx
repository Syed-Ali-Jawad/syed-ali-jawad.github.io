import { useEffect, useState } from "react";
import AboutMe from "../Components/AboutMe";
import Experiences from "../Components/Experiences";
import Intro from "../Components/intro";
import NavBar from "../Components/NavBar";
import Skills from "../Components/Skills";

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleSroll = () =>
      window.scrollY > 1 ? setScrolled(true) : setScrolled(false);
    window.addEventListener("scroll", () => handleSroll());
    return window.removeEventListener("scroll", () => handleSroll());
  }, []);
  return (
    <div className="home-page">
      <div className="gradient">
        <NavBar scrolled={scrolled} />
        <Intro />
      </div>
      <AboutMe />
      <Skills />
      <Experiences />
    </div>
  );
}

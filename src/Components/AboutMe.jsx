import { useNavigate } from "react-router-dom";

export default function AboutMe() {
  const navigate = useNavigate();
  return (
    <section className='about-me centered-container' id='about-me'>
      <div className='about-me-details'>
        <h3>I'm a Frontend Developer</h3>
        <p>
          I'm a Frontend Developer passionate about building modern, scalable,
          and user-friendly web applications. I have experience developing
          production-ready applications using React, Next.js, TypeScript,
          Tailwind CSS, and Angular, with a strong focus on creating reusable
          components, improving performance, and delivering intuitive user
          experiences. I enjoy solving complex frontend challenges and writing
          clean, maintainable code. Beyond frontend development, I'm always
          eager to learn new technologies, adapt to different domains, and
          expand my skills across the software development stack, including
          backend development, to build complete and impactful solutions.
        </p>
        <button onClick={() => navigate("/projects")}>See Work</button>
      </div>
    </section>
  );
}

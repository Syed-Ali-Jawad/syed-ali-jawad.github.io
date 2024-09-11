import { useState } from "react";
export default function ProjectCard({ name, description, link, image }) {
  return (
    <div
      className="project-card"
      onClick={() => (link ? window.open(link, "_blank") : null)}
    >
      <div
        className="project-image"
        style={{ backgroundImage: `url(src/assets/${image})` }}
      ></div>
      <div
        style={{
          display: "grid",
          alignItems: "center",
          gridTemplateColumns: "95% 5%",
        }}
      >
        <h2>{name}</h2>
        {link ? (
          <svg
            className="project-open-icon-svg"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="gray"
          >
            <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z" />
          </svg>
        ) : null}
      </div>
      <p>{description}</p>
    </div>
  );
}

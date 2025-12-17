import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./styles/Projects.css";

import menuBackground from "./assets/menuBackground.png";
import microblog from "./assets/microblog.png";
import projetweb from "./assets/projetweb.png";
import portfolio from "./assets/portfolio.png";

const projects = [
  {
    image: microblog,
    title: "Microblog",
    description:
      "A minimalist micro-blogging app built with Expo for mobile and web, featuring real-time posts, user follow system, filters, pagination, and authentication.",
    link: "https://github.com/alexandru356/microblog.git",
  },
  {
    image: projetweb,
    title: "Collaborative DVD Collection Manager",
    description:
      "C#, Entity Framework application for managing DVD collections with user authentication and lending features.",
    link: "https://github.com/Jawadbouchiba/ProjetFinalWebServeurII.git",
  },
  {
    image: portfolio,
    title: "Portfolio Website",
    description:
      "My current portfolio website built with React and Framer Motion.",
    link: "https://github.com/Andrei-C07/PortfolioNew.git",
  },
  {
    image: null,
    title: "Project Coming Soon",
    description: "A project that is currently in development.",
  },
];

export default function Projects() {
  const navigate = useNavigate();
  const [backSelected, setBackSelected] = useState(true);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Enter" && backSelected) {
        navigate("/");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [backSelected, navigate]);

  return (
    <div className="projects-page font-pixel">
      <motion.div
        className={`projects-back ${backSelected ? "selected" : ""}`}
        onMouseEnter={() => setBackSelected(true)}
        onClick={() => navigate("/")}
        animate={{ opacity: backSelected ? [1, 0, 1] : 1 }}
        transition={{
          repeat: backSelected ? Infinity : 0,
          duration: 0.8,
        }}
      >
        {"<"} Back
      </motion.div>

      <motion.div
        className="projects-grid"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            style={{
              backgroundImage: `url(${menuBackground})`,
            }}
            whileHover={{ scale: 1.03 }}
            onClick={() => project.link && window.open(project.link, "_blank")}
          >
            {project.image && (
              <div className="project-image-container">
                <img
                  className="project-image"
                  src={project.image}
                  alt="Project Image"
                />
              </div>
            )}
            <h3>{project.title}</h3>
            <br />
            <p className="desc">{project.description}</p>
            {project.link && (
              <div className="hint">!Tip : Click on me to visit my page</div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

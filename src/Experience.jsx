import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./styles/Projects.css";

const jobs = [
  {
    title: "Multi-Department Clerk",
    where: "IGA Extra Déziel, Île-Perrot, QC",
    description: "Worked in various departments including grocery, deli, and fishmonger. Responsibilities included stocking shelves, assisting customers, and maintaining department cleanliness.",
    date: " From : 2021 - 2025",
  },
  {
    title: "Co-Owner /Project Manager",
    where: "ClearView, Montreal, QC",
    description: "Co-founded a business offering window and gutter cleaning as well as other primarily residential services. Managed job sites, customer relations, and scheduling.",
    date: "From : 2024 - 2025",
  },
];

export default function Experience() {
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
        {jobs.map((job, index) => (
          <motion.div
            key={index}
            className="project-card"
            style={{
              backgroundImage: `url("/menuBackground.png")`,
            }}
            whileHover={{ scale: 1.03 }}
          >
            <h2>{job.where}</h2>
            <h4>{job.title}</h4>
            <div className="desc" >{job.description}</div>
            <div className="desc" >{job.date}</div>
          </motion.div>
        ))}
      </motion.div>

    </div>
  );
}

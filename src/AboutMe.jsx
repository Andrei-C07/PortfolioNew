import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "./styles/AboutMe.css";
import { useNavigate } from "react-router-dom";

const flicker = {
  animate: {
    color: ["#ff8c00", "#ffa500", "#ff8c00"],
    opacity: [1, 0.6, 1],
    transition: {
      repeat: Infinity,
      duration: 0.8,
    },
  },
};

const itemVariants = {
  rest: {
    color: "#000000",
    opacity: 1,
  },
  active: {
    color: "#ff9900",
    opacity: [1, 0, 1],
    transition: {
      opacity: {
        duration: 1,
        repeat: Infinity,
        repeatType: "loop",
      },
    },
  },
};


export default function AboutMe() {

  const navigate = useNavigate();

  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        setSelected((prev) => (prev === 0 ? 1 : 0));
      }

      if (e.key === "Enter") {
        if (selected === 0) {
          navigate("/");
        }
        if (selected === 1) {
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selected, navigate]);


  return (
    <div className="app font-pixel">
      <div className="background" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="about-me"
      >
        <div className="menu-container">
          <div className="general">
            <div className="me">
              <motion.div
                className="back_button"
                variants={itemVariants}
                initial="rest"
                animate={selected === 0 ? "active" : "rest"}
                onMouseEnter={() => setSelected(0)}
                onClick={() => navigate("/")}
              >
                {"<"}Back
              </motion.div>
              <div>
                <img src="/me.png" alt="profile" className="profile-pic" />
              </div>
              <div>
                <span className="info">Andrei Cretu</span>
                <br />
                <br />
                <span className="info">Age : 19</span>
                <br />
                <br />
                <span className="info">Location : Montreal, Canada</span>
                <br />
                <br />
                <motion.div
                  className="no-style"
                  variants={itemVariants}
                  initial="rest"
                  animate={selected === 1 ? "active" : "rest"}
                  onMouseEnter={() => setSelected(1)}
                >
                  Download CV
                </motion.div>
              </div>             
            </div>
            <div className="bio">
              <ul className="bio-list">
                <li>
                  <div>Who Am I
                    <ul>
                      <li className="bio-list-item">Aspiring full stack developer with a passion for creating and learning.</li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div>Education
                    <ul>
                      <li className="bio-list-item">Studying computer science at Gérald-Godin Cégep. Expected graduation : may 2026.</li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div>Values
                    <ul>
                      <li className="bio-list-item">Perseverance - Respect - Family</li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div>Hobbies
                    <ul>
                      <li className="bio-list-item">Coding - Reading - Guitar -<br/> Working Out</li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="skills">
            Skills
            <div className="skill-list">
              <img src="/java.png" alt="java" className="skill-icon" />
              <img src="/python.png" alt="python" className="skill-icon" />
              <img src="/sql.png" alt="sql" className="skill-icon" />
              <img src="/cs.png" alt="c#" className="skill-icon" />
              <img src="/react.png" alt="react" className="skill-icon" />
              <img src="/github.png" alt="github" className="skill-icon" />
              <img src="/docker.png" alt="docker" className="skill-icon" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

import { motion } from "framer-motion";
import { use, useEffect, useState } from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";

const items = ["About me", "Projects", "Experience", "Contact"];

const itemVariants = {
  rest: {
    x: 0,
    color: "#000000",
    opacity: 1,
  },
  active: {
    x: 6,
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

const arrowVariants = {
  rest: {
    opacity: 0,
    x: -6,
  },
  active: {
    opacity: 1,
    x: 0,
  },
};
export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowDown") {
        setActiveIndex((i) => (i + 1) % items.length);
      }

      if (e.key === "ArrowUp") {
        setActiveIndex((i) => (i - 1 + items.length) % items.length);
      }

      if (e.key === "Enter") {
        actions[items[activeIndex]]?.();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex]);

  const actions = {
    "About me": () => {
      console.log("Navigating to About me");
      navigate("/about");
    },
    Projects: () => {
      console.log("Navigating to Projects");
    },
    Experience: () => {
      console.log("Navigating to Experience");
    },
    Contact: () => {
      console.log("Navigating to Contact");
    },
  };
    
  return (
    <div className="app font-pixel">
      <div className="background" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="menu"
      >
        <h1 className="title">ANDREI'S PORTFOLIO</h1>
        <div className="menu-container">
          <ul className="menu-list">
            { items.map((item, index) => (
                <motion.li
                  key={item}
                  className="menu-item"
                  variants={itemVariants}
                  animate={activeIndex === index ? "active" : "rest"}
                  initial="rest"
                  whileHover="hover"
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => actions[item]?.()}
                >
                  <motion.span
                    className="arrow"
                    variants={arrowVariants}
                    animate={activeIndex === index ? "active" : "rest"}
                    transition={{ duration: 0.15 }}
                  >
                    ▶
                  </motion.span>

                  {item}
                </motion.li>
            ))}
          </ul>
          <footer className="footer">!Tip : You may also use Arrow Keys to Navigate, Enter to Select</footer>
        </div>
      </motion.div>
    </div>
  );
}

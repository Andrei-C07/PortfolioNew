import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import "./styles/Contact.css";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const navigate = useNavigate();
  const form = useRef();

  const backRef = useRef();
  const sendRef = useRef();
  const clearRef = useRef();

  const elements = [backRef, sendRef, clearRef];
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowDown") {
        setSelected((i) => (i + 1) % elements.length);
      }

      if (e.key === "ArrowUp") {
        setSelected((i) => (i - 1 + elements.length) % elements.length);
      }

      if (e.key === "Enter") {
        if (selected === 0) navigate("/");
        if (selected === 1) sendRef.current?.click();
        if (selected === 2) clearRef.current?.click();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selected, navigate]);

  const itemVariants = {
    rest: {
      color: "#000000ff",
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

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_gkdu44b",
      "template_ni0b3jp",
      form.current,
      { publicKey: "AidTQspwMWVMfwFm1" }
    ).then(
      () => {
        console.log("SUCCESS!");
        form.current.reset();
      },
      (error) => {
        console.log("FAILED...", error.text);
      }
    );
  };

  const clearFields = () => {
    form.current.reset();
  };

  return (
    <div className="app font-pixel">
      <div className="background" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="contact"
      >
        <div className="menu-container">
          
        <motion.div
            ref={backRef}
            variants={itemVariants}
            initial="rest"
            className="back"
            animate={selected === 0 ? "active" : "rest"}
            onMouseEnter={() => setSelected(0)}
            onClick={() => navigate("/")}
        >
            {"<"}Back
        </motion.div>

          <p>Phone : (514) 654-3719</p>
          <p>Email : andrei.cretu4676@gmail.com</p>

          <form className="form" ref={form} onSubmit={sendEmail}>
            <div className="horiDiv">
              <input name="name" placeholder="First Name" required />
              <input name="surname" placeholder="Last Name" required />
            </div>

            <div className="horiDiv">
              <input name="phone" placeholder="Phone Number" required />
              <input name="email" placeholder="Email" required />
            </div>

            <textarea
              name="message"
              maxLength="1000"
              placeholder="Enter Message . . ."
              required
            />

            <div className="divbtn">
              <motion.button
                ref={sendRef}
                variants={itemVariants}
                initial="rest"
                animate={selected === 1 ? "active" : "rest"}
                type="submit"
                onMouseEnter={() => setSelected(1)}
              >
                Send
              </motion.button>

              <motion.button
                ref={clearRef}
                variants={itemVariants}
                initial="rest"
                animate={selected === 2 ? "active" : "rest"}
                type="button"
                onMouseEnter={() => setSelected(2)}
                onClick={clearFields}
              >
                Clear
              </motion.button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
}

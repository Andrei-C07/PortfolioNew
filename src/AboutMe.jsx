import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "./App.css";

export default function AboutMe() {

  return (
    <div className="app font-pixel">
      <div className="background" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="menu"
      >
        <h1 className="title">ABOUT ME</h1>
        <div className="menu-container">
            ABOUT ME
        </div>
      </motion.div>
    </div>
  );
}

import "./App.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  return (
    <div className={`app ${isLoaded ? "loaded" : ""}`}>
      <Navbar />

      <Hero />
      <Projects />
      <Contact />

      <motion.footer
        className="footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.div className="social-links" variants={staggerContainer}>
            <motion.a href="https://github.com/Bhumikahm" target="_blank">
              <i className="fab fa-github"> </i>
            </motion.a>
            <motion.a href="http://www.linkedin.com/in/bhumika-h-m" target="_blank">
              <i className="fab fa-linkedin"> </i>
            </motion.a>
          </motion.div>
        <p> &copy; 2025 Bhumika hm. All rights reserved.</p>
      </motion.footer>
    </div>
  );
}

export default App;

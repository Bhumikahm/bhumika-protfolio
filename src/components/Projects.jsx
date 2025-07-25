import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        My Projects
      </motion.h2>
      <motion.div
        className="project-grid"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: "url('/projects/project__1.png')" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
          <h3> ChartBot </h3>
          <p>
          A responsive, web-based chatbot powered by Google Gemini API. Users can interact through text and images, with a sleek UI, emoji support, and typing animations, deployed on Vercel.
          </p>
          <div className="project-tech">
            <span>HTML5</span>
            <span>CSS3</span>
            <span>JavaScript</span>
            <span>API</span>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: "url('/projects/project__2.png')",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <h3>Protfolio</h3>
          <p>
          A modern, responsive portfolio website showcasing my skills and projects. Built using React.js and deployed on Vercel, it reflects my passion for creating innovative and scalable software solutions.
          </p>
          <div className="project-tech">
            <span>React</span>
            <span>Vite</span>
            <span>Tailwind CSS</span>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: "url('/projects/project__3.jpg')",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <h3>EMS</h3>
          <p>
          This Java Swing-based Employee Management System supports adding, viewing, searching, updating, and deleting employee records with MySQL database integration.
          </p>
          <div className="project-tech">
            <span>Java</span>
            <span>Swing</span>
            <span>SQL</span>
            <span>JDBC</span>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

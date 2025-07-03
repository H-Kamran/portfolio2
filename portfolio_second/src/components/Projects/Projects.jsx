import "./Projects.css";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { SiCodesandbox } from "react-icons/si";

const blocks = [
  {
    title: "My GitHub",
    description: "Explore all my open source and personal projects, code samples, and contributions on GitHub.",
    link: "https://github.com/H-Kamran",
    icon: <FaGithub />,
    label: "View GitHub"
  },
  {
    title: "My CodeSandbox",
    description: "See my live React, JS, and CSS experiments, UI demos, and prototypes on CodeSandbox.",
    link: "https://codesandbox.io/u/H-Kamran",
    icon: <SiCodesandbox />,
    label: "View CodeSandbox"
  }
];

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <motion.h1
        className="projects-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ amount: 0.1, once: false }}
      >
        Projects
      </motion.h1>
      <motion.div
        className="projects-list"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.5, once: false }}
      >
        {blocks.map((block, idx) => (
          <motion.div className="project-block" key={idx} variants={itemVariants} whileHover={{ scale: 1.05, boxShadow: "0 4px 24px 0 rgba(0,0,0,0.10)" }}>
            <div className="project-block-icon">{block.icon}</div>
            <h2 className="project-title">{block.title}</h2>
            <p className="project-desc">{block.description}</p>
            <a className="project-link" href={block.link} target="_blank" rel="noopener noreferrer">
              {block.label}
            </a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

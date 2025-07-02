import "./Skills.css";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Skills() {
  const langRef = useRef(null);
  const htmlRef = useRef(null);
  const cssRef = useRef(null);
  const jsRef = useRef(null);
  const reactRef = useRef(null);
  const gitRef = useRef(null);

  const langInView = useInView(langRef, { amount: 0.5 });
  const htmlInView = useInView(htmlRef, { amount: 0.5 });
  const cssInView = useInView(cssRef, { amount: 0.5 });
  const jsInView = useInView(jsRef, { amount: 0.5 });
  const reactInView = useInView(reactRef, { amount: 0.5 });
  const gitInView = useInView(gitRef, { amount: 0.5 });

  return (
    <div id="skills" className="skills-container">
      <div className="skills-header">
        <h1>About Me</h1>
      </div>
      <div className="skills">
        <div className="about">
          <motion.p
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ amount: 0.7 }}
          >
            In 2022, I earned my Bachelor's degree in Information Technologies
            from ASOIU. In 2024, I completed my Master's in Data Analytics at
            ASOIU. I’m passionate about programming and have been focused on
            frontend development for over a year. I build websites that are
            interactive, responsive, and accessible to all users.
          </motion.p>
        </div>
        <div className="skills-content">
          <div className="skill-item">
            <div className="skill-name-container">
              <h3 className="skill-name">English</h3>
            </div>
            <div className="skill-bg">
              <motion.div
                ref={langRef}
                className="skill-bar skill-lang"
                animate={{ width: langInView ? "75%" : 0 }}
                transition={{
                  duration: langInView ? 0.5 : 0.01,
                  ease: "easeOut",
                }}
              />
              <div className="skill-percentage-container">
                <span className="skill-percentage">75%</span>
              </div>
            </div>
          </div>
          <div className="skill-item">
            <div className="skill-name-container">
              <h3 className="skill-name">Html</h3>
            </div>
            <div className="skill-bg">
              <motion.div
                ref={htmlRef}
                className="skill-bar skill-html"
                animate={{ width: htmlInView ? "90%" : 0 }}
                transition={{
                  duration: htmlInView ? 0.5 : 0.01,
                  delay: htmlInView ? 0.1 : 0,
                  ease: "easeOut",
                }}
              />
              <div className="skill-percentage-container">
                <span className="skill-percentage">90%</span>
              </div>
            </div>
          </div>
          <div className="skill-item">
            <div className="skill-name-container">
              <h3 className="skill-name">CSS</h3>
            </div>
            <div className="skill-bg">
              <motion.div
                ref={cssRef}
                className="skill-bar skill-css"
                animate={{ width: cssInView ? "90%" : 0 }}
                transition={{
                  duration: cssInView ? 0.5 : 0.01,
                  delay: cssInView ? 0.2 : 0,
                  ease: "easeOut",
                }}
              />
              <div className="skill-percentage-container">
                <span className="skill-percentage">90%</span>
              </div>
            </div>
          </div>
          <div className="skill-item">
            <div className="skill-name-container">
              <h3 className="skill-name">JavaScript</h3>
            </div>
            <div className="skill-bg">
              <motion.div
                ref={jsRef}
                className="skill-bar skill-js"
                animate={{ width: jsInView ? "80%" : 0 }}
                transition={{
                  duration: jsInView ? 0.5 : 0.01,
                  delay: jsInView ? 0.3 : 0,
                  ease: "easeOut",
                }}
              />
              <div className="skill-percentage-container">
                <span className="skill-percentage">80%</span>
              </div>
            </div>
          </div>
          <div className="skill-item">
            <div className="skill-name-container">
              <h3 className="skill-name">React, Hooks</h3>
            </div>
            <div className="skill-bg">
              <motion.div
                ref={reactRef}
                className="skill-bar skill-react"
                animate={{ width: reactInView ? "85%" : 0 }}
                transition={{
                  duration: reactInView ? 0.5 : 0.01,
                  delay: reactInView ? 0.4 : 0,
                  ease: "easeOut",
                }}
              />
              <div className="skill-percentage-container">
                <span className="skill-percentage">85%</span>
              </div>
            </div>
          </div>
          <div className="skill-item">
            <div className="skill-name-container">
              <h3 className="skill-name">Git</h3>
            </div>
            <div className="skill-bg">
              <motion.div
                ref={gitRef}
                className="skill-bar skill-git"
                animate={{ width: gitInView ? "70%" : 0 }}
                transition={{
                  duration: gitInView ? 0.5 : 0.01,
                  delay: gitInView ? 0.5 : 0,
                  ease: "easeOut",
                }}
              />
              <div className="skill-percentage-container">
                <span className="skill-percentage">70%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

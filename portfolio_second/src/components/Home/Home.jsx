import { motion } from "framer-motion";
import useTypewriterInView from "./useTypewriterInView";
import img from "../../assets/img.png";
import cv from "../../assets/CV_Kamran Hasanov.pdf";
import "./Home.css";

export default function Home() {
  const [typewriterRef, typewriterKey] = useTypewriterInView({ amount: 0.7 });
  return (
    <div id="home" className="home">
      <div className="home-content">
        <motion.p
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0, ease: "easeInOut" }}
        >
          Hello, I'm <span>Kamran Hasanov</span>
        </motion.p>
        <div className="typewriter" ref={typewriterRef}>
          <p key={typewriterKey}>WEB DEVELOPER</p>
        </div>
        <motion.a
          href={cv}
          download="CV_Kamran_Hasanov.pdf"
          className="download-cv-btn"
          whileHover={{ scale: 1.08, backgroundColor: "var(--secondary-color-darker)" }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          Download CV
        </motion.a>
      </div>
      <div className="photo">
        <motion.img
          className="photo_img"
          src={img}
          alt="Photo Background"
          initial={{ x: "50vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "transition", duration: 0.5 }}
        />
      </div>
    </div>
  );
}

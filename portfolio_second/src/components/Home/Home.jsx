// import Header from "../Header/Header.jsx";
import { motion } from "framer-motion";
import photo_bg from "../../assets/photo_bg.png";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      {/* <Header /> */}
      <div className="home-content">
        <motion.p
          style={{ fontSize: "2rem", color: "var(--text-color-dark)" }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1,scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeInOut" }}
        >
          Hello, I'm <span>Kamran Hasanov</span>
        </motion.p>
        <p
          style={{
            fontSize: "4em",
            fontWeight: "bold",
            color: "var(--secondary-color)",
          }}
        >
          WEB DEVELOPER
        </p>
        {/* <a href={cv} target="_blank" rel="noreferrer">
          <motion.button whileHover={{ scale: 1.1 }} className="cv-button">
            Download CV
          </motion.button>
        </a> */}
      </div>
      <div className="photo">
        {/* <button className="hire-btn">
          <span className="hire-btn-text">Hire me!</span>
        </button> */}
        <motion.img
          className="photo_bg"
          src={photo_bg}
          alt="Photo Background"
          initial={{ x: "100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 15, duration: 1 }}
        />
      </div>
      {/* <div className="home__content">
        <h1>Welcome to My Portfolio</h1>
        <p>This is a brief introduction to my work and skills.</p>
      </div> */}
    </div>
  );
}

import { motion } from "framer-motion";
import photo_bg from "../../assets/photo_bg.png";
import "./Home.css";

export default function Home() {
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
        <div className="typewriter">
          <p>WEB DEVELOPER</p>
        </div>
      </div>
      <div className="photo">
        <motion.img
          className="photo_bg"
          src={photo_bg}
          alt="Photo Background"
          initial={{ x: "50vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "transition", duration: 0.5 }}
        />
      </div>
    </div>
  );
}

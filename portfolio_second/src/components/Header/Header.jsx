import "./Header.css";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import logoSrc from "../../assets/kh_logo.png";
import portfolioLogo from "../../assets/portfolio_logo.png";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuState, setMenuState] = useState("menu"); // "menu" or "close"
  const [navDisplay, setNavDisplay] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const hideMenu = () => {
    setNavDisplay("");
    setMenuState("menu");
  };

  const menuIcon = (
    <svg
      fill={scrolled ? "var(--text-color-dark)" : "var(--text-color-light)"}
      width="20px"
      height="20px"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
    </svg>
  );
  const closeIcon = (
    <svg
      fill={scrolled ? "var(--text-color-dark)" : "var(--text-color-light)"}
      width="20px"
      height="20px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z"
        fill="#0F0F0F"
      />
    </svg>
  );

  const headerRef = useRef(null);
  const ulRef = useRef(null);

  return (
    <header
      id="header"
      ref={headerRef}
      className={scrolled ? "header-scroll" : ""}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="header-left">
        <div className="logo-container">
          <img src={logoSrc} className="owner-logo" alt="owner logo" />
          <img src={portfolioLogo} className="app-logo" alt="app logo" />
        </div>

        <nav className={navDisplay}>
          <ul ref={ulRef} className="menu">
            <motion.li
              whileHover={{
                x: 0,
                y: -2,
                scale: 1.05,
              }}
            >
              <a href="#home" onClick={hideMenu}>
                Home
              </a>
            </motion.li>
            <motion.li
              whileHover={{
                x: 0,
                y: -2,
                scale: 1.05,
              }}
            >
              <a href="#skills" onClick={hideMenu}>
                About
              </a>
            </motion.li>
            <motion.li
              whileHover={{
                x: 0,
                y: -2,
                scale: 1.05,
              }}
            >
              <a href="#projects" onClick={hideMenu}>
                Projects
              </a>
            </motion.li>
            <motion.li
              whileHover={{
                x: 0,
                y: -2,
                scale: 1.05,
              }}
            >
              <a href="#contact" onClick={hideMenu}>
                Contact
              </a>
            </motion.li>
          </ul>
        </nav>
      </div>
      <div className="header-right">
        <motion.button
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.3,
            ease: "easeOut",
            scale: { duration: 0.15 },
          }}
          type="button"
          className={`hire-btn${scrolled ? " hire-btn-scroll" : ""}`}
        >
          <span className="hire-btn-text">Hire me!</span>
        </motion.button>
      </div>
      <span
        className="menu-btn"
        onClick={() => {
          if (navDisplay === "") {
            setMenuState("close");
            setNavDisplay("display-block");
          } else {
            setMenuState("menu");
            setNavDisplay("");
          }
        }}
        style={{ cursor: "pointer" }}
      >
        {menuState === "menu" ? menuIcon : closeIcon}
      </span>
    </header>
  );
}

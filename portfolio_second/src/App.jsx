import "./App.css";
import Header from "./components/Header/Header.jsx";
import Home from "./components/Home/Home.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Contact from "./components/Contact/Contact.jsx";

import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <AnimatePresence>
      <Header />
      <main>
        <Home />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </AnimatePresence>
  );
}

export default App;

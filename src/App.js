import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const location = useLocation();

  return (
    <>
      <div className="App">
        <Navigation />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/projects" element={<Projects />} />
            <Route exact path={"/contact"} element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </div>
    </>
  );
}

export default App;

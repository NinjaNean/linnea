import { useState, useEffect, useRef } from "react";
import "./menu.css";

function Menu() {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <section id="menu" className={isVisible ? "visible" : "hidden"}>
        <a href="#hero" className="icon">
          <h1>L.</h1>
        </a>

        <ul className="navbar">
          <a href="#about">
            <li>About</li>
          </a>
          <a href="#portfolio">
            <li>Portfolio</li>
          </a>
          <a href="#contact">
            <li>Contact</li>
          </a>
        </ul>
      </section>
    </>
  );
}

export default Menu;

import { useState } from "react";
import "./menu.css";

function Menu() {
  const [active, setActive] = useState("#about");

  return (
    <section id="menu">
      <a href="#hero" className="icon">
        <h1>L.</h1>
      </a>

      <ul className="navbar">
        <a href="#about" className={active === "#about" ? "selected" : ""} onClick={() => setActive("#about")}>
          <li>About</li>
        </a>
        <a
          href="#portfolio"
          className={active === "#portfolio" ? "selected" : ""}
          onClick={() => setActive("#portfolio")}
        >
          <li>Portfolio</li>
        </a>
        <a href="#contact" className={active === "#contact" ? "selected" : ""} onClick={() => setActive("#contact")}>
          <li>Contact</li>
        </a>
      </ul>
    </section>
  );
}

export default Menu;

import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../data";
import "./menu.css";

function Menu() {
  const [active, setActive] = useState("#about");
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language as keyof typeof translations];

  return (
    <section id="menu">
      <a href="#hero" className="icon">
        <h1>L.</h1>
      </a>

      <div className="menu-actions">
        <ul className="navbar">
          <a
            href="#about"
            className={active === "#about" ? "selected" : ""}
            onClick={() => setActive("#about")}
          >
            <li>{t.nav_about}</li>
          </a>
          <a
            href="#portfolio"
            className={active === "#portfolio" ? "selected" : ""}
            onClick={() => setActive("#portfolio")}
          >
            <li>{t.nav_portfolio}</li>
          </a>
          <a
            href="#contact"
            className={active === "#contact" ? "selected" : ""}
            onClick={() => setActive("#contact")}
          >
            <li>{t.nav_contact}</li>
          </a>
        </ul>

        <button className="language-toggle" onClick={toggleLanguage}>
          {language === "sv" ? "English" : "Svenska"}
        </button>
      </div>
    </section>
  );
}

export default Menu;

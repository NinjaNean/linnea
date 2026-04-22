import "./hero.css";
import Button from "../button.tsx";
import heroImg from "../../assets/Group 1.svg";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../data";

function Hero() {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations];

  return (
    <>
      <section id="hero">
        <div className="heroText">
          <h1>{t.hero_name}</h1>
          <p>{t.hero_title}</p>
          <a href="#contact">
            <Button text={t.hero_button}></Button>
          </a>
        </div>

        <div className="heroImg">
          <img className="ellipse" src={heroImg} alt="" />
        </div>
      </section>
    </>
  );
}

export default Hero;

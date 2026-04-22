import Header from "../header";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../data";
import "./about.css";

function About() {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations];

  return (
    <>
      <section id="about">
        <Header text="about me"></Header>
        <p>{t.about_text_1}</p>
        <p>{t.about_text_2}</p>
        <p>{t.about_text_3}</p>
      </section>
    </>
  );
}

export default About;

import "./hero.css";
import Button from "../button.tsx";
import heroImg from "../../assets/Group 1.svg";

function Hero() {
  return (
    <>
      <section id="hero">
        <div className="heroText">
          <h1>I'm Linnéa Nilsson</h1>
          <p>Frontend Developer</p>
          <a href="#contact">
            <Button text="Contant Me"></Button>
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

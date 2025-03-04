import "./menu.css";

function Menu() {
  return (
    <>
      <section id="menu">
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

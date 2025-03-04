import Button from "../button";
import Header from "../header";
import "./contact.css";

function Contact() {
  return (
    <>
      <section id="contact">
        <Header text="contact me"></Header>

        <form action="">
          <div>
            <label>
              NAME <input type="text" placeholder="Type your name" />
            </label>
            <label>
              PHONE NUMBER <input type="text" placeholder="Type your phone number" />
            </label>
            <label>
              EMAIL <input type="text" placeholder="Type your email address" />
            </label>
            <label>
              YOUR MESSAGE <textarea name="" id="" placeholder="Type your message here"></textarea>
            </label>
          </div>

          <Button text="Send Message"></Button>
        </form>
      </section>
    </>
  );
}

export default Contact;

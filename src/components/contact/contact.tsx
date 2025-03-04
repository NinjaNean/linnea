import { useState } from "react";
import Button from "../button";
import Header from "../header";
import "./contact.css";
import emailjs from "@emailjs/browser";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const sendEmail = (e: any) => {
    e.preventDefault();

    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const templateId = import.meta.env.VITE_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Linnéa",
      message: message,
      from_number: phoneNumber,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response);
        setName("");
        setEmail("");
        setMessage("");
        setPhoneNumber("");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <>
      <section id="contact">
        <Header text="contact me"></Header>

        <form onSubmit={sendEmail}>
          <div>
            <label>
              NAME
              <input
                name="name"
                type="text"
                placeholder="Type your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label>
              PHONE NUMBER
              <input
                name="phone_number"
                type="text"
                placeholder="Type your phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </label>
            <label>
              EMAIL
              <input
                name="email"
                type="email"
                placeholder="Type your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label>
              YOUR MESSAGE
              <textarea
                name="message"
                placeholder="Type your message here"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </label>
          </div>

          <Button text="Send Message" type="submit"></Button>
        </form>
      </section>
    </>
  );
}

export default Contact;

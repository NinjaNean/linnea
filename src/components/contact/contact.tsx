import { useState } from "react";
import Button from "../button";
import Header from "../header";
import "./contact.css";
import emailjs from "@emailjs/browser";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[0-9+()\s-]*$/;

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
    phoneNumber: "",
  });

  const validateForm = () => {
    const nextErrors = {
      name: "",
      email: "",
      message: "",
      phoneNumber: "",
    };

    if (!name.trim()) {
      nextErrors.name = "Please enter your name.";
    }

    if (!email.trim()) {
      nextErrors.email = "Please enter your email address.";
    } else if (!emailRegex.test(email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!message.trim()) {
      nextErrors.message = "Please enter a message.";
    } else if (message.trim().length < 10) {
      nextErrors.message = "Message should be at least 10 characters.";
    }

    if (phoneNumber.trim() && !phoneRegex.test(phoneNumber)) {
      nextErrors.phoneNumber =
        "Phone number may contain only digits, spaces, +, and -.";
    }

    setErrors(nextErrors);
    return (
      !nextErrors.name &&
      !nextErrors.email &&
      !nextErrors.message &&
      !nextErrors.phoneNumber
    );
  };

  const sendEmail = (e: any) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

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
        setErrors({ name: "", email: "", message: "", phoneNumber: "" });
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <>
      <section id="contact">
        <Header text="contact me"></Header>

        <form onSubmit={sendEmail} noValidate>
          <div>
            <label>
              NAME *
              <input
                name="name"
                type="text"
                placeholder="Type your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              {errors.name && <span className="error">{errors.name}</span>}
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
              {errors.phoneNumber && (
                <span className="error">{errors.phoneNumber}</span>
              )}
            </label>
            <label>
              EMAIL *
              <input
                name="email"
                type="email"
                placeholder="Type your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </label>
            <label>
              YOUR MESSAGE *
              <textarea
                name="message"
                placeholder="Type your message here"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
              {errors.message && (
                <span className="error">{errors.message}</span>
              )}
            </label>
          </div>

          <Button text="Send Message" type="submit"></Button>
        </form>
      </section>
    </>
  );
}

export default Contact;

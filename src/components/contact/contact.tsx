import { useState } from "react";
import Button from "../button";
import Header from "../header";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../data";
import "./contact.css";
import emailjs from "@emailjs/browser";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[0-9+()\s-]*$/;

function Contact() {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations];

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
      nextErrors.name = t.error_name;
    }

    if (!email.trim()) {
      nextErrors.email = t.error_email;
    } else if (!emailRegex.test(email)) {
      nextErrors.email = t.error_email_invalid;
    }

    if (!message.trim()) {
      nextErrors.message = t.error_message;
    } else if (message.trim().length < 10) {
      nextErrors.message = t.error_message_length;
    }

    if (phoneNumber.trim() && !phoneRegex.test(phoneNumber)) {
      nextErrors.phoneNumber = t.error_phone;
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
              {t.contact_name}
              <input
                name="name"
                type="text"
                placeholder={t.name_placeholder}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              {errors.name && <span className="error">{errors.name}</span>}
            </label>
            <label>
              {t.contact_phone}
              <input
                name="phone_number"
                type="text"
                placeholder={t.phone_placeholder}
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              {errors.phoneNumber && (
                <span className="error">{errors.phoneNumber}</span>
              )}
            </label>
            <label>
              {t.contact_email}
              <input
                name="email"
                type="email"
                placeholder={t.email_placeholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </label>
            <label>
              {t.contact_message}
              <textarea
                name="message"
                placeholder={t.message_placeholder}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
              {errors.message && (
                <span className="error">{errors.message}</span>
              )}
            </label>
          </div>

          <Button text={t.contact_send_button} type="submit"></Button>
        </form>
      </section>
    </>
  );
}

export default Contact;

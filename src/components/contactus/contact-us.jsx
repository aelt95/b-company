"use client";
import styles from "./contact-us.css";
import Image from "next/image";
import contactUsImg from "../../../public/contactus.svg";
const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    return alert("Message sended");
  };
  return (
    <section className="contact-us-section">
      <div className="contact-us-left">
        <div className="contact-us-title">
          Contact <span>Us</span>
        </div>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Ask something"></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
      <div className="contact-us-right"></div>
      <Image src={contactUsImg} className="contact-img" />
    </section>
  );
};

export default ContactUs;

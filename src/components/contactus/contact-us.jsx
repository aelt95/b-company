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
    <section className="contact-us-section" id="contact">
      <div className="contact-wraper">
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
        <div className="contact-us-right">
          <Image src={contactUsImg} className="contact-img" />
        </div>
      </div>
      <footer>
        <div className="footer-grid">
          <div className="footer-info-col">
            <span>SOLIDUS</span>
            <ul>
              <li>
                <a href=""></a>
              </li>
              <li>
                <a href=""></a>
              </li>
              <li>
                <a href=""></a>
              </li>
            </ul>
          </div>
          <div className="footer-contact-col">Contact information here</div>
        </div>
      </footer>
    </section>
  );
};

export default ContactUs;

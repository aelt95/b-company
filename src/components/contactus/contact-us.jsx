import { useRef, useEffect, useState } from "react";
import styles from "./contact-us.css";
import Image from "next/image";
import contactUsImg from "../../../public/contactus.svg";
const ContactUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    return alert("Message sended");
  };
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting);
      },
      { root: null, threshold: 0, rootMargin: "-40px" }
    );
    observer.observe(ref.current);
  }, []);
  return (
    <section
      ref={ref}
      className={
        isVisible ? "animate-section contact-us-section" : "contact-us-section"
      }
      id="contact"
    >
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
    </section>
  );
};

export default ContactUs;

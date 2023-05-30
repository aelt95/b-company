"use client";
import styles from "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTractor,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer>
      <FontAwesomeIcon icon={faTractor} className="footer-tractor" />
      <div className="footer-grid">
        <div className="footer-info-col">
          <a href="#">
            <span>SOLIDUS</span>
          </a>
          <ul>
            <li>
              <a href="https://www.facebook.com/" target="_blank">
                <FontAwesomeIcon
                  icon={faFacebook}
                  style={{ color: "#db324d" }}
                />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/" target="_blank">
                <FontAwesomeIcon
                  icon={faTwitter}
                  style={{ color: "#db324d" }}
                />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/" target="_blank">
                <FontAwesomeIcon
                  icon={faInstagram}
                  style={{ color: "#db324d" }}
                />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-contact-col">
          <span>Contact us</span>
          <ul>
            <li>
              <FontAwesomeIcon
                icon={faLocationDot}
                style={{ color: "#db324d" }}
              />
              {" Dračevac 18/D, 21000, Split"}
            </li>
            <li>
              <FontAwesomeIcon icon={faPhone} style={{ color: "#db324d" }} />
              <a href="tel:97-000-0000">{" +385 97-000-0000"}</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
